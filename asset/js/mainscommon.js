// 各パーツの改造後のステータス
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
	if (brakeValue != 0 && bodyOption1 == 26) brakeValue += 0.05;
	if (brakeValue != 0 && bodyOption2 == 6) brakeValue += 0.015;
	if (brakeValue != 0 && bodyOption3 == 6) brakeValue += 0.015;
	diagnosis[diagnosisValue[12]] = brakeValue;

	//バッテリー消費量
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
	diagnosis[diagnosisValue[2]] = resultValueKai[22] * Math.max(1 - setsudenValue * setsudenUp / 10000.0, 0.0);

	//加速度(毎秒)
	var ftirekeiValue = statusArray[6][16];
	var rtirekeiValue = statusArray[7][16];
	var mintiresenkai;
	var mintirespeedloss;
	if (ftirekeiValue <= rtirekeiValue) {
		mintiresenkai = statusArray[6][14];
		mintirespeedloss = statusArrayInit[6][8];
	} else {
		mintiresenkai = statusArray[7][14];
		mintirespeedloss = statusArrayInit[7][8];
	}
	var tiresenkaisa = Math.abs(ftirekeiValue - rtirekeiValue);
	if (shindantire == 2) {
		tiresenkaisa = shindantirekei;
	}
	var bodyPower = 1.0;
	if (bodyOption1 == 2) bodyPower += 0.02;
	if (bodyOption1 == 12) bodyPower += 0.03;
	if (bodyOption1 == 22) bodyPower += 0.05;
	if (bodyOption1 == 30) bodyPower += 0.03;
	if (bodyOption1 == 31) bodyPower += 0.05;
	if (bodyOption2 == 2) bodyPower += 0.006;
	if (bodyOption2 == 12) bodyPower += 0.015;
	if (bodyOption3 == 2) bodyPower += 0.006;
	if (bodyOption3 == 12) bodyPower += 0.015;
	var bodyPowerloss = 1.0;
	if (bodyOption1 == 22) bodyPowerloss -= 0.1;
	var speedlossValue = 28.0 * tiresenkaisa * mintiresenkai * 1000.0 / mintirespeedloss;
	var acceleValue2 = ((10.0 * bodyPower * resultValueKai[2] * (1.0 - bodyPowerloss * resultValueKai[7] / 10000.0) * resultValueKai[21] - resultValueKai[6]) / (rtirekeiValue / 2000.0 * weightValue) - (resultValueKai[8] + speedlossValue) / 10.0) / 4000.0;
	diagnosis[diagnosisValue[3]] = acceleValue2;

	//最高速度
	var bodySpeed = 1.0;
	if (bodyOption1 == 1) bodySpeed += 0.02;
	if (bodyOption1 == 11) bodySpeed += 0.03;
	if (bodyOption1 == 21) bodySpeed += 0.04;
	if (bodyOption1 == 23) bodySpeed += 0.03;
	if (bodyOption1 == 26) bodySpeed += 0.03;
	if (bodyOption1 == 29) bodySpeed += 0.03;
	if (bodyOption1 == 32) bodySpeed += 0.07;
	if (bodyOption1 == 34) bodySpeed += 0.03;
	if (bodyOption1 == 35) bodySpeed += 0.03;
	if (bodyOption2 == 1) bodySpeed += 0.006;
	if (bodyOption2 == 11) bodySpeed += 0.015;
	if (bodyOption3 == 1) bodySpeed += 0.006;
	if (bodyOption3 == 11) bodySpeed += 0.015;
	var spowerValue = (1.0 - (weightValue * rtirekeiValue / 2000.0 * (resultValueKai[8] + speedlossValue) / 10.0 + resultValueKai[6]) / (10.0 * bodyPower * resultValueKai[2] * resultValueKai[21]) - bodyPowerloss * resultValueKai[7] / 10000.0);
	var speedValue2 = (2.0 * Math.PI * rtirekeiValue / 2000.0) * (10.0 * bodySpeed * resultValueKai[1] / 60.0) / resultValueKai[21] * spowerValue - resultValueKai[9] / 1000.0;
	diagnosis[diagnosisValue[0]] = speedValue2 * 3.6;
	diagnosis[diagnosisValue[1]] = speedValue2;

	//ジャンプ飛距離
	var jumpValue = Math.sin(2.0 * 20.0 * (Math.PI / 180.0)) / 9.80665;
	diagnosis[diagnosisValue[7]] = speedValue2 * speedValue2 * jumpValue;

	//前後の重心
	var chassisIndex = kaizouArray[3][0];
	var gravityValue = 0.0;
	for (var i = 0; i < nameValue.length; i++) {
		var weightpartsValue = statusArray[i][5];
		if (i == 3) {
			gravityValue += resultValueKai[31] * chassisGravity[chassisIndex] * weightpartsValue;
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
	if (bodyOption1 == 22) ftiregripUp += 0.015;
	if (bodyOption1 == 23) ftiregripUp += 0.015;
	if (bodyOption1 == 24) ftiregripUp += 0.15;
	if (bodyOption1 == 26) ftiregripUp += 0.015;
	if (bodyOption1 == 29) ftiregripUp += 0.015;
	if (bodyOption1 == 30) ftiregripUp += 0.015;
	if (bodyOption1 == 31) ftiregripUp += 0.015;
	if (bodyOption1 == 32) ftiregripUp += 0.015;
	if (bodyOption1 == 33) ftiregripUp += 0.15;
	if (bodyOption1 == 34) ftiregripUp += 0.015;
	if (bodyOption1 == 35) ftiregripUp += 0.07;
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
	diagnosis[diagnosisValue[16]] = Math.max(speedValue2 * (1.0 - (1.0 - Math.min(resultValueKai[26], 10000.0) / 10000.0) * weightValue / acceleValue2 / 46.0), speedValue2 / 5.0) * 3.6;

	//芝最高速
	var bodyOffload = 0.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 9) bodyOffload += 50000.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 29) bodyOffload += 50000.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 31) bodyOffload += 50000.0;
	if (resultValueKai[20] != 0 && bodyOption2 == 9) bodyOffload += 15000.0;
	if (resultValueKai[20] != 0 && bodyOption3 == 9) bodyOffload += 15000.0;
	diagnosis[diagnosisValue[17]] = Math.max(speedValue2 * (1.0 - (1.0 - Math.min(bodyOffload + resultValueKai[20], 10000.0) / 10000.0) * weightValue / acceleValue2 / 58.0), speedValue2 / 5.0) * 3.6;

	//ダート最高速
	diagnosis[diagnosisValue[18]] = Math.max(speedValue2 * (1.0 - (1.0 - Math.min(bodyOffload + resultValueKai[20], 10000.0) / 10000.0) * weightValue / acceleValue2 / 82.0), speedValue2 / 5.0) * 3.6;

	//コーナー安定速度
	var cornerspeedUp = 1.0;
	if (bodyOption1 == 3) cornerspeedUp += 0.1;
	if (bodyOption1 == 13) cornerspeedUp += 0.15;
	if (bodyOption1 == 23) cornerspeedUp += 0.1;
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
	diagnosis[diagnosisValue[23]] = Time_Calc(0.0, 100.0, 100.0, 7, speedValue2, acceleValue2, 100.0);

	//25m走
	diagnosis[diagnosisValue[26]] = Time_Calc(0.0, 25.0, 25.0, 5, speedValue2, acceleValue2, 25.0);

	//50m走
	diagnosis[diagnosisValue[27]] = Time_Calc(0.0, 50.0, 50.0, 6, speedValue2, acceleValue2, 50.0);

	//スタミナ耐久
	var bodyStamina = 1.0;
	if (bodyOption1 == 5) bodyStamina += 0.1;
	if (bodyOption1 == 15) bodyStamina += 0.2;
	if (bodyOption1 == 35) bodyStamina += 0.2;
	if (bodyOption2 == 5) bodyStamina += 0.05;
	if (bodyOption2 == 15) bodyStamina += 0.1;
	if (bodyOption3 == 5) bodyStamina += 0.05;
	if (bodyOption3 == 15) bodyStamina += 0.1;
	diagnosis[diagnosisValue[24]] = (resultValueKai[4] + resultValueKai[28]) * bodyStamina;

	//コーナー減速率
	var bodyCornerdecele = 1.0;
	if (bodyOption1 == 4) bodyCornerdecele -= 0.7;
	if (bodyOption1 == 14) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 24) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 33) bodyCornerdecele -= 0.77;
	if (bodyOption1 == 34) bodyCornerdecele -= 0.75;
	if (bodyOption2 == 4) bodyCornerdecele -= 0.35;
	if (bodyOption2 == 14) bodyCornerdecele -= 0.375;
	if (bodyOption3 == 4) bodyCornerdecele -= 0.35;
	if (bodyOption3 == 14) bodyCornerdecele -= 0.375;
	var bodyCornerdecele2 = 1.0;
	if (bodyOption1 == 4) bodyCornerdecele2 -= 0.17;
	if (bodyOption1 == 14) bodyCornerdecele2 -= 0.2;
	if (bodyOption2 == 4) bodyCornerdecele2 -= 0.085;
	if (bodyOption2 == 14) bodyCornerdecele2 -= 0.1;
	if (bodyOption3 == 4) bodyCornerdecele2 -= 0.085;
	if (bodyOption3 == 14) bodyCornerdecele2 -= 0.1;
	var bodyCornerdecele3 = 1.0;
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
		rollerteikouValue += 1250;
	}
	var ftiresenkaiValue = statusArray[6][14];
	var rtiresenkaiValue = statusArray[7][14];
	var tiresenkaiValue = (ftiresenkaiValue * (resultValueKai[31] / 2.0 - gravityValue) + rtiresenkaiValue * (resultValueKai[31] / 2.0 + gravityValue)) / resultValueKai[31];
	//var tiresenkaiValue = resultValueKai[14] / 2.0;
	var treadValue = Math.sqrt(resultValueKai[30] ** 2 + resultValueKai[31] ** 2);
	var cornerweightValue = 0.024516625 * treadValue;
	var cornerdeceleA = 1.0 / (916.0 - cornerweightValue * Math.max(tiresenkaiValue * bodyCornerdecele, 1.0) / acceleValue2);
	var cornerdeceleValue = 1.0 / (cornerdeceleA * 458.0 + Math.sqrt((cornerdeceleA * 458.0) * (cornerdeceleA * 458.0) + cornerdeceleA * speedValue2 * speedValue2 / acceleValue2 * (masatsuValue * bodyCornerdecele2 * (1.0 + Math.max(tiresenkaiValue * bodyCornerdecele, 1.0) * 0.0005611396) + rollerteikouValue / 20.0 * bodyCornerdecele3)));
	diagnosis[diagnosisValue[6]] = cornerdeceleValue;

	//バウンド時間
	var x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11;
	var bodyBoundtime = 1.0;
	if (bodyOption1 == 7) bodyBoundtime -= 0.06;
	if (bodyOption1 == 17) bodyBoundtime -= 0.12;
	if (bodyOption2 == 7) bodyBoundtime -= 0.018;
	if (bodyOption2 == 17) bodyBoundtime -= 0.036;
	if (bodyOption3 == 7) bodyBoundtime -= 0.018;
	if (bodyOption3 == 17) bodyBoundtime -= 0.036;
	var seishinValue = 10.0 * resultValueKai[11];
	var ftirehanpatsuValue = statusArray[6][15];
	var rtirehanpatsuValue = statusArray[7][15];
	var tirehanpatsuValue = ftirehanpatsuValue + rtirehanpatsuValue;
	var speedValue3 = speedValue2 * 2 * Math.sin(10.0 * (Math.PI / 180.0)) * tirehanpatsuValue / 1000.0 / 9.80665 / (1.0 - tirehanpatsuValue / 1000.0) * bodyBoundtime;
	x1 = 0.1336667529;
	x2 = 1.0439052417;
	x3 = -0.0001122684;
	x4 = -0.0000788496;
	x5 = -0.0020418294;
	x6 = -0.0000150669;
	x7 = -1.3662751348;
	x8 = 0.0000002773;
	x9 = 0.0000068178;
	x10 = 0.0000084761;
	x11 = 0.0000000075;
	diagnosis[diagnosisValue[8]] = x1 + x2 * speedValue3 + x3 * tirehanpatsuValue + x4 * gravityValue + x5 * weightValue + x6 * seishinValue + x7 * speedValue3 * speedValue3 + x8 * tirehanpatsuValue * tirehanpatsuValue + x9 * gravityValue * gravityValue + x10 * weightValue * weightValue + x11 * seishinValue * seishinValue;

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
