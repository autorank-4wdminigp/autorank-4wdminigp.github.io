﻿// 各パーツの改造後のステータス
var statusArray = [];
// 各パーツの改造前のステータス
var statusArrayInit = [];
// 各パーツの改造の状態
var kaizouArray = [];
// 各パーツの改造によるステータス変動
var kaizouArrayUnit = [];
// 各パーツの改造状態を記録した文字列の配列(URL用)
var urlArray = [];

// マシン詳細の計算
// disp1: true -> 旧アプリ表示, false -> 標準アクセサリー適用表
// return: {value: マシンのパラメータの配列(改造後), valueKaiSv: マシンのパラメータの配列(改造後)}
function Result_Calc(disp1) {
	var result = {
		value: [],
		valueKaiSv: []
	};
	for (var i = 0; i < typeValue.length; i++) {
		result.value.push(0.0);
		result.valueKaiSv.push(0.0);
	}
	for (var value0 = 0; value0 < nameValue.length; value0++) {
		var disp1Flg = 0;
		if (disp1) {
			if (value0 >= 27 && value0 <= 32) {
				if (kaizouArray[value0][0] == 0) disp1Flg = 1;
			}
		}
		for (var i = 0; i < typeSelect[nameCalc[value0]].length; i++) {
			var typeIndex = typeSelect[nameCalc[value0]][i];
			if (typeIndex >= 0) {
				if (disp1Flg == 1 && typeIndex != 5) continue;
				result.value[typeIndex] += statusArrayInit[value0][typeIndex];
				result.valueKaiSv[typeIndex] += statusArray[value0][typeIndex];
			}
		}
	}
	// 総合評価の計算
	for (var i = 1; i < 6; i++) {
		result.value[34] += result.value[i];
		result.valueKaiSv[34] += result.valueKaiSv[i];
	}
	return result;
}

// マシン診断の計算
// resultValueKai: マシンのパラメータの配列(改造後)
// shindantire: 1 -> タイヤ径差表示無し, 2 -> マシン診断タイヤ径差表示
// shindantirekei: タイヤ径差
function Diagnosis_Calc(resultValueKai, shindantire, shindantirekei) {
	var diagnosis = {};

	//ローラースラスト角
	var rollerangleValue = Math.max(0, resultValueKai[12]);
	diagnosis[diagnosisValue[10]] = rollerangleValue;

	//重さ
	var weightValue = resultValueKai[5];
	diagnosis[diagnosisValue[11]] = weightValue;

	//ブレーキ性能
	var brakeValue = resultValueKai[23] / 2000.0;
	var bodyOption1 = kaizouArray[2][23];
	var bodyOption2 = kaizouArray[2][24];
	var bodyOption3 = kaizouArray[2][25];
	if (brakeValue != 0 && bodyOption1 == 6) brakeValue += 0.05;
	if (brakeValue != 0 && bodyOption1 == 16) brakeValue += 0.06;
	if (brakeValue != 0 && bodyOption1 == 26) brakeValue += 0.05;
	if (brakeValue != 0 && bodyOption1 == 37) brakeValue += 0.06;
	if (brakeValue != 0 && bodyOption2 == 6) brakeValue += 0.015;
	if (brakeValue != 0 && bodyOption2 == 16) brakeValue += 0.03;
	if (brakeValue != 0 && bodyOption3 == 6) brakeValue += 0.015;
	if (brakeValue != 0 && bodyOption3 == 16) brakeValue += 0.03;
	diagnosis[diagnosisValue[12]] = brakeValue;

	//バッテリー消費量
	var batteryIndex = kaizouArray[33][0];
	var batteryPower = new Array(1.0, 1.03);
	var batteryCapacity = new Array(950, 1250);
	var setsudenUp = 1.0;
	var setsudenValue = resultValueKai[10];
	if (setsudenValue != 0 && bodyOption1 == 8) setsudenUp += 0.4;
	if (setsudenValue != 0 && bodyOption1 == 18) setsudenUp += 0.5;
	if (setsudenValue != 0 && bodyOption1 == 32) setsudenUp -= 0.1;
	if (setsudenValue != 0 && bodyOption1 == 33) setsudenUp -= 0.1;
	if (setsudenValue != 0 && bodyOption2 == 8) setsudenUp += 0.12;
	if (setsudenValue != 0 && bodyOption2 == 18) setsudenUp += 0.17;
	if (setsudenValue != 0 && bodyOption3 == 8) setsudenUp += 0.12;
	if (setsudenValue != 0 && bodyOption3 == 18) setsudenUp += 0.17;
	var batteryValue = resultValueKai[22] * Math.max(1 - setsudenValue * setsudenUp / 10000.0, 0.0);
	diagnosis[diagnosisValue[2]] = batteryValue;

	//異径スピロス
	var bodySpeedloss = 1.0;
	if (bodyOption1 == 51) bodySpeedloss -= 0.15;
	var ftirekeiValue = statusArray[6][16];
	var rtirekeiValue = statusArray[7][16];
	var mintiresenkai;
	var mintirekei;
	if (ftirekeiValue <= rtirekeiValue) {
		mintiresenkai = statusArray[6][14];
		mintirekei = ftirekeiValue;
	} else {
		mintiresenkai = statusArray[7][14];
		mintirekei = rtirekeiValue;
	}
	var tirekeisa = Math.abs(ftirekeiValue - rtirekeiValue);
	if (shindantire == 2) {
		tirekeisa = shindantirekei;
	}
	var speedlossValue = 800.0 * tirekeisa * mintiresenkai / mintirekei;
	var bodyPower = 1.0;
	if (bodyOption1 == 2) bodyPower += 0.02;
	if (bodyOption1 == 12) bodyPower += 0.03;
	if (bodyOption1 == 22) bodyPower += 0.05;
	if (bodyOption1 == 25) bodyPower += 0.075;
	if (bodyOption1 == 30) bodyPower += 0.03;
	if (bodyOption1 == 31) bodyPower += 0.03;
	if (bodyOption1 == 37) bodyPower += 0.03;
	if (bodyOption1 == 39) bodyPower += 0.02;
	if (bodyOption2 == 2) bodyPower += 0.006;
	if (bodyOption2 == 12) bodyPower += 0.015;
	if (bodyOption3 == 2) bodyPower += 0.006;
	if (bodyOption3 == 12) bodyPower += 0.015;
	var bodyPowerloss = 1.0;
	if (bodyOption1 == 22) bodyPowerloss -= 0.1;

	//最高速度
	var bodySpeed = 1.0;
	if (bodyOption1 == 1) bodySpeed += 0.02;
	if (bodyOption1 == 11) bodySpeed += 0.03;
	if (bodyOption1 == 41) bodySpeed += 0.04;
	if (bodyOption1 == 21) bodySpeed += 0.04;
	if (bodyOption1 == 23) bodySpeed += 0.03;
	if (bodyOption1 == 26) bodySpeed += 0.03;
	if (bodyOption1 == 27) bodySpeed += 0.06;
	if (bodyOption1 == 29) bodySpeed += 0.03;
	if (bodyOption1 == 32) bodySpeed += 0.07;
	if (bodyOption1 == 34) bodySpeed += 0.035; //エアロストリーム
	if (bodyOption1 == 35) bodySpeed += 0.03;
	if (bodyOption1 == 38) bodySpeed += 0.03;
	if (bodyOption1 == 51) bodySpeed += 0.03;
	if (bodyOption1 == 52) bodySpeed += 0.05;
	if (bodyOption2 == 1) bodySpeed += 0.006;
	if (bodyOption2 == 11) bodySpeed += 0.015;
	if (bodyOption2 == 41) bodySpeed += 0.025;
	if (bodyOption3 == 1) bodySpeed += 0.006;
	if (bodyOption3 == 11) bodySpeed += 0.015;
	if (bodyOption3 == 41) bodySpeed += 0.025;
	var hoseiSpeedStr = "";
	var hoseiAcceleStr = "";
	var powerlossValue = resultValueKai[7];
	var powerlossMax = ((0.000025 * powerlossValue + 0.75) - (resultValueKai[6] + bodySpeedloss * (resultValueKai[8] + speedlossValue) / 10000.0 * weightValue * rtirekeiValue / 2.0) / (10.0 * bodyPower * resultValueKai[2] * resultValueKai[21])) * 10000.0 / bodyPowerloss;
	if (powerlossValue > powerlossMax) {
		powerlossValue = powerlossMax;
		hoseiSpeedStr = "PL)";
		hoseiAcceleStr = "PL)";
	}
	var spowerValue = (1.0 - bodyPowerloss * powerlossValue / 10000.0 - (resultValueKai[6] + bodySpeedloss * (resultValueKai[8] + speedlossValue) / 10000.0 * weightValue * rtirekeiValue / 2.0) / (10.0 * bodyPower * resultValueKai[2] * resultValueKai[21]));
	var speedValue = batteryPower[batteryIndex] * (2.0 * Math.PI * rtirekeiValue / 2000.0) * (10.0 * bodySpeed * resultValueKai[1] / 60.0) / resultValueKai[21];
	var speedValue2 = speedValue * spowerValue - resultValueKai[9] / 1000.0;
	var speedValueNotDf = speedValue * spowerValue / 2.0;
	if (speedValueNotDf > speedValue2) {
		speedValue2 = speedValueNotDf;
		hoseiSpeedStr = "DF)";
	}
	diagnosis[diagnosisValue[0]] = hoseiSpeedStr + (speedValue2 * 3.6);
	diagnosis[diagnosisValue[1]] = hoseiSpeedStr + speedValue2;

	//加速度(毎秒)
	var acceleValue = (10.0 * bodyPower * resultValueKai[2] / 1000.0) / 4.0 * resultValueKai[21] / (rtirekeiValue / 2000.0 * weightValue);
	var acceleValue2 = acceleValue * spowerValue;
	diagnosis[diagnosisValue[3]] = hoseiAcceleStr + acceleValue2;

	//消費電流量
	var currentValue = 2.25 * 10.0 * bodyPower * resultValueKai[2] * (speedValue / speedValue2) * batteryValue / 3600.0 / 1000.0 / batteryCapacity[batteryIndex];
	diagnosis[diagnosisValue[28]] = currentValue;

	//最高速25%減少
	var speed25dec = (0.75 * speedValue2 + resultValueKai[9] / 1000.0) / spowerValue / speedValue * resultValueKai[1];
	diagnosis[diagnosisValue[29]] = -1.0 * Math.log((speed25dec * 2 - resultValueKai[1]) / resultValueKai[1]) / currentValue;

	//10秒後最高速
	diagnosis[diagnosisValue[30]] = ((1.0 + Math.exp(-1.0 * currentValue * 10.0 )) / 2.0 * speedValue * spowerValue - resultValueKai[9] / 1000.0) * 3.6;
	diagnosis[diagnosisValue[31]] = ((1.0 + Math.exp(-1.0 * currentValue * 20.0 )) / 2.0 * speedValue * spowerValue - resultValueKai[9] / 1000.0) * 3.6;

	//前後の重心
	var chassisIndex = kaizouArray[3][0];
	var gravityValue = 0.0;
	for (var i = 0; i < nameValue.length; i++) {
		var weightpartsValue = statusArray[i][5];
		if (i == 3) {
			gravityValue += resultValueKai[31] * chassisGravity[chassisIndex] * weightpartsValue;
		} else if (i == 0) {
			gravityValue += resultValueKai[31] * selectValue[3][chassisIndex][3] / 10000.0 * weightpartsValue;
		} else if (i == 33) {
			gravityValue += resultValueKai[31] * selectValue[3][chassisIndex][4] / 10000.0 * weightpartsValue;
		} else {
			gravityValue += resultValueKai[31] * partsGravity[i] * weightpartsValue;
		}
	}
	gravityValue = gravityValue / weightValue;
	diagnosis[diagnosisValue[9]] = gravityValue;

	//最高速到達時間
	diagnosis[diagnosisValue[4]] = Math.log(100.0 * speedValue2) / (4.0 * acceleValue2);

	//タイヤグリップ
	var ftiregripUp = 1.0;
	if (bodyOption1 == 21) ftiregripUp += 0.06; //かっとびマシン
	if (bodyOption1 == 22) ftiregripUp += 0.06; //パワーブースト
	if (bodyOption1 == 23) ftiregripUp += 0.06; //流星
	if (bodyOption1 == 24) ftiregripUp += 0.15; //パワードリフト
	if (bodyOption1 == 25) ftiregripUp += 0.07; //アクセルアーマー
	if (bodyOption1 == 26) ftiregripUp += 0.015; //紅い閃光
	if (bodyOption1 == 27) ftiregripUp += 0.1; //ドラゴンビート
	if (bodyOption1 == 29) ftiregripUp += 0.06; //ワイルドラン
	if (bodyOption1 == 30) ftiregripUp += 0.06; //ハイドロウェーブ
	if (bodyOption1 == 31) ftiregripUp += 0.06; //アースエナジー
	if (bodyOption1 == 32) ftiregripUp += 0.06; //高貴な走り
	if (bodyOption1 == 33) ftiregripUp += 0.15; //気高き力
	if (bodyOption1 == 34) ftiregripUp += 0.06; //エアロストリーム
	if (bodyOption1 == 35) ftiregripUp += 0.07; //GPチップγ
	if (bodyOption1 == 36) ftiregripUp += 0.07; //サンダードリフト
	if (bodyOption1 == 37) ftiregripUp += 0.03; //エアブレーキ
	if (bodyOption1 == 38) ftiregripUp += 0.1; //Shooting Stars
	if (bodyOption1 == 39) ftiregripUp += 0.07; //バイパードリフト
	if (bodyOption1 == 51) ftiregripUp += 0.07; //GPチップXSP
	if (bodyOption1 == 52) ftiregripUp += 0.07; //ZMCジェット
	var ftiregripValue = statusArray[6][13];
	var rtiregripValue = statusArray[7][13];
	var tiregripValue = (ftiregripValue * (resultValueKai[31] / 2.0 + gravityValue) + rtiregripValue * (resultValueKai[31] / 2.0 - gravityValue)) / resultValueKai[31];
	//tiregripValue += statusArray[33][13];
	diagnosis[diagnosisValue[5]] = tiregripValue * ftiregripUp / 100.0;

	//空転
	diagnosis[diagnosisValue[15]] = (diagnosis[diagnosisValue[5]] * 10.0 + 0.3) * 3.6;

	//耐水空転
	var taisuigripUp = 0.0;
	if (resultValueKai[27] != 0 && bodyOption1 == 10) taisuigripUp += 2500.0;
	if (resultValueKai[27] != 0 && bodyOption1 == 30) taisuigripUp += 5000.0;
	if (resultValueKai[27] != 0 && bodyOption2 == 10) taisuigripUp += 1250.0;
	if (resultValueKai[27] != 0 && bodyOption3 == 10) taisuigripUp += 1250.0;
	diagnosis[diagnosisValue[19]] = (diagnosis[diagnosisValue[5]] * 10.0 * Math.min(resultValueKai[27] + 200.0 + taisuigripUp, 10000.0) / 10000.0 + 0.3) * 3.6;

	//耐風最高速
	var taifuugripUp = 0.0;
	if (resultValueKai[26] != 0 && bodyOption1 == 38) taifuugripUp += 5000.0;
	var taifuuFuka = (1.0 - Math.min(resultValueKai[26] + taifuugripUp, 10000.0) / 10000.0) * weightValue * 0.086 * (weightValue * rtirekeiValue / 2.0) / (10.0 * bodyPower * resultValueKai[2] * resultValueKai[21]);
	diagnosis[diagnosisValue[16]] = Math.max(speedValue * (spowerValue - taifuuFuka) - resultValueKai[9] / 1000.0, speedValue2 / 5.0) * 3.6;
	//diagnosis[diagnosisValue[16]] = Math.max(speedValue2 * (1.0 - (1.0 - Math.min(resultValueKai[26] + taifuugripUp, 10000.0) / 10000.0) * weightValue / acceleValue2 / 46.0), speedValue2 / 5.0) * 3.6;

	//芝最高速
	var bodyOffload = 0.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 9) bodyOffload += 50000.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 29) bodyOffload += 50000.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 31) bodyOffload += 50000.0;
	if (resultValueKai[20] != 0 && bodyOption2 == 9) bodyOffload += 15000.0;
	if (resultValueKai[20] != 0 && bodyOption3 == 9) bodyOffload += 15000.0;
	var shibaFuka = (1.0 - Math.min(bodyOffload + resultValueKai[20], 10000.0) / 10000.0) * weightValue * 0.068 * (weightValue * rtirekeiValue / 2.0) / (10.0 * bodyPower * resultValueKai[2] * resultValueKai[21]);
	diagnosis[diagnosisValue[17]] = Math.max(speedValue * (spowerValue - shibaFuka) - resultValueKai[9] / 1000.0, speedValue2 / 5.0) * 3.6;
	//diagnosis[diagnosisValue[17]] = Math.max(speedValue2 * (1.0 - (1.0 - Math.min(bodyOffload + resultValueKai[20], 10000.0) / 10000.0) * weightValue / acceleValue2 / 58.0), speedValue2 / 5.0) * 3.6;

	//ダート最高速
	var dirtFuka = (1.0 - Math.min(bodyOffload + resultValueKai[20], 10000.0) / 10000.0) * weightValue * 0.048 * (weightValue * rtirekeiValue / 2.0) / (10.0 * bodyPower * resultValueKai[2] * resultValueKai[21]);
	diagnosis[diagnosisValue[18]] = Math.max(speedValue * (spowerValue - dirtFuka) - resultValueKai[9] / 1000.0, speedValue2 / 5.0) * 3.6;
	//diagnosis[diagnosisValue[18]] = Math.max(speedValue2 * (1.0 - (1.0 - Math.min(bodyOffload + resultValueKai[20], 10000.0) / 10000.0) * weightValue / acceleValue2 / 82.0), speedValue2 / 5.0) * 3.6;

	//コーナー安定速度
	var cornerspeedUp = 1.0;
	if (bodyOption1 == 3) cornerspeedUp += 0.1;
	if (bodyOption1 == 13) cornerspeedUp += 0.15;
	if (bodyOption1 == 23) cornerspeedUp += 0.125; //流星
	if (bodyOption1 == 25) cornerspeedUp += 0.15;
	if (bodyOption2 == 3) cornerspeedUp += 0.03;
	if (bodyOption2 == 13) cornerspeedUp += 0.075;
	if (bodyOption3 == 3) cornerspeedUp += 0.03;
	if (bodyOption3 == 13) cornerspeedUp += 0.075;
	var rollecornerValue1 = statusArray[12][3];
	var rollecornerValue2 = statusArray[15][3];
	diagnosis[diagnosisValue[20]] = "仮)" + (0.385 * Math.sqrt((resultValueKai[3] - (rollecornerValue1 + rollecornerValue2) + (rollecornerValue1 + rollecornerValue2) * 0.2) * cornerspeedUp) * 3.6);
	diagnosis[diagnosisValue[21]] = "仮)" + (0.385 * Math.sqrt((resultValueKai[3] - (rollecornerValue1 + rollecornerValue2) + (rollecornerValue1 + rollecornerValue2) * 0.2) * cornerspeedUp * 0.35) * 3.6);
	//diagnosis[diagnosisValue[16]] = resultValueKai[3] - (rollecornerValue1 + rollecornerValue2) + (rollecornerValue1 + rollecornerValue2) * 0.2;

	//最高速95%到達時間
	diagnosis[diagnosisValue[22]] = - speedValue2 / (4.0 * acceleValue2) * Math.log(0.05);

	//100m走
	//diagnosis[diagnosisValue[23]] = Time_Calc(0.0, 100.0, 100.0, 7, speedValue2, acceleValue2, 100.0);

	//25m走
	//diagnosis[diagnosisValue[26]] = Time_Calc(0.0, 25.0, 25.0, 5, speedValue2, acceleValue2, 25.0);

	//50m走
	//diagnosis[diagnosisValue[27]] = Time_Calc(0.0, 50.0, 50.0, 6, speedValue2, acceleValue2, 50.0);

	//var tdistanceflg = 0;
	//var tdistance = 0.0;
	//for (var t = 0.01; t < 100.0; t += 0.01) {
	//	var tspeedmax = (1.0 + Math.exp(-1.0 * currentValue * t )) / 2.0 * speedValue * spowerValue - resultValueKai[9] / 1000.0;
	//	var tspeed = tspeedmax * (1.0 - Math.exp(-4.0 * acceleValue2 / tspeedmax * t));
	//	tdistance += tspeed * 0.01;
	//	if (tdistanceflg == 0 && tdistance >= 25.0) {
	//		diagnosis[diagnosisValue[26]] = t;
	//		tdistanceflg = 1;
	//	} else if (tdistanceflg == 1 && tdistance >= 50.0) {
	//		diagnosis[diagnosisValue[27]] = t;
	//		tdistanceflg = 2;
	//	} else if (tdistanceflg == 2 && tdistance >= 100.0) {
	//		diagnosis[diagnosisValue[23]] = t;
	//		break;
	//	}
	//}

	var tdistanceArray = new Array(25.0, 50.0, 100.0);
	var tdiagnosisArray = new Array(26, 27, 23);
	var tdistance = 0.0;
	var tspeed = 0.0;
	var tspeedTime = 0.0;
	var tspeedBack = 0.0;
	var tdistanceBack = 0.0;
	for (var m = 0; m < 3; m++) {
		diagnosis[diagnosisValue[tdiagnosisArray[m]]] = "";
	}
	if (speedValue2 >= 1.75) {
		for (var m = 0; m < 3; m++) {
			for (var i = 2; i <= 5; i++) {
				var timeUnit = Math.pow(10, i);
				for (var j = 1; j <= 10000; j++) {
					var t = tspeedTime + j / timeUnit;
					var tspeedmax = (1.0 + Math.exp(-1.0 * currentValue * t )) / 2.0 * speedValue * spowerValue - resultValueKai[9] / 1000.0;
					//var taccele = 4.0 * acceleValue2 * (1.0 - tspeed / tspeedmax);
					var tspeedK1 = 4.0 * acceleValue2 * (1.0 - tspeed / tspeedmax) / timeUnit;
					var tspeedK2 = 4.0 * acceleValue2 * (1.0 - (tspeed + tspeedK1 / 2.0) / tspeedmax) / timeUnit;
					var tspeedK3 = 4.0 * acceleValue2 * (1.0 - (tspeed + tspeedK2 / 2.0) / tspeedmax) / timeUnit;
					var tspeedK4 = 4.0 * acceleValue2 * (1.0 - (tspeed + tspeedK3) / tspeedmax) / timeUnit;
					tspeedBack = tspeed;
					tdistanceBack = tdistance;
					//tspeed += taccele / timeUnit;
					tspeed += (tspeedK1 + tspeedK2 * 2.0 + tspeedK3 * 2.0 + tspeedK4) / 6.0;
					tdistance += tspeed / timeUnit;
					if (tdistance >= tdistanceArray[m]) {
						if (i < 5) {
							tspeedTime += (j - 1) / timeUnit;
							tspeed = tspeedBack;
							tdistance = tdistanceBack;
						} else {
							tspeedTime += j / timeUnit;
							diagnosis[diagnosisValue[tdiagnosisArray[m]]] = t;
						}
						break;
					}
				}
			}
		}
	}

	//スタミナ耐久
	var bodyStamina = 1.0;
	if (bodyOption1 == 5) bodyStamina += 0.1;
	if (bodyOption1 == 15) bodyStamina += 0.2;
	if (bodyOption1 == 25) bodyStamina += 0.2;
	if (bodyOption1 == 35) bodyStamina += 0.2;
	if (bodyOption1 == 52) bodyStamina += 0.1;
	if (bodyOption2 == 5) bodyStamina += 0.05;
	if (bodyOption2 == 15) bodyStamina += 0.1;
	if (bodyOption3 == 5) bodyStamina += 0.05;
	if (bodyOption3 == 15) bodyStamina += 0.1;
	var staminaValue = (resultValueKai[4] + resultValueKai[28]) * bodyStamina;
	diagnosis[diagnosisValue[24]] = staminaValue;
	diagnosis[diagnosisValue[25]] = staminaValue * staminaValue * 0.5975 / (speedValue2 * speedValue2 * weightValue * 0.42); //0.4825 0.5975 0.7125

	//コーナー減速率
	var bodyCornerdecele = 1.0; //旋回
	if (bodyOption1 == 4) bodyCornerdecele -= 0.7;
	if (bodyOption1 == 14) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 44) bodyCornerdecele -= 0.8;
	if (bodyOption1 == 24) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 33) bodyCornerdecele -= 0.85;
	if (bodyOption1 == 34) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 36) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 39) bodyCornerdecele -= 0.75;
	if (bodyOption2 == 4) bodyCornerdecele -= 0.35;
	if (bodyOption2 == 14) bodyCornerdecele -= 0.42;
	if (bodyOption2 == 44) bodyCornerdecele -= 0.5;
	if (bodyOption3 == 4) bodyCornerdecele -= 0.35;
	if (bodyOption3 == 14) bodyCornerdecele -= 0.42;
	if (bodyOption3 == 44) bodyCornerdecele -= 0.5;
	var bodyCornerdecele2 = 1.0; //摩擦
	if (bodyOption1 == 4) bodyCornerdecele2 -= 0.17;
	if (bodyOption1 == 14) bodyCornerdecele2 -= 0.2;
	if (bodyOption1 == 44) bodyCornerdecele2 -= 0.5;
	if (bodyOption2 == 4) bodyCornerdecele2 -= 0.085;
	if (bodyOption2 == 14) bodyCornerdecele2 -= 0.1;
	if (bodyOption2 == 44) bodyCornerdecele2 -= 0.25;
	if (bodyOption3 == 4) bodyCornerdecele2 -= 0.085;
	if (bodyOption3 == 14) bodyCornerdecele2 -= 0.1;
	if (bodyOption3 == 44) bodyCornerdecele2 -= 0.25;
	var bodyCornerdecele3 = 1.0; //抵抗
	if (bodyOption1 == 24) bodyCornerdecele3 -= 0.7;
	if (bodyOption1 == 33) bodyCornerdecele3 -= 0.7;
	var rollermasatsuValue = 0.0;
	var rollerNo = new Array(14, 11, 15, 12, 16, 13, 17, 18);
	for (var i = 0; i < rollerNo.length; i++) {
		if (kaizouArray[rollerNo[i]][0] != 0) {
			rollermasatsuValue = statusArray[rollerNo[i]][17];
		}
	}
	var rollerteikouValue1 = -100.0;
	rollerNo = new Array(14, 11);
	for (var i = 0; i < rollerNo.length; i++) {
		if (kaizouArray[rollerNo[i]][0] != 0) {
			rollerteikouValue1 = Math.max(rollerteikouValue1, statusArray[rollerNo[i]][18]);
		}
	}
	var rollerteikouValue2 = -100.0;
	rollerNo = new Array(16, 13, 17, 18);
	for (var i = 0; i < rollerNo.length; i++) {
		if (kaizouArray[rollerNo[i]][0] != 0) {
			rollerteikouValue2 = Math.max(rollerteikouValue2, statusArray[rollerNo[i]][18]);
		}
	}
	var rollerteikouValue = Math.max(rollerteikouValue1, rollerteikouValue2);
	if (rollerteikouValue1 < -10.0 || rollerteikouValue2 < -10.0) {
		rollerNo = new Array(15, 12);
		for (var i = 0; i < rollerNo.length; i++) {
			if (kaizouArray[rollerNo[i]][0] != 0) {
				rollerteikouValue = Math.max(rollerteikouValue, statusArray[rollerNo[i]][18]);
			}
		}
	}
	if (rollerteikouValue < -10.0) {
		rollerteikouValue = 0.0;
	}
	diagnosis[diagnosisValue[13]] = rollermasatsuValue;
	diagnosis[diagnosisValue[14]] = rollerteikouValue;
	var masatsuValue = rollerangleValue * rollermasatsuValue;
	if (rollerteikouValue1 < -10.0) {
		rollerteikouValue += 1250.0;
	}
	var ftiresenkaiValue = statusArray[6][14];
	var rtiresenkaiValue = statusArray[7][14];
	var treadValue = Math.sqrt(resultValueKai[30] * resultValueKai[30] + resultValueKai[31] * resultValueKai[31]);
	//var tiresenkaiValue = (ftiresenkaiValue * (resultValueKai[31] / 2.0 - gravityValue) + rtiresenkaiValue * (resultValueKai[31] / 2.0 + gravityValue)) / resultValueKai[31];
	//var cornerweightValue = 0.024516625 * treadValue;
	//var cornerdeceleA = 1.0 / (916.0 - cornerweightValue * Math.max(tiresenkaiValue * bodyCornerdecele, 1.0) / acceleValue2);
	//var cornerdeceleValue = 1.0 / (cornerdeceleA * 458.0 + Math.sqrt((cornerdeceleA * 458.0) * (cornerdeceleA * 458.0) + cornerdeceleA * speedValue2 * speedValue2 / acceleValue2 * (masatsuValue * bodyCornerdecele2 * (1.0 + Math.max(tiresenkaiValue * bodyCornerdecele, 1.0) * 0.0005611396) + rollerteikouValue / 20.0 * bodyCornerdecele3)));
	var tiresenkaiValue = resultValueKai[14];
	var senkaisaValue = (rtiresenkaiValue - ftiresenkaiValue) / tiresenkaiValue;
	var senkaiC = -0.000000095868573 * (resultValueKai[30] + resultValueKai[31] * 2 + Math.abs(senkaisaValue) * 3) + 0.000032630514858;
	var senkaiA = 45.188272213660500 * senkaisaValue - 0.008372879447291;
	var cornerweightValue = (senkaiC * (gravityValue + senkaiA) * (gravityValue + senkaiA) + 0.024516625024408 - senkaiC * senkaiA * senkaiA) * treadValue;
	var cornerdeceleA = (1.0 - cornerweightValue * Math.max(tiresenkaiValue * bodyCornerdecele, 1.0) / (4.0 * acceleValue2 * 458.0));
	var cornerdeceleValue = cornerdeceleA / (0.5 + Math.sqrt(0.25 + 2.0 * cornerdeceleA * speedValue2 * speedValue2 / (4.0 * acceleValue2 * 458.0) * (masatsuValue * bodyCornerdecele2 * (1.0 + Math.max(tiresenkaiValue * bodyCornerdecele, 1.0) * 0.000280569811045) + rollerteikouValue / 20.0 * bodyCornerdecele3)));
	diagnosis[diagnosisValue[6]] = cornerdeceleValue;

	//ジャンプ飛距離
	var slopeLength = 0.07;
	var slopeAngle = 20.81;
	var slopeSpeedInit = speedValue2;
	if (brakeValue != 0) {
		slopeSpeedInit -= (10.0 + 10.0 * brakeValue - 0.17 * acceleValue2) * brakeValue;
		if (slopeSpeedInit < 0.0) slopeSpeedInit = 0.0;
	}
	var slopeAccele = -Math.sin(slopeAngle * (Math.PI / 180.0)) * 9.80665;
	var slopeTime = 0.0;
	for (var i = 0; i <= 5; i++) {
		var timeUnit = Math.pow(10, i);
		for (var j = 1; j <= 100; j++) {
			var t = slopeTime + j / timeUnit;
			if (speedValue2 * (1.0 + slopeAccele / (4.0 * acceleValue2)) * t + speedValue2 * speedValue2 / (4.0 * acceleValue2) * (1.0 + slopeAccele / (4.0 * acceleValue2) - slopeSpeedInit / speedValue2) * (Math.exp(-4.0 * acceleValue2 / speedValue2 * t) - 1.0) >= slopeLength) {
				if (i < 5) {
					slopeTime += (j - 1) / timeUnit;
				} else {
					slopeTime += j / timeUnit;
				}
				break;
			}
		}
	}
	var slopeSpeed = speedValue2 * (1.0 + slopeAccele / (4.0 * acceleValue2) - (1.0 + slopeAccele / (4.0 * acceleValue2) - slopeSpeedInit / speedValue2) * Math.exp(-4.0 * acceleValue2 / speedValue2 * slopeTime));
	diagnosis[diagnosisValue[7]] = slopeSpeed * slopeSpeed * Math.sin(2.0 * slopeAngle * (Math.PI / 180.0)) / 9.80665 + 0.00005 * gravityValue;
	//var jumpValue = Math.sin(2.0 * 20.0 * (Math.PI / 180.0)) / 9.80665;
	//diagnosis[diagnosisValue[7]] = speedValue2 * speedValue2 * jumpValue;

	//バウンド時間
	var bodyBoundtime = 1.0; //タイヤ反発
	if (bodyOption1 == 7) bodyBoundtime -= 0.05;
	if (bodyOption1 == 17) bodyBoundtime -= 0.10;
	if (bodyOption2 == 7) bodyBoundtime -= 0.04;
	if (bodyOption2 == 17) bodyBoundtime -= 0.08;
	if (bodyOption3 == 7) bodyBoundtime -= 0.04;
	if (bodyOption3 == 17) bodyBoundtime -= 0.08;
	var bodyBoundtime2 = 1.0; //制振
	if (bodyOption1 == 27) bodyBoundtime2 += 2.0;
	var seishinValue = resultValueKai[11];
	var ftirehanpatsuValue = statusArray[6][15];
	var rtirehanpatsuValue = statusArray[7][15];
	var tirehanpatsuValue = ftirehanpatsuValue + rtirehanpatsuValue;
	slopeLength = 0.07;
	slopeAngle = 10.0;
	slopeSpeedInit = speedValue2;
	if (brakeValue != 0) {
		slopeSpeedInit -= (10.0 + 10.0 * brakeValue - 0.17 * acceleValue2) * brakeValue;
		if (slopeSpeedInit < 0.0) slopeSpeedInit = 0.0;
	}
	slopeAccele = -Math.sin(slopeAngle * (Math.PI / 180.0)) * 9.80665;
	slopeTime = 0.0;
	for (var i = 0; i <= 5; i++) {
		var timeUnit = Math.pow(10, i);
		for (var j = 1; j <= 100; j++) {
			var t = slopeTime + j / timeUnit;
			if (speedValue2 * (1.0 + slopeAccele / (4.0 * acceleValue2)) * t + speedValue2 * speedValue2 / (4.0 * acceleValue2) * (1.0 + slopeAccele / (4.0 * acceleValue2) - slopeSpeedInit / speedValue2) * (Math.exp(-4.0 * acceleValue2 / speedValue2 * t) - 1.0) >= slopeLength) {
				if (i < 5) {
					slopeTime += (j - 1) / timeUnit;
				} else {
					slopeTime += j / timeUnit;
				}
				break;
			}
		}
	}
	slopeSpeed = speedValue2 * (1.0 + slopeAccele / (4.0 * acceleValue2) - (1.0 + slopeAccele / (4.0 * acceleValue2) - slopeSpeedInit / speedValue2) * Math.exp(-4.0 * acceleValue2 / speedValue2 * slopeTime));
	var hanpatsuValue;
	var seishinValueInit = weightValue * (63.0 - 50.0 * tirehanpatsuValue * bodyBoundtime / 1000.0) * (tirehanpatsuValue * bodyBoundtime / 1000.0 - (slopeSpeed / 300.0 + 0.00005 * gravityValue) * 9.80665 / (2.0 * slopeSpeed * Math.sin(slopeAngle * (Math.PI / 180.0)) + (slopeSpeed / 300.0 + 0.00005 * gravityValue) * 9.80665)) / bodyBoundtime2;
	if (seishinValueInit < 0) {
		hanpatsuValue = tirehanpatsuValue * bodyBoundtime / 1000.0 - seishinValue * bodyBoundtime2 / (weightValue * (63.0 - 50.0 * tirehanpatsuValue * bodyBoundtime / 1000.0)) / 5.0;
	} else if (seishinValueInit > seishinValue) {
		hanpatsuValue = tirehanpatsuValue * bodyBoundtime / 1000.0 - seishinValue * bodyBoundtime2 / (weightValue * (63.0 - 50.0 * tirehanpatsuValue * bodyBoundtime / 1000.0));
	} else {
		hanpatsuValue = tirehanpatsuValue * bodyBoundtime / 1000.0 - seishinValueInit * bodyBoundtime2 / (weightValue * (63.0 - 50.0 * tirehanpatsuValue * bodyBoundtime / 1000.0)) - (seishinValue - seishinValueInit) * bodyBoundtime2 / (weightValue * (63.0 - 50.0 * tirehanpatsuValue * bodyBoundtime / 1000.0)) / 5.0;
	}
	var boundtimeValue = 2.0 * slopeSpeed * Math.sin(slopeAngle * (Math.PI / 180.0)) * hanpatsuValue / (1.0 - hanpatsuValue) / 9.80665 - 0.00005 * gravityValue;
	diagnosis[diagnosisValue[8]] = boundtimeValue;

	for (var i = 0; i < diagnosisValue.length; i++) {
		if (diagnosis[diagnosisValue[i]] != "" && Math.abs(diagnosis[diagnosisValue[i]]) < 0.00000000000001) diagnosis[diagnosisValue[i]] = 0;
	}

	return diagnosis;
}

function Time_Calc(time1, time2, step, num, speed, accele, distance) {
	if ((speed * (time1 + step * 0.5) + speed * speed / (4.0 * accele) * (Math.exp(- 4.0 * accele / speed * (time1 + step * 0.5)) - 1.0)) > distance) {
		if (num == 1) {
			for (var t = time1; t <= (time1 + step * 0.5); t += 0.01) {
				if ((speed * t + speed * speed / (4.0 * accele) * (Math.exp(- 4.0 * accele / speed * t) - 1.0)) >= distance) {
					return t;
				}
			}
		} else {
			return Time_Calc(time1, time1 + step * 0.5, step * 0.5, num - 1, speed, accele, distance);
		}
	} else {
		if (num == 1) {
			for (var t = (time1 + step * 0.5); t <= time2; t += 0.01) {
				if ((speed * t + speed * speed / (4.0 * accele) * (Math.exp(- 4.0 * accele / speed * t) - 1.0)) >= distance) {
					return  t;
				}
			}
		} else {
			return Time_Calc(time1 + step * 0.5, time2, step * 0.5, num - 1, speed, accele, distance);
		}
	}
}

function UrlCalc(value1) {
	var urlValue =  "";
	if (kaizouArray[value1][0] >= 61) {
		for (var i = 61; i <= 244; i+=61) {
			if (kaizouArray[value1][0] < i + 61) {
				urlValue = NumToUrl(i) + NumToUrl(kaizouArray[value1][0] - i);
				break;
			}
		}
	} else {
		urlValue = NumToUrl(kaizouArray[value1][0]);
	}
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		for (var i = 1; i <= slotNum; i++) {
			urlValue += NumToUrl(kaizouArray[value1][1 + (i - 1) * 3]);
			urlValue += NumToUrl(kaizouArray[value1][2 + (i - 1) * 3]);
			urlValue += NumToUrl(kaizouArray[value1][3 + (i - 1) * 3]);
		}
		if (value1 == 2) {
			urlValue += NumToUrl(kaizouArray[value1][22]);
			for (var i = 1; i <= 3; i++) {
				urlValue += NumToUrl(kaizouArray[value1][22 + i]);
			}
		}
	}
	urlArray[value1] = urlValue;
}

function UrlToNum(value) {
	if (value == "a") return 0;
	if (value == "b") return 1;
	if (value == "c") return 2;
	if (value == "d") return 3;
	if (value == "e") return 4;
	if (value == "f") return 5;
	if (value == "g") return 6;
	if (value == "h") return 7;
	if (value == "i") return 8;
	if (value == "j") return 9;
	if (value == "k") return 10;
	if (value == "l") return 11;
	if (value == "m") return 12;
	if (value == "n") return 13;
	if (value == "o") return 14;
	if (value == "p") return 15;
	if (value == "q") return 16;
	if (value == "r") return 17;
	if (value == "s") return 18;
	if (value == "t") return 19;
	if (value == "u") return 20;
	if (value == "v") return 21;
	if (value == "w") return 22;
	if (value == "x") return 23;
	if (value == "y") return 24;
	if (value == "z") return 25;
	if (value == "A") return 26;
	if (value == "B") return 27;
	if (value == "C") return 28;
	if (value == "D") return 29;
	if (value == "E") return 30;
	if (value == "F") return 31;
	if (value == "G") return 32;
	if (value == "H") return 33;
	if (value == "I") return 34;
	if (value == "J") return 35;
	if (value == "K") return 36;
	if (value == "L") return 37;
	if (value == "M") return 38;
	if (value == "N") return 39;
	if (value == "O") return 40;
	if (value == "P") return 41;
	if (value == "Q") return 42;
	if (value == "R") return 43;
	if (value == "S") return 44;
	if (value == "T") return 45;
	if (value == "U") return 46;
	if (value == "V") return 47;
	if (value == "W") return 48;
	if (value == "X") return 49;
	if (value == "Y") return 50;
	if (value == "Z") return 51;
	if (value == "1") return 52;
	if (value == "2") return 53;
	if (value == "3") return 54;
	if (value == "4") return 55;
	if (value == "5") return 56;
	if (value == "6") return 57;
	if (value == "7") return 58;
	if (value == "8") return 59;
	if (value == "9") return 60;
	
	if (value == "0") return 61;
	if (value == "-") return 122;
	if (value == "_") return 183;
	if (value == ".") return 244;
    return 0;
}

function NumToUrl(value) {
	if (value == 0) return "a";
	if (value == 1) return "b";
	if (value == 2) return "c";
	if (value == 3) return "d";
	if (value == 4) return "e";
	if (value == 5) return "f";
	if (value == 6) return "g";
	if (value == 7) return "h";
	if (value == 8) return "i";
	if (value == 9) return "j";
	if (value == 10) return "k";
	if (value == 11) return "l";
	if (value == 12) return "m";
	if (value == 13) return "n";
	if (value == 14) return "o";
	if (value == 15) return "p";
	if (value == 16) return "q";
	if (value == 17) return "r";
	if (value == 18) return "s";
	if (value == 19) return "t";
	if (value == 20) return "u";
	if (value == 21) return "v";
	if (value == 22) return "w";
	if (value == 23) return "x";
	if (value == 24) return "y";
	if (value == 25) return "z";
	if (value == 26) return "A";
	if (value == 27) return "B";
	if (value == 28) return "C";
	if (value == 29) return "D";
	if (value == 30) return "E";
	if (value == 31) return "F";
	if (value == 32) return "G";
	if (value == 33) return "H";
	if (value == 34) return "I";
	if (value == 35) return "J";
	if (value == 36) return "K";
	if (value == 37) return "L";
	if (value == 38) return "M";
	if (value == 39) return "N";
	if (value == 40) return "O";
	if (value == 41) return "P";
	if (value == 42) return "Q";
	if (value == 43) return "R";
	if (value == 44) return "S";
	if (value == 45) return "T";
	if (value == 46) return "U";
	if (value == 47) return "V";
	if (value == 48) return "W";
	if (value == 49) return "X";
	if (value == 50) return "Y";
	if (value == 51) return "Z";
	if (value == 52) return "1";
	if (value == 53) return "2";
	if (value == 54) return "3";
	if (value == 55) return "4";
	if (value == 56) return "5";
	if (value == 57) return "6";
	if (value == 58) return "7";
	if (value == 59) return "8";
	if (value == 60) return "9";
	
	if (value == 61) return "0";
	if (value == 122) return "-";
	if (value == 183) return "_";
	if (value == 244) return ".";
	return "a";//-_.~ !'() =&
}
