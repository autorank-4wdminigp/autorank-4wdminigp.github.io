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
// チャート描画用のオブジェクト
var chartValues = {
	speedDecrement: {
		time: [],
		current: [],
		lock: []
	}
}

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
		result.value[typeValue.length - 1] += result.value[i];
		result.valueKaiSv[typeValue.length - 1] += result.valueKaiSv[i];
	}
	return result;
}

// マシン診断の計算
// resultValueKai: マシンのパラメータの配列(改造後)
// shindantire: 1 -> タイヤ径差表示無し, 2 -> マシン診断タイヤ径差表示
// shindantirekei: タイヤ径差
function Diagnosis_Calc(resultValueKai, shindantire, shindantirekei, awakecalc, lanenum, sectionnum) {
	var diagnosis = {};

	var bodyOption1 = kaizouArray[2][23];
	var bodyOption2 = kaizouArray[2][24];
	var bodyOption3 = kaizouArray[2][25];
	//覚醒
	var awakeBodySpeedPer = 1.0;
	if (bodyOption1 == 91) awakeBodySpeedPer += 0.2;
	if (bodyOption1 == 92) awakeBodySpeedPer += 0.3;
	if (bodyOption1 == 113) awakeBodySpeedPer += 0.2;
	if (bodyOption1 == 119) awakeBodySpeedPer += 0.2;

	var awakeBodyPowerPer = 1.0;
	if (bodyOption1 == 94) awakeBodyPowerPer += 0.3;
	if (bodyOption1 == 114) awakeBodyPowerPer += 0.2;
	if (bodyOption1 == 119) awakeBodyPowerPer += 0.2;

	var awakeBodyCornerAnteiPer = 1.0;
	if (bodyOption1 == 91) awakeBodyCornerAnteiPer += 0.3;

	var awakeBodyAerodfPer = 1.0;
	if (bodyOption1 == 93) awakeBodyAerodfPer += 0.5;
	if (bodyOption1 == 112) awakeBodyAerodfPer += 0.5;

	var awakeBodyStaminaPer = 1.0;
	if (bodyOption1 == 113) awakeBodyStaminaPer += 0.1;
	if (bodyOption1 == 114) awakeBodyStaminaPer += 0.1;
	if (bodyOption1 == 120) awakeBodyStaminaPer += 0.2;

	var awakeSpeedPer = 0.0;
	var awakePowerPer = 0.0;
	var awakeCornerAnteiPer = 0.0;
	var awakeTiregripPer = 0.0;
	var awakeGearPer = 1.0;
	var awakeBrakePer = 1.0;
	var awakeSpeedlossPer = 0.0;
	var awakePowerlossPer = 0.0;
	var awakeBoundtime2Per = 0.0;

	var awakeSpeed = 0.0;
	var awakePower = 0.0;
	var awakeCornerAntei = 0.0;
	var awakeTaifuu = 0.0;
	var awakeOffload = 0.0;
	var awakeRollerangle = 0.0;
	var awakeAerodf = 0.0;
	var awakeFtiregrip = 0.0;
	var awakeRtiregrip = 0.0;
	var awakeWave = 0.0;
	var awakeStamina = 0.0;
	var awakeBrake = 0.0;

	if (awakecalc == 1) {
		for (var v = 0; v < nameValue.length; v++) {
			if (kaizouSelect[nameCalc[v]][0].length != 0) {
				var awakeoffset = 22;
				if (v == 2) {
					awakeoffset = 26;
				}
				for (var i = 1; i <= 2; i++) {
					var awakeSelectIndex = kaizouArray[v][awakeoffset + (i - 1) * 3];
					if (awakeSelectIndex != 0) {
						var awakeIndex = selectValue[nameCalc[v]][kaizouArray[v][0]][4];
						var awakeLv = kaizouArray[v][awakeoffset + 1 + (i - 1) * 3];
						var awakeNum = 1 + kaizouArray[v][awakeoffset + 2 + (i - 1) * 3];

						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 1) {
							awakeSpeedPer += 0.022 + 0.002 * awakeLv;
							awakeCornerAnteiPer += 0.0825 + 0.0075 * awakeLv;
							if (awakeNum == 2) {
								awakeSpeedPer += 0.033 + 0.003 * awakeLv;
								awakeCornerAnteiPer += 0.0825 + 0.0075 * awakeLv;
								awakeTiregripPer += 0.055 + 0.005 * awakeLv;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 2) {
							if (awakeNum == 1) {
								awakeCornerAnteiPer += 0.055 + 0.005 * awakeLv;
							}
							if (awakeNum == 2) {
								awakeCornerAnteiPer += 0.055 + 0.005 * awakeLv;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 3) {
							if (awakeNum == 1) {
								awakeBrakePer -= 0.275 + 0.025 * awakeLv;
							}
							if (awakeNum == 2) {
								awakePowerPer += 0.033 + 0.003 * awakeLv;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 4) {
							awakeSpeed += (3.2 + 0.2 * awakeLv) * awakeNum;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 5) {
							awakeSpeed += (39.0 + 4.0 * awakeLv) * awakeNum;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 6) {
							awakeSpeed += (55.0 + 5.0 * awakeLv) * awakeNum;
							awakeCornerAntei -= 50.0 * awakeNum;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 7) {
							awakeSpeedlossPer -= 0.055 + 0.005 * awakeLv;
							if (awakeNum == 2) {
								awakePowerlossPer -= 0.0275 + 0.0025 * awakeLv;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 8) {
							awakeTaifuu += 385.0 + 35.0 * awakeLv;
							if (awakeNum >= 2) {
								awakeTaifuu += 770.0 + 70.0 * awakeLv;
							}
							if (awakeNum >= 3) {
								awakeTaifuu += 1155.0 + 105.0 * awakeLv;
								awakeSpeed += 5.5 + 0.5 * awakeLv;
							}
							if (awakeNum == 4) {
								awakeTaifuu += 1540.0 + 140.0 * awakeLv;
								awakeSpeed += 11.0 + 1.0 * awakeLv;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 9) {
							awakeOffload += 495.0 + 45.0 * awakeLv;
							if (awakeNum >= 2) {
								awakeOffload += 990.0 + 90.0 * awakeLv;
							}
							if (awakeNum >= 3) {
								awakeOffload += 1485.0 + 135.0 * awakeLv;
								awakePower += 11.0 + 1.0 * awakeLv;
							}
							if (awakeNum == 4) {
								awakeOffload += 1980.0 + 180.0 * awakeLv;
								awakePower += 16.5 + 1.5 * awakeLv;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 10) {
							awakeRollerangle -= 2.75 + 0.25 * awakeLv;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 11) {
							awakeRollerangle += 20.0;
							awakeAerodf += 11000.0 + 1000.0 * awakeLv;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 12) {
							if (v == 6) {
								awakeFtiregrip += (6.0 + 1.0 * awakeLv) * awakeNum;
							}
							if (v == 7) {
								awakeRtiregrip += (6.0 + 1.0 * awakeLv) * awakeNum;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 13) {
							awakeSpeed += (44.0 + 4.0 * awakeLv) * awakeNum;
							awakePower += (66.0 + 6.0 * awakeLv) * awakeNum;
							if (v == 6) {
								awakeFtiregrip += (11.0 + 1.0 * awakeLv) * awakeNum;
							}
							if (v == 7) {
								awakeRtiregrip += (11.0 + 1.0 * awakeLv) * awakeNum;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 14) {
							awakePower += (5.5 + 0.5 * awakeLv) * awakeNum;
							awakeRollerangle -= (1.1 + 0.1 * awakeLv) * awakeNum;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 15) {
							awakeAerodf += 935.0 + 85.0 * awakeLv;
							awakeSpeed += 16.5 + 1.5 * awakeLv;
							awakeBoundtime2Per += 1.1 + 0.1 * awakeLv;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 16) {
							awakeSpeed += (165.0 + 15.0 * awakeLv) * awakeNum;
							awakePower += (55.0 + 5.0 * awakeLv) * awakeNum;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 17) {
							awakeSpeed += (11.0 + 1.0 * awakeLv) * awakeNum;
							awakePower += (16.5 + 1.5 * awakeLv) * awakeNum;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 18) {
							awakeGearPer -= (0.22 + 0.02 * awakeLv) * (5.0 - awakeNum) / 4.0;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 19) {
							awakeSpeed += (11.0 + 1.0 * awakeLv) * awakeNum;
							awakePower += (5.5 + 0.5 * awakeLv) * awakeNum;
							awakeWave += (2200.0 + 200.0 * awakeLv) * awakeNum;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 20) {
							awakePower += (11.0 + 1.0 * awakeLv) * awakeNum;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 21) {
							awakeAerodf += 1650.0 + 150.0 * awakeLv;
							if (awakeNum == 2) {
								awakeAerodf += 1100.0 + 100.0 * awakeLv;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 22) {
							awakeSpeed += (7.8 + 0.8 * awakeLv) * awakeNum;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 23) {
							awakeSpeed += 110.0 + 10.0 * awakeLv;
							awakePower += 220.0 + 20.0 * awakeLv;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 24) {
							awakeSpeed += (55.0 + 5.0 * awakeLv) * awakeNum;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 25) {
							awakeStamina += (8.25 + 0.75 * awakeLv) * awakeNum;
							awakeCornerAntei += (11.0 + 1.0 * awakeLv) * awakeNum;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 26) {
							awakeStamina += 22.0 + 2.0 * awakeLv;
							if (awakeNum == 2) {
								awakeStamina += 44.0 + 4.0 * awakeLv;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 27) {
							awakePower += (14.2 + 1.2 * awakeLv) * awakeNum;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 28) {
							awakeSpeedPer += 0.033 + 0.003 * awakeLv;
							awakeCornerAnteiPer += 0.11 + 0.01 * awakeLv;
							awakeTiregripPer += 0.044 + 0.004 * awakeLv;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 29) {
							awakeCornerAnteiPer += 0.055 + 0.005 * awakeLv;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 30) {
							if (awakeNum == 1) {
								awakeBrake -= 11.0 + 1.0 * awakeLv;
							}
							if (awakeNum == 2) {
								awakePowerPer += 0.033 + 0.003 * awakeLv;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 31) {
							if (awakeNum == 1) {
								if (v == 6) {
									awakeFtiregrip += 44.0 + 4.0 * awakeLv;
								}
								if (v == 7) {
									awakeRtiregrip += 44.0 + 4.0 * awakeLv;
								}
								awakeCornerAntei += 55.0 + 5.0 * awakeLv;
							}
							if (awakeNum == 2) {
								if (v == 6) {
									awakeFtiregrip += 22.0 + 2.0 * awakeLv;
								}
								if (v == 7) {
									awakeRtiregrip += 22.0 + 2.0 * awakeLv;
								}
								awakeCornerAntei += 33.0 + 3.0 * awakeLv;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 32) {
							awakeCornerAntei += 99.0 + 9.0 * awakeLv;
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 33) {
							awakeSpeed += 22.0 + 2.0 * awakeLv;
							if (awakeNum >= 2) {
								awakeSpeed -= 20.0;
							}
							if (awakeNum >= 3) {
								awakeSpeed -= 20.0;
							}
							if (awakeNum == 4) {
								awakeSpeed -= 40.0;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 34) {
							awakeSpeed += 8.8 + 0.8 * awakeLv;
							awakePower += 6.6 + 0.6 * awakeLv;
							if (awakeNum >= 2) {
								awakeSpeed -= 8.0;
								awakePower -= 6.0;
							}
							if (awakeNum >= 3) {
								awakeSpeed -= 8.0;
								awakePower -= 6.0;
							}
							if (awakeNum == 4) {
								awakeSpeed -= 16.0;
								awakePower -= 12.0;
							}
						}
						if (awakeOption[awakeIndex][awakeSelectIndex - 1] == 35) {
							awakeSpeed += 135.0 + 15.0 * awakeLv;
							awakePower += 16.5 + 1.5 * awakeLv;
							if (awakeNum >= 2) {
								awakeSpeed -= 120.0;
								awakePower -= 15.0;
							}
							if (awakeNum >= 3) {
								awakeSpeed -= 120.0;
								awakePower -= 15.0;
							}
							if (awakeNum == 4) {
								awakeSpeed -= 240.0;
								awakePower -= 30.0;
							}
						}
					}
				}
			}
		}
	}

	//ローラースラスト角
	var rollerangleValue = Math.max(0, resultValueKai[12] + awakeRollerangle);
	diagnosis[diagnosisValue[10]] = rollerangleValue;

	//重さ
	var weightValue = resultValueKai[5];
	diagnosis[diagnosisValue[11]] = weightValue;

	//ブレーキ性能
	var brakeValue = resultValueKai[23] / 2000.0;
	if (brakeValue != 0 && bodyOption1 == 6) brakeValue += 0.05;
	if (brakeValue != 0 && bodyOption1 == 16) brakeValue += 0.06;
	if (brakeValue != 0 && bodyOption1 == 86) brakeValue += 0.05;
	if (brakeValue != 0 && bodyOption1 == 26) brakeValue += 0.05;
	if (brakeValue != 0 && bodyOption1 == 37) brakeValue += 0.06;
	if (brakeValue != 0 && bodyOption1 == 60) brakeValue += 0.06;
	if (brakeValue != 0 && bodyOption2 == 6) brakeValue += 0.015;
	if (brakeValue != 0 && bodyOption2 == 16) brakeValue += 0.03;
	if (brakeValue != 0 && bodyOption2 == 86) brakeValue += 0.015;
	if (brakeValue != 0 && bodyOption3 == 6) brakeValue += 0.015;
	if (brakeValue != 0 && bodyOption3 == 16) brakeValue += 0.03;
	if (brakeValue != 0 && bodyOption3 == 86) brakeValue += 0.015;
	brakeValue = brakeValue * awakeBrakePer + awakeBrake / 2000.0;
	diagnosis[diagnosisValue[12]] = brakeValue;

	//バッテリー消費量
	var batteryIndex = kaizouArray[33][0];
	var batteryPower = new Array(1.0, 1.03);
	var batteryCapacity = new Array(950, 1250);
	var setsudenUp = 1.0;
	var setsudenValue = resultValueKai[10] - resultValueKai[42];
	if (setsudenValue != 0 && bodyOption1 == 8) setsudenUp += 0.4;
	if (setsudenValue != 0 && bodyOption1 == 18) setsudenUp += 0.5;
	if (setsudenValue != 0 && bodyOption1 == 48) setsudenUp += 0.55;
	if (setsudenValue != 0 && bodyOption1 == 88) setsudenUp += 0.4;
	if (setsudenValue != 0 && bodyOption1 == 108) setsudenUp += 0.4;
	if (setsudenValue != 0 && bodyOption1 == 32) setsudenUp -= 0.1;
	if (setsudenValue != 0 && bodyOption1 == 33) setsudenUp -= 0.1;
	if (setsudenValue != 0 && bodyOption1 == 53) setsudenUp += 0.2;
	if (setsudenValue != 0 && bodyOption1 == 54) setsudenUp += 0.2;
	if (setsudenValue != 0 && bodyOption1 == 65) setsudenUp += 0.15;
	if (setsudenValue != 0 && bodyOption1 == 70) setsudenUp -= 0.4;
	if (setsudenValue != 0 && bodyOption1 == 91) setsudenUp += 0.15;
	if (setsudenValue != 0 && bodyOption1 == 122) setsudenUp += 0.2;
	if (setsudenValue != 0 && bodyOption2 == 8) setsudenUp += 0.12;
	if (setsudenValue != 0 && bodyOption2 == 18) setsudenUp += 0.17;
	if (setsudenValue != 0 && bodyOption2 == 48) setsudenUp += 0.2;
	if (setsudenValue != 0 && bodyOption2 == 88) setsudenUp += 0.12;
	if (setsudenValue != 0 && bodyOption2 == 108) setsudenUp += 0.12;
	if (setsudenValue != 0 && bodyOption3 == 8) setsudenUp += 0.12;
	if (setsudenValue != 0 && bodyOption3 == 18) setsudenUp += 0.17;
	if (setsudenValue != 0 && bodyOption3 == 48) setsudenUp += 0.2;
	if (setsudenValue != 0 && bodyOption3 == 88) setsudenUp += 0.12;
	if (setsudenValue != 0 && bodyOption3 == 108) setsudenUp += 0.12;
	//var batteryValue = resultValueKai[22] * Math.max(1 - setsudenValue * setsudenUp / 10000.0, 0.0001);
	var batteryValue = resultValueKai[22] / (1 + Math.pow(setsudenValue * setsudenUp / 4445.04146576913, 2.4));
	diagnosis[diagnosisValue[2]] = batteryValue;

	//異径スピロス
	var bodySpeedloss = 1.0 + awakeSpeedlossPer;
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
	//パワー
	var bodyPower = 1.0 + awakePowerPer * awakeBodyPowerPer;
	if (bodyOption1 == 2) bodyPower += 0.06;
	if (bodyOption1 == 12) bodyPower += 0.12;
	if (bodyOption1 == 42) bodyPower += 0.15;
	if (bodyOption1 == 82) bodyPower += 0.12;
	if (bodyOption1 == 105) bodyPower += 0.12;
	if (bodyOption1 == 108) bodyPower += 0.12;
	if (bodyOption1 == 22) bodyPower += 0.12;
	if (bodyOption1 == 25) bodyPower += 0.075;
	if (bodyOption1 == 30) bodyPower += 0.03;
	if (bodyOption1 == 31) bodyPower += 0.12;
	if (bodyOption1 == 37) bodyPower += 0.03;
	if (bodyOption1 == 39) bodyPower += 0.02;
	if (bodyOption1 == 54) bodyPower += 0.12;
	if (bodyOption1 == 58) bodyPower += 0.12;
	if (bodyOption1 == 59) bodyPower += 0.075;
	if (bodyOption1 == 70) bodyPower += 0.12;
	if (bodyOption1 == 94) bodyPower += 0.2;
	if (bodyOption1 == 95) bodyPower += 0.06;
	if (bodyOption1 == 114) bodyPower += 0.15;
	if (bodyOption1 == 116) bodyPower += 0.06;
	if (bodyOption1 == 119) bodyPower += 0.1;
	if (bodyOption1 == 121) bodyPower -= 0.06;
	if (bodyOption1 == 123) bodyPower += 0.08;
	if (bodyOption2 == 2) bodyPower += 0.024;
	if (bodyOption2 == 12) bodyPower += 0.06;
	if (bodyOption2 == 42) bodyPower += 0.1;
	if (bodyOption2 == 82) bodyPower += 0.06;
	if (bodyOption2 == 105) bodyPower += 0.06;
	if (bodyOption2 == 108) bodyPower += 0.06;
	if (bodyOption3 == 2) bodyPower += 0.024;
	if (bodyOption3 == 12) bodyPower += 0.06;
	if (bodyOption3 == 42) bodyPower += 0.1;
	if (bodyOption3 == 82) bodyPower += 0.06;
	if (bodyOption3 == 105) bodyPower += 0.06;
	if (bodyOption3 == 108) bodyPower += 0.06;
	var bodyPowerloss = 1.0 + awakePowerlossPer;
	if (bodyOption1 == 22) bodyPowerloss -= 0.1;
	if (bodyOption1 == 111) bodyPowerloss -= 0.08;
	if (bodyOption1 == 122) bodyPowerloss -= 0.2;

	//最高速度
	var bodySpeed = 1.0 + awakeSpeedPer * awakeBodySpeedPer;
	if (bodyOption1 == 1) bodySpeed += 0.02;
	if (bodyOption1 == 11) bodySpeed += 0.03;
	if (bodyOption1 == 41) bodySpeed += 0.04;
	if (bodyOption1 == 81) bodySpeed += 0.03;
	if (bodyOption1 == 82) bodySpeed += 0.03;
	if (bodyOption1 == 83) bodySpeed += 0.03;
	if (bodyOption1 == 84) bodySpeed += 0.03;
	if (bodyOption1 == 85) bodySpeed += 0.03;
	if (bodyOption1 == 86) bodySpeed += 0.03;
	if (bodyOption1 == 88) bodySpeed += 0.03;
	if (bodyOption1 == 90) bodySpeed += 0.03;
	if (bodyOption1 == 21) bodySpeed += 0.04;
	if (bodyOption1 == 23) bodySpeed += 0.03;
	if (bodyOption1 == 26) bodySpeed += 0.03;
	if (bodyOption1 == 27) bodySpeed += 0.06;
	if (bodyOption1 == 29) bodySpeed += 0.03;
	if (bodyOption1 == 32) bodySpeed += 0.07;
	if (bodyOption1 == 34) bodySpeed += 0.035;
	if (bodyOption1 == 35) bodySpeed += 0.03;
	if (bodyOption1 == 38) bodySpeed += 0.03;
	if (bodyOption1 == 51) bodySpeed += 0.03;
	if (bodyOption1 == 52) bodySpeed += 0.05;
	if (bodyOption1 == 53) bodySpeed += 0.04;
	if (bodyOption1 == 55) bodySpeed += 0.05;
	if (bodyOption1 == 56) bodySpeed += 0.09;
	if (bodyOption1 == 59) bodySpeed += 0.02;
	if (bodyOption1 == 60) bodySpeed += 0.02;
	if (bodyOption1 == 64) bodySpeed += 0.065;
	if (bodyOption1 == 65) bodySpeed += 0.05;
	if (bodyOption1 == 66) bodySpeed += 0.02;
	if (bodyOption1 == 70) bodySpeed += 0.09;
	if (bodyOption1 == 80) bodySpeed += 0.04;
	if (bodyOption1 == 91) bodySpeed += 0.045;
	if (bodyOption1 == 92) bodySpeed += 0.06
	if (bodyOption1 == 93) bodySpeed += 0.045;
	if (bodyOption1 == 95) bodySpeed += 0.04;
	if (bodyOption1 == 111) bodySpeed += 0.04;
	if (bodyOption1 == 112) bodySpeed += 0.02;
	if (bodyOption1 == 113) bodySpeed += 0.04;
	if (bodyOption1 == 115) bodySpeed += 0.04;
	if (bodyOption1 == 116) bodySpeed += 0.02;
	if (bodyOption1 == 117) bodySpeed += 0.1;
	if (bodyOption1 == 118) bodySpeed += 0.095;
	if (bodyOption1 == 119) bodySpeed += 0.025;
	if (bodyOption1 == 120) bodySpeed += 0.02;
	if (bodyOption1 == 121) bodySpeed += 0.06;
	if (bodyOption1 == 123) bodySpeed += 0.065;
	if (bodyOption2 == 1) bodySpeed += 0.006;
	if (bodyOption2 == 11) bodySpeed += 0.015;
	if (bodyOption2 == 41) bodySpeed += 0.025;
	if (bodyOption2 == 81) bodySpeed += 0.015;
	if (bodyOption2 == 82) bodySpeed += 0.015;
	if (bodyOption2 == 83) bodySpeed += 0.015;
	if (bodyOption2 == 84) bodySpeed += 0.015;
	if (bodyOption2 == 85) bodySpeed += 0.015;
	if (bodyOption2 == 86) bodySpeed += 0.015;
	if (bodyOption2 == 88) bodySpeed += 0.015;
	if (bodyOption2 == 90) bodySpeed += 0.015;
	if (bodyOption3 == 1) bodySpeed += 0.006;
	if (bodyOption3 == 11) bodySpeed += 0.015;
	if (bodyOption3 == 41) bodySpeed += 0.025;
	if (bodyOption3 == 81) bodySpeed += 0.015;
	if (bodyOption3 == 82) bodySpeed += 0.015;
	if (bodyOption3 == 83) bodySpeed += 0.015;
	if (bodyOption3 == 84) bodySpeed += 0.015;
	if (bodyOption3 == 85) bodySpeed += 0.015;
	if (bodyOption3 == 86) bodySpeed += 0.015;
	if (bodyOption3 == 88) bodySpeed += 0.015;
	if (bodyOption3 == 90) bodySpeed += 0.015;
	var hoseiSpeedStr = "";
	var hoseiAcceleStr = "";
	var powerlossValue = resultValueKai[7];
	var powerlossMax = ((0.25 * powerlossValue / 10000.0 + 0.75) - (resultValueKai[6] + bodySpeedloss * (resultValueKai[8] + speedlossValue) / 10000.0 * weightValue * rtirekeiValue / 2.0) / (10.0 * (bodyPower * resultValueKai[2] + awakePower * awakeBodyPowerPer) * (resultValueKai[21] * awakeGearPer))) * 10000.0 / bodyPowerloss;
	if (powerlossValue > powerlossMax) {
		powerlossValue = powerlossMax;
		hoseiSpeedStr = "PL)";
		hoseiAcceleStr = "PL)";
	}
	var spowerValue = (1.0 - bodyPowerloss * powerlossValue / 10000.0 - (resultValueKai[6] + bodySpeedloss * (resultValueKai[8] + speedlossValue) / 10000.0 * weightValue * rtirekeiValue / 2.0) / (10.0 * (bodyPower * resultValueKai[2] + awakePower * awakeBodyPowerPer) * (resultValueKai[21] * awakeGearPer)));
	var speedValue = batteryPower[batteryIndex] * (2.0 * Math.PI * rtirekeiValue / 2000.0) * (10.0 * (bodySpeed * resultValueKai[1] + awakeSpeed * awakeBodySpeedPer) / 60.0) / (resultValueKai[21] * awakeGearPer);
	//var speedValue2 = speedValue * spowerValue - resultValueKai[9] / 1000.0;
	var speedValue2 = speedValue * spowerValue;
	//var speedValueNotDf = speedValue * spowerValue / 2.0;
	//if (speedValueNotDf > speedValue2) {
	//	speedValue2 = speedValueNotDf;
	//	hoseiSpeedStr = "DF)";
	//}
	diagnosis[diagnosisValue[0]] = hoseiSpeedStr + (speedValue2 * 3.6);
	diagnosis[diagnosisValue[1]] = hoseiSpeedStr + speedValue2;

	//加速度(毎秒)
	var acceleValue = (10.0 * (bodyPower * resultValueKai[2] + awakePower * awakeBodyPowerPer) / 1000.0) / 4.0 * (resultValueKai[21] * awakeGearPer) / (rtirekeiValue / 2000.0 * weightValue);
	var acceleValue2 = acceleValue * spowerValue;
	diagnosis[diagnosisValue[3]] = hoseiAcceleStr + acceleValue2;

	//消費電流量
	var currentValue = 2.25 * 10.0 * (bodyPower * resultValueKai[2] + awakePower * awakeBodyPowerPer) * (speedValue / speedValue2) * batteryValue / 3600.0 / 1000.0 / batteryCapacity[batteryIndex];
	diagnosis[diagnosisValue[28]] = currentValue;

	//最高速25%減少
	//var speed25dec = (0.75 * speedValue2 + resultValueKai[9] / 1000.0) / spowerValue / speedValue * resultValueKai[1];
	var speed25dec = (0.75 * speedValue2) / spowerValue / speedValue * resultValueKai[1];
	diagnosis[diagnosisValue[29]] = -1.0 * Math.log((speed25dec * 2 - resultValueKai[1]) / resultValueKai[1]) / currentValue;

	//t秒後最高速
	function calcSpeed(n) {
		//return ((1.0 + Math.exp(-1.0 * currentValue * n )) / 2.0 * speedValue * spowerValue - resultValueKai[9] / 1000.0) * 3.6;
		return ((1.0 + Math.exp(-1.0 * currentValue * n )) / 2.0 * speedValue * spowerValue) * 3.6;
	}
	//シンプソン法による走行距離導出
	function simpson(f, t1, t2, n) {
		var h = (t2 - t1) / (2.0 * n);
		var s = f(t1) + f(t2);
		for (var i = 1; i < n; i++) {
			s = s + 4.0 * f(t1 + (2.0 * i - 1.0) * h) + 2.0 * f(t1 + 2.0 * i * h);
		}
		s = s + 4.0 * f(t1 + (2.0 * n - 1.0) * h);
		s = s * (h / 3.0);
		return s;
	}

	//10秒後最高速
	diagnosis[diagnosisValue[30]] = calcSpeed(10.0);
	//20秒後最高速
	diagnosis[diagnosisValue[31]] = calcSpeed(20.0);
	//n秒後最高速
	var step = 1;
	var max = 60;
	var time = [0];
	var current = [[calcSpeed(0), 0]];
	var distance = 0;
	for (var i = step; i <= max; i+=step) {
		time.push(i);
		distance += simpson(calcSpeed, i - step, i, 10) / 3.6;
		current.push([calcSpeed(i), distance.toFixed(2)]);
	}
	chartValues.speedDecrement.time = time;
	chartValues.speedDecrement.current = current;

	//前後の重心
	var chassisIndex = kaizouArray[3][0];
	var gravityValue = 0.0;
	for (var i = 0; i < nameValue.length; i++) {
		var weightpartsValue = statusArray[i][5];
		if (i == 3) {
			gravityValue += resultValueKai[31] * chassisGravity[chassisIndex] * weightpartsValue;
		} else if (i == 0) {
			gravityValue += resultValueKai[31] * resultValueKai[38] / 10000.0 * weightpartsValue;
		} else if (i == 33) {
			gravityValue += resultValueKai[31] * resultValueKai[39] / 10000.0 * weightpartsValue;
		} else {
			gravityValue += resultValueKai[31] * partsGravity[i] * weightpartsValue;
		}
	}
	gravityValue = gravityValue / weightValue;
	diagnosis[diagnosisValue[9]] = gravityValue;

	//最高速到達時間
	diagnosis[diagnosisValue[4]] = Math.log(100.0 * speedValue2) / (4.0 * acceleValue2);

	//タイヤグリップ
	var ftiregripUp = 1.0 + awakeTiregripPer;
	if (bodyOption1 == 62) ftiregripUp += 0.2;
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
	if (bodyOption1 == 53) ftiregripUp += 0.07; //シャイニングスピード
	if (bodyOption1 == 54) ftiregripUp += 0.07; //シャイニングパワー
	if (bodyOption1 == 55) ftiregripUp += 0.2; //バスターターン
	if (bodyOption1 == 56) ftiregripUp += 0.08; //マックスストーム
	if (bodyOption1 == 57) ftiregripUp += 0.07; //空気の刃
	if (bodyOption1 == 58) ftiregripUp += 0.1; //ウインドダッシュ
	if (bodyOption1 == 59) ftiregripUp += 0.07; //プラズマ
	if (bodyOption1 == 60) ftiregripUp += 0.07; //レーザーコントロール
	if (bodyOption1 == 64) ftiregripUp += 0.1; //疾風
	if (bodyOption1 == 65) ftiregripUp += 0.07; //デュアルサプレッション
	if (bodyOption1 == 66) ftiregripUp += 0.07; //フォーミュラレイ
	if (bodyOption1 == 70) ftiregripUp += 0.03; //フレイムバード
	if (bodyOption1 == 80) ftiregripUp += 0.07; //サバンナフォース
	if (bodyOption1 == 91) ftiregripUp += 0.07; //ロードの意志
	if (bodyOption1 == 92) ftiregripUp += 0.07; //ライトニングアタック
	if (bodyOption1 == 93) ftiregripUp += 0.07; //タービュランサー
	if (bodyOption1 == 94) ftiregripUp += 0.1; //カエザル･フェルス
	if (bodyOption1 == 95) ftiregripUp += 0.2; //ハリケーンフェザー
	if (bodyOption1 == 111) ftiregripUp += 0.07; //ロードアセンション
	if (bodyOption1 == 112) ftiregripUp += 0.07; //エアロブラスト
	if (bodyOption1 == 113) ftiregripUp += 0.07; //バーニングイグニッション
	if (bodyOption1 == 114) ftiregripUp += 0.1; //ライジングフォルス
	if (bodyOption1 == 115) ftiregripUp += 0.07; //スクァルス
	if (bodyOption1 == 116) ftiregripUp += 0.07; //ナックルバリア
	if (bodyOption1 == 117) ftiregripUp += 0.15; //サイクロン走法
	if (bodyOption1 == 118) ftiregripUp += 0.2; //ブレイジングジェット
	if (bodyOption1 == 119) ftiregripUp += 0.12; //アブソリュートフレイム
	if (bodyOption1 == 120) ftiregripUp += 0.07; //アルミュールスチール
	if (bodyOption1 == 121) ftiregripUp += 0.15; //スパイダースプリント
	if (bodyOption1 == 122) ftiregripUp += 0.12; //ZXブレイザー
	if (bodyOption1 == 123) ftiregripUp += 0.2; //ターミネートモード
	if (bodyOption2 == 62) ftiregripUp += 0.16;
	if (bodyOption3 == 62) ftiregripUp += 0.16;
	var ftiregripValue = statusArray[6][13] + awakeFtiregrip;
	var rtiregripValue = statusArray[7][13] + awakeRtiregrip;
	var tiregripValue = (ftiregripValue * (resultValueKai[31] / 2.0 + gravityValue) + rtiregripValue * (resultValueKai[31] / 2.0 - gravityValue)) / resultValueKai[31];
	//tiregripValue += statusArray[29][13];
	//tiregripValue += statusArray[33][13];
	diagnosis[diagnosisValue[5]] = (tiregripValue * ftiregripUp) / 100.0;

	//空転
	diagnosis[diagnosisValue[15]] = (diagnosis[diagnosisValue[5]] * 10.0 + 0.3) * 3.6;

	//耐水空転
	var taisuigripUp = 0.0;
	if (resultValueKai[27] != 0 && bodyOption1 == 10) taisuigripUp += 2500.0;
	if (resultValueKai[27] != 0 && bodyOption1 == 30) taisuigripUp += 5000.0;
	if (resultValueKai[27] != 0 && bodyOption1 == 115) taisuigripUp += 5000.0;
	if (resultValueKai[27] != 0 && bodyOption2 == 10) taisuigripUp += 1250.0;
	if (resultValueKai[27] != 0 && bodyOption3 == 10) taisuigripUp += 1250.0;
	diagnosis[diagnosisValue[19]] = (diagnosis[diagnosisValue[5]] * 10.0 * Math.min(resultValueKai[27] + 200.0 + taisuigripUp, 10000.0) / 10000.0 + 0.3) * 3.6;

	//耐風最高速
	var bodyTaifuu = 0.0 + awakeTaifuu;
	if (resultValueKai[26] != 0 && bodyOption1 == 72) bodyTaifuu += 15000.0;
	if (resultValueKai[26] != 0 && bodyOption1 == 38) bodyTaifuu += 4000.0;
	if (resultValueKai[26] != 0 && bodyOption1 == 58) bodyTaifuu += 4000.0;
	if (resultValueKai[26] != 0 && bodyOption1 == 90) bodyTaifuu += 8000.0;
	if (resultValueKai[26] != 0 && bodyOption1 == 112) bodyTaifuu += 6000.0;
	if (resultValueKai[26] != 0 && bodyOption2 == 72) bodyTaifuu += 7000.0;
	if (resultValueKai[26] != 0 && bodyOption2 == 90) bodyTaifuu += 4000.0;
	if (resultValueKai[26] != 0 && bodyOption3 == 72) bodyTaifuu += 7000.0;
	if (resultValueKai[26] != 0 && bodyOption3 == 90) bodyTaifuu += 4000.0;
	var sectiondown = 0.7;
	if (lanenum == 5) {
		sectiondown = 0.5;
	}
	//diagnosis[diagnosisValue[16]] = Math.max(speedValue2 * (1.0 - (1.0 - Math.min(resultValueKai[26] + bodyTaifuu, 10000.0) / 10000.0) * weightValue / acceleValue2 / 46.0), speedValue2 / 5.0) * 3.6;
	var taifuuFuka = (1.0 - Math.min((bodyTaifuu + resultValueKai[26]) * Math.pow(sectiondown, sectionnum - 1), 10000.0) / 10000.0) * weightValue * 0.086 * (weightValue * rtirekeiValue / 2.0) / (10.0 * (bodyPower * resultValueKai[2] + awakePower * awakeBodyPowerPer) * (resultValueKai[21] * awakeGearPer));
	diagnosis[diagnosisValue[16]] = Math.max(speedValue * (spowerValue - taifuuFuka), speedValue2 / 5.0) * 3.6;

	//芝最高速
	var bodyOffload = 0.0 + awakeOffload;
	if (resultValueKai[20] != 0 && bodyOption1 == 9) bodyOffload += 20000.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 19) bodyOffload += 25000.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 29) bodyOffload += 20000.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 31) bodyOffload += 20000.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 80) bodyOffload += 25000.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 94) bodyOffload += 15000.0;
	if (resultValueKai[20] != 0 && bodyOption2 == 9) bodyOffload += 10000.0;
	if (resultValueKai[20] != 0 && bodyOption2 == 19) bodyOffload += 15000.0;
	if (resultValueKai[20] != 0 && bodyOption3 == 9) bodyOffload += 10000.0;
	if (resultValueKai[20] != 0 && bodyOption3 == 19) bodyOffload += 15000.0;
	//diagnosis[diagnosisValue[17]] = Math.max(speedValue2 * (1.0 - (1.0 - Math.min(bodyOffload + resultValueKai[20], 10000.0) / 10000.0) * weightValue / acceleValue2 / 58.0), speedValue2 / 5.0) * 3.6;
	var shibaFuka = (1.0 - Math.min((bodyOffload + resultValueKai[20]) * Math.pow(sectiondown, sectionnum - 1), 10000.0) / 10000.0) * weightValue * 0.068 * (weightValue * rtirekeiValue / 2.0) / (10.0 * (bodyPower * resultValueKai[2] + awakePower * awakeBodyPowerPer) * (resultValueKai[21] * awakeGearPer));
	diagnosis[diagnosisValue[17]] = Math.max(speedValue * (spowerValue - shibaFuka), speedValue2 / 5.0) * 3.6;

	//ダート最高速
	//diagnosis[diagnosisValue[18]] = Math.max(speedValue2 * (1.0 - (1.0 - Math.min(bodyOffload + resultValueKai[20], 10000.0) / 10000.0) * weightValue / acceleValue2 / 82.0), speedValue2 / 5.0) * 3.6;
	var dirtFuka = (1.0 - Math.min((bodyOffload + resultValueKai[20]) * Math.pow(sectiondown, sectionnum - 1), 10000.0) / 10000.0) * weightValue * 0.048 * (weightValue * rtirekeiValue / 2.0) / (10.0 * (bodyPower * resultValueKai[2] + awakePower * awakeBodyPowerPer) * (resultValueKai[21] * awakeGearPer));
	diagnosis[diagnosisValue[18]] = Math.max(speedValue * (spowerValue - dirtFuka), speedValue2 / 5.0) * 3.6;

	//ウェーブ
	var bodyWave = 0.0 + awakeWave;
	if (resultValueKai[19] != 0 && bodyOption1 == 68) bodyWave += 25000.0;
	if (resultValueKai[19] != 0 && bodyOption1 == 39) bodyWave += 4000.0;
	if (resultValueKai[19] != 0 && bodyOption2 == 68) bodyWave += 15000.0;
	if (resultValueKai[19] != 0 && bodyOption3 == 68) bodyWave += 15000.0;

	//デジタル
	var bodyDigital = 0.0;
	if (resultValueKai[25] != 0 && bodyOption1 == 78) bodyDigital += 25000.0;
	if (resultValueKai[25] != 0 && bodyOption1 == 36) bodyDigital += 5000.0;
	if (resultValueKai[25] != 0 && bodyOption1 == 39) bodyDigital += 4000.0;
	if (resultValueKai[25] != 0 && bodyOption1 == 66) bodyDigital += 7000.0;
	if (resultValueKai[25] != 0 && bodyOption2 == 78) bodyDigital += 15000.0;
	if (resultValueKai[25] != 0 && bodyOption3 == 78) bodyDigital += 15000.0;

	//ｴｱﾛﾀﾞｳﾝﾌｫｰｽ
	var bodyAerodf = 0.0 + awakeAerodf * awakeBodyAerodfPer;
	if (bodyOption1 == 75) bodyAerodf += 1500.0;
	if (bodyOption1 == 81) bodyAerodf += 1000.0;
	if (bodyOption1 == 64) bodyAerodf += 500.0;
	if (bodyOption1 == 116) bodyAerodf += 1300.0;
	if (bodyOption1 == 118) bodyAerodf += 600.0;
	if (bodyOption2 == 75) bodyAerodf += 1000.0;
	if (bodyOption2 == 81) bodyAerodf += 500.0;
	if (bodyOption3 == 75) bodyAerodf += 1000.0;
	if (bodyOption3 == 81) bodyAerodf += 500.0;

	diagnosis[diagnosisValue[36]] = bodyOffload + resultValueKai[20];
	diagnosis[diagnosisValue[37]] = bodyWave + resultValueKai[19];
	diagnosis[diagnosisValue[38]] = bodyDigital + resultValueKai[25];
	diagnosis[diagnosisValue[39]] = bodyTaifuu + resultValueKai[26];
	diagnosis[diagnosisValue[40]] = bodyAerodf + resultValueKai[9];
	diagnosis[diagnosisValue[41]] = taisuigripUp + resultValueKai[27];

	//最高速95%到達時間
	diagnosis[diagnosisValue[22]] = - speedValue2 / (4.0 * acceleValue2) * Math.log(0.05);

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
					//var tspeedmax = (1.0 + Math.exp(-1.0 * currentValue * t )) / 2.0 * speedValue * spowerValue - resultValueKai[9] / 1000.0;
					var tspeedmax = (1.0 + Math.exp(-1.0 * currentValue * t )) / 2.0 * speedValue * spowerValue;
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
	if (bodyOption1 == 45) bodyStamina += 0.3;
	if (bodyOption1 == 85) bodyStamina += 0.2;
	if (bodyOption1 == 25) bodyStamina += 0.2;
	if (bodyOption1 == 35) bodyStamina += 0.2;
	if (bodyOption1 == 52) bodyStamina += 0.1;
	if (bodyOption1 == 66) bodyStamina += 0.2;
	if (bodyOption1 == 105) bodyStamina += 0.2;
	if (bodyOption1 == 113) bodyStamina += 0.15;
	if (bodyOption1 == 114) bodyStamina += 0.1;
	if (bodyOption1 == 120) bodyStamina += 0.25;
	if (bodyOption1 == 123) bodyStamina -= 0.2;
	if (bodyOption2 == 5) bodyStamina += 0.05;
	if (bodyOption2 == 15) bodyStamina += 0.1;
	if (bodyOption2 == 45) bodyStamina += 0.2;
	if (bodyOption2 == 85) bodyStamina += 0.1;
	if (bodyOption2 == 105) bodyStamina += 0.1;
	if (bodyOption3 == 5) bodyStamina += 0.05;
	if (bodyOption3 == 15) bodyStamina += 0.1;
	if (bodyOption3 == 45) bodyStamina += 0.2;
	if (bodyOption3 == 85) bodyStamina += 0.1;
	if (bodyOption3 == 105) bodyStamina += 0.1;
	var staminaValue = Math.max((resultValueKai[4] + resultValueKai[28] - resultValueKai[36]) * bodyStamina + awakeStamina * awakeBodyStaminaPer, 0.0);
	diagnosis[diagnosisValue[24]] = staminaValue;
	//diagnosis[diagnosisValue[25]] = staminaValue * staminaValue * 0.5975 / (speedValue2 * speedValue2 * weightValue * 0.42); //0.4825 0.5975 0.7125 0.458 0.573 0.688
	diagnosis[diagnosisValue[25]] = staminaValue * staminaValue * 0.573 / ((0.9 * 0.9 + 0.8 * 0.8) * speedValue2 * speedValue2 * weightValue * 0.45); //0.458 0.573 0.688
	//diagnosis[diagnosisValue[25]] = staminaValue * staminaValue * 0.573 / (0.9 * 0.9 * speedValue2 * speedValue2 * weightValue * 0.8); //0.458 0.573 0.688

	//コーナー減速率
	var bodyCornerdecele = 1.0; //旋回
	if (bodyOption1 == 4) bodyCornerdecele -= 0.7;
	if (bodyOption1 == 14) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 44) bodyCornerdecele -= 0.8;
	if (bodyOption1 == 84) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 24) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 33) bodyCornerdecele -= 0.85;
	if (bodyOption1 == 34) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 36) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 39) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 55) bodyCornerdecele -= 0.83;
	if (bodyOption1 == 56) bodyCornerdecele += 0.7;
	if (bodyOption1 == 57) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 59) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 60) bodyCornerdecele -= 0.75;
	if (bodyOption1 == 118) bodyCornerdecele += 0.9;
	if (bodyOption1 == 119) bodyCornerdecele -= 0.35;
	if (bodyOption2 == 4) bodyCornerdecele -= 0.35;
	if (bodyOption2 == 14) bodyCornerdecele -= 0.42;
	if (bodyOption2 == 44) bodyCornerdecele -= 0.45;
	if (bodyOption2 == 84) bodyCornerdecele -= 0.42;
	if (bodyOption3 == 4) bodyCornerdecele -= 0.35;
	if (bodyOption3 == 14) bodyCornerdecele -= 0.42;
	if (bodyOption3 == 44) bodyCornerdecele -= 0.45;
	if (bodyOption3 == 84) bodyCornerdecele -= 0.42;
	var bodyCornerdecele2 = 1.0; //摩擦
	if (bodyOption1 == 4) bodyCornerdecele2 -= 0.17;
	if (bodyOption1 == 14) bodyCornerdecele2 -= 0.2;
	if (bodyOption1 == 44) bodyCornerdecele2 -= 0.5;
	if (bodyOption1 == 84) bodyCornerdecele2 -= 0.2;
	if (bodyOption1 == 55) bodyCornerdecele2 -= 0.5;
	if (bodyOption1 == 56) bodyCornerdecele2 += 0.17;
	if (bodyOption1 == 118) bodyCornerdecele2 += 0.2;
	if (bodyOption2 == 4) bodyCornerdecele2 -= 0.085;
	if (bodyOption2 == 14) bodyCornerdecele2 -= 0.1;
	if (bodyOption2 == 44) bodyCornerdecele2 -= 0.3;
	if (bodyOption2 == 84) bodyCornerdecele2 -= 0.1;
	if (bodyOption3 == 4) bodyCornerdecele2 -= 0.085;
	if (bodyOption3 == 14) bodyCornerdecele2 -= 0.1;
	if (bodyOption3 == 44) bodyCornerdecele2 -= 0.3;
	if (bodyOption3 == 84) bodyCornerdecele2 -= 0.1;
	var bodyCornerdecele3 = 1.0; //抵抗
	if (bodyOption1 == 24) bodyCornerdecele3 -= 0.7;
	if (bodyOption1 == 33) bodyCornerdecele3 -= 0.7;
	if (bodyOption1 == 55) bodyCornerdecele3 -= 0.7;
	if (bodyOption1 == 57) bodyCornerdecele3 -= 0.7;
	if (bodyOption1 == 59) bodyCornerdecele3 -= 0.7;
	if (bodyOption1 == 60) bodyCornerdecele3 -= 0.7;
	if (bodyOption1 == 93) bodyCornerdecele3 -= 0.5;
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
	var tiresenkaiValue = resultValueKai[14] + resultValueKai[34] * 2.0;
	var senkaisaValue = (rtiresenkaiValue - ftiresenkaiValue) / tiresenkaiValue;
	var senkaiC = -0.000000095868573 * (resultValueKai[30] + resultValueKai[31] * 2.0 + Math.abs(senkaisaValue) * 3.0) + 0.000032630514858;
	var senkaiA = 45.188272213660500 * senkaisaValue - 0.008372879447291;
	var cornerweightValue = (senkaiC * (gravityValue + senkaiA) * (gravityValue + senkaiA) + 0.024516625024408 - senkaiC * senkaiA * senkaiA) * treadValue;
	function calcCornerdecele(n) {
		var cornerdeceleA = (1.0 - cornerweightValue * Math.max(tiresenkaiValue * bodyCornerdecele, 1.0) / (4.0 * acceleValue2 * n));
		var cornerdeceleValue = cornerdeceleA / (0.5 + Math.sqrt(0.25 + 2.0 * cornerdeceleA * speedValue2 * speedValue2 / (4.0 * acceleValue2 * n) * (masatsuValue * bodyCornerdecele2 * (1.0 + Math.max(tiresenkaiValue * bodyCornerdecele, 1.0) * 0.000280569811045) + rollerteikouValue / 20.0 * bodyCornerdecele3)));
		return cornerdeceleValue;
	}
	//var cornerdeceleA = (1.0 - cornerweightValue * Math.max(tiresenkaiValue * bodyCornerdecele, 1.0) / (4.0 * acceleValue2 * 458.0));
	//var cornerdeceleValue = cornerdeceleA / (0.5 + Math.sqrt(0.25 + 2.0 * cornerdeceleA * speedValue2 * speedValue2 / (4.0 * acceleValue2 * 458.0) * (masatsuValue * bodyCornerdecele2 * (1.0 + Math.max(tiresenkaiValue * bodyCornerdecele, 1.0) * 0.000280569811045) + rollerteikouValue / 20.0 * bodyCornerdecele3)));
	diagnosis[diagnosisValue[6]] = calcCornerdecele(458.0);
	//diagnosis[diagnosisValue[32]] = calcCornerdecele(540.0 + 66.0 / 2.0);
	//diagnosis[diagnosisValue[33]] = calcCornerdecele(540.0 + 115.0 + 66.0 / 2.0);
	//diagnosis[diagnosisValue[34]] = calcCornerdecele(600.0 - 115.0 * 2.0 + 66.0 / 2.0);
	//diagnosis[diagnosisValue[35]] = calcCornerdecele(600.0 + 115.0 * 2.0 + 66.0 / 2.0);
	if (lanenum == 3) {
		diagnosis[diagnosisValue[33]] = calcCornerdecele(540.0 - 115.0 + 66.0 / 2.0);
		diagnosis[diagnosisValue[34]] = calcCornerdecele(540.0 + 115.0 + 66.0 / 2.0);
	} else {
		diagnosis[diagnosisValue[33]] = calcCornerdecele(600.0 - 115.0 * 2.0 + 66.0 / 2.0);
		diagnosis[diagnosisValue[34]] = calcCornerdecele(600.0 + 115.0 * 2.0 + 66.0 / 2.0);
	}
	tiresenkaiValue = (rtiresenkaiValue + resultValueKai[34]) * 2.0;
	senkaisaValue = 0.0;
	senkaiC = -0.000000095868573 * (resultValueKai[30] + resultValueKai[31] * 2.0 + Math.abs(senkaisaValue) * 3.0) + 0.000032630514858;
	senkaiA = 45.188272213660500 * senkaisaValue - 0.008372879447291;
	cornerweightValue = (senkaiC * (gravityValue + senkaiA) * (gravityValue + senkaiA) + 0.024516625024408 - senkaiC * senkaiA * senkaiA) * treadValue;
	diagnosis[diagnosisValue[35]] = calcCornerdecele(458.0);

	//コーナー安定
	var cornerAnteiUp = 1.0 + awakeCornerAnteiPer * awakeBodyCornerAnteiPer;
	if (bodyOption1 == 3) cornerAnteiUp += 0.4;
	if (bodyOption1 == 13) cornerAnteiUp += 0.5;
	if (bodyOption1 == 43) cornerAnteiUp += 0.6;
	if (bodyOption1 == 83) cornerAnteiUp += 0.5;
	if (bodyOption1 == 23) cornerAnteiUp += 0.5;
	if (bodyOption1 == 25) cornerAnteiUp += 0.4;
	if (bodyOption1 == 57) cornerAnteiUp += 0.6;
	if (bodyOption1 == 95) cornerAnteiUp += 0.6;
	if (bodyOption1 == 117) cornerAnteiUp -= 0.35;
	if (bodyOption1 == 121) cornerAnteiUp += 0.4;
	if (bodyOption2 == 3) cornerAnteiUp += 0.3;
	if (bodyOption2 == 13) cornerAnteiUp += 0.35;
	if (bodyOption2 == 43) cornerAnteiUp += 0.4;
	if (bodyOption2 == 83) cornerAnteiUp += 0.35;
	if (bodyOption3 == 3) cornerAnteiUp += 0.3;
	if (bodyOption3 == 13) cornerAnteiUp += 0.35;
	if (bodyOption3 == 43) cornerAnteiUp += 0.4;
	if (bodyOption3 == 83) cornerAnteiUp += 0.35;
	var cornerInValue = 0.0 - resultValueKai[35];
	var cornerHosei = new Array(1, 1, 3.0, 1.2, 2.0, 2.0, 2.0, 2.0, 2.0, 3.0, 2.0, 1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3.0);
	for (var i = 0; i < nameValue.length; i++) {
		if (i != 12 && i != 15 || (rollerteikouValue1 < -10.0 || rollerteikouValue2 < -10.0)) {
			cornerInValue += statusArray[i][3] / cornerHosei[nameCalc[i]];
		} else {
			cornerInValue += statusArray[i][3] / cornerHosei[nameCalc[i]] * 0.2;
		}
	}
	var cornerInValue2 = Math.max(cornerInValue * cornerAnteiUp + awakeCornerAntei * awakeBodyCornerAnteiPer, 0.0);
	//diagnosis[diagnosisValue[20]] = 0.885 * Math.sqrt(0.458 * cornerInValue2) * 3.6;
	//diagnosis[diagnosisValue[21]] = 0.885 * Math.sqrt(0.458 * cornerInValue2 * 0.38) * 3.6;
	diagnosis[diagnosisValue[32]] = cornerInValue2;
	//diagnosis[diagnosisValue[37]] = 0.885 * Math.sqrt((0.6 - 0.115 * 2.0 + 0.066 / 2.0) * cornerInValue2) * 3.6;
	//diagnosis[diagnosisValue[38]] = 0.885 * Math.sqrt((0.6 - 0.115 * 2.0 + 0.066 / 2.0) * cornerInValue2 * 0.38) * 3.6;
	if (lanenum == 3) {
		diagnosis[diagnosisValue[20]] = 0.885 * Math.sqrt(0.458 * cornerInValue2) * 3.6;
		diagnosis[diagnosisValue[21]] = 0.885 * Math.sqrt(0.458 * cornerInValue2 * 0.38) * 3.6;
	} else {
		diagnosis[diagnosisValue[20]] = 0.885 * Math.sqrt((0.6 - 0.115 * 2.0 + 0.066 / 2.0) * cornerInValue2) * 3.6;
		diagnosis[diagnosisValue[21]] = 0.885 * Math.sqrt((0.6 - 0.115 * 2.0 + 0.066 / 2.0) * cornerInValue2 * 0.38) * 3.6;
	}

	//ジャンプ飛距離
	var slopeLength = 0.45;
	var slopeAngle = 14.0;
	var slopeSpeedInit = speedValue2;
	if (brakeValue != 0) {
		slopeSpeedInit -= 19.0 * brakeValue;
		if (slopeSpeedInit < 0.0) slopeSpeedInit = 0.0;
	}
	//var slopeAccele = -Math.sin(slopeAngle * (Math.PI / 180.0)) * 9.80665;
	//var slopeTime = 0.0;
	//for (var i = 0; i <= 5; i++) {
	//	var timeUnit = Math.pow(10, i);
	//	for (var j = 1; j <= 100; j++) {
	//		var t = slopeTime + j / timeUnit;
	//		if (speedValue2 * (1.0 + slopeAccele / (4.0 * acceleValue2)) * t + speedValue2 * speedValue2 / (4.0 * acceleValue2) * (1.0 + slopeAccele / (4.0 * acceleValue2) - slopeSpeedInit / speedValue2) * (Math.exp(-4.0 * acceleValue2 / speedValue2 * t) - 1.0) >= slopeLength) {
	//			if (i < 5) {
	//				slopeTime += (j - 1) / timeUnit;
	//			} else {
	//				slopeTime += j / timeUnit;
	//			}
	//			break;
	//		}
	//	}
	//}
	//var slopeSpeed = speedValue2 * (1.0 + slopeAccele / (4.0 * acceleValue2) - (1.0 + slopeAccele / (4.0 * acceleValue2) - slopeSpeedInit / speedValue2) * Math.exp(-4.0 * acceleValue2 / speedValue2 * slopeTime));
	var slopeSpeed = slopeSpeedInit;
	var jumpValue = 0.001;
	var aeroGain = -0.0000570419 * slopeSpeed + 0.0002438302;
	var gravityGain = (0.1 / (slopeSpeed - 0.05) - 0.0367);
	slopeSpeed -= -0.00159932 * slopeSpeed * slopeSpeed + 0.020913802 * slopeSpeed + 0.685663298;
	if (slopeSpeed > 0.0) {
		jumpValue = slopeSpeed * slopeSpeed * Math.sin(2.0 * slopeAngle * (Math.PI / 180.0)) / 9.80665 + gravityGain * gravityValue + aeroGain * (bodyAerodf + resultValueKai[9]);
	
		if (jumpValue < 1.3) jumpValue = 0.001;
	}
	diagnosis[diagnosisValue[7]] = jumpValue;

	//バウンド時間
	var bodyBoundtime = 1.0; //タイヤ反発
	if (bodyOption1 == 7) bodyBoundtime -= 0.05;
	if (bodyOption1 == 17) bodyBoundtime -= 0.10;
	if (bodyOption2 == 7) bodyBoundtime -= 0.04;
	if (bodyOption2 == 17) bodyBoundtime -= 0.08;
	if (bodyOption3 == 7) bodyBoundtime -= 0.04;
	if (bodyOption3 == 17) bodyBoundtime -= 0.08;
	var bodyBoundtime2 = 1.0 + awakeBoundtime2Per; //制振
	if (bodyOption1 == 27) bodyBoundtime2 += 2.0;
	if (bodyOption1 == 65) bodyBoundtime2 += 4.0;
	var seishinValue = resultValueKai[11];
	var ftirehanpatsuValue = statusArray[6][15];
	var rtirehanpatsuValue = statusArray[7][15];
	var tirehanpatsuValue = ftirehanpatsuValue + rtirehanpatsuValue;
	slopeLength = 0.45;
	slopeAngle = 14.0;
	slopeSpeedInit = speedValue2;
	if (brakeValue != 0) {
		slopeSpeedInit -= 19.0 * brakeValue;
		if (slopeSpeedInit < 0.0) slopeSpeedInit = 0.0;
	}
	//slopeAccele = -Math.sin(slopeAngle * (Math.PI / 180.0)) * 9.80665;
	//slopeTime = 0.0;
	//for (var i = 0; i <= 5; i++) {
	//	var timeUnit = Math.pow(10, i);
	//	for (var j = 1; j <= 100; j++) {
	//		var t = slopeTime + j / timeUnit;
	//		if (speedValue2 * (1.0 + slopeAccele / (4.0 * acceleValue2)) * t + speedValue2 * speedValue2 / (4.0 * acceleValue2) * (1.0 + slopeAccele / (4.0 * acceleValue2) - slopeSpeedInit / speedValue2) * (Math.exp(-4.0 * acceleValue2 / speedValue2 * t) - 1.0) >= slopeLength) {
	//			if (i < 5) {
	//				slopeTime += (j - 1) / timeUnit;
	//			} else {
	//				slopeTime += j / timeUnit;
	//			}
	//			break;
	//		}
	//	}
	//}
	//slopeSpeed = speedValue2 * (1.0 + slopeAccele / (4.0 * acceleValue2) - (1.0 + slopeAccele / (4.0 * acceleValue2) - slopeSpeedInit / speedValue2) * Math.exp(-4.0 * acceleValue2 / speedValue2 * slopeTime));
	slopeSpeed = slopeSpeedInit;
	slopeSpeed -= -0.032010716 * slopeSpeed * slopeSpeed + 1.252790836 * slopeSpeed - 4.291695325;
	var hanpatsuValue;
	var hanpatsuStr = "";
	//var seishinValueInit = weightValue * (63.0 - 50.0 * tirehanpatsuValue * bodyBoundtime / 1000.0) * (tirehanpatsuValue * bodyBoundtime / 1000.0 - (slopeSpeed / 300.0 + 0.00005 * gravityValue) * 9.80665 / (2.0 * slopeSpeed * Math.sin(slopeAngle * (Math.PI / 180.0)) + (slopeSpeed / 300.0 + 0.00005 * gravityValue) * 9.80665)) / bodyBoundtime2;
	//if (seishinValueInit < 0) {
	//	hanpatsuValue = tirehanpatsuValue * bodyBoundtime / 1000.0 - seishinValue * bodyBoundtime2 / (weightValue * (63.0 - 50.0 * tirehanpatsuValue * bodyBoundtime / 1000.0)) / 5.0;
	//	hanpatsuStr = "制)";
	//} else if (seishinValueInit > seishinValue) {
		hanpatsuValue = tirehanpatsuValue * bodyBoundtime / 1000.0 - seishinValue * bodyBoundtime2 / (weightValue * (63.0 - 50.0 * tirehanpatsuValue * bodyBoundtime / 1000.0));
	//} else {
	//	hanpatsuValue = tirehanpatsuValue * bodyBoundtime / 1000.0 - seishinValueInit * bodyBoundtime2 / (weightValue * (63.0 - 50.0 * tirehanpatsuValue * bodyBoundtime / 1000.0)) - (seishinValue - seishinValueInit) * bodyBoundtime2 / (weightValue * (63.0 - 50.0 * tirehanpatsuValue * bodyBoundtime / 1000.0)) / 5.0;
	//	hanpatsuStr = "制)";
	//}
	if (jumpValue > 2.2) {
		aeroGain = -0.000001;
	} else {
		aeroGain = 0.000001;
	}
	var boundtimeValue = 2.0 * slopeSpeed * Math.sin(slopeAngle * (Math.PI / 180.0)) * hanpatsuValue / (1.0 - hanpatsuValue) / 9.80665 - 0.0004 * gravityValue + aeroGain * (bodyAerodf + resultValueKai[9]);
	if (jumpValue == 0.001 || boundtimeValue < 0.001) boundtimeValue = 0.001;
	diagnosis[diagnosisValue[8]] = hanpatsuStr + boundtimeValue;

	for (var i = 0; i < diagnosisValue.length; i++) {
		if (diagnosis[diagnosisValue[i]] != "" && Math.abs(diagnosis[diagnosisValue[i]]) < 0.00000000000001) diagnosis[diagnosisValue[i]] = 0;
	}

	return diagnosis;
}

function UrlCalc(value1) {
	var urlValue =  "";
	if (kaizouArray[value1][0] >= 61) {
		var n = kaizouArray[value1][0] % 61;
		urlValue = NumToUrl(kaizouArray[value1][0] - n) + NumToUrl(n);
	} else {
		urlValue = NumToUrl(kaizouArray[value1][0]);
	}
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		for (var i = 1; i <= slotNum; i++) {
			urlValue += NumToUrl(kaizouArray[value1][1 + (i - 1) * 3]);
			urlValue += NumToUrl(kaizouArray[value1][2 + (i - 1) * 3]);
			urlValue += NumToUrl(kaizouArray[value1][3 + (i - 1) * 3]);
		}
		var awakeoffset = 22;
		if (value1 == 2) {
			urlValue += NumToUrl(kaizouArray[value1][22]);
			for (var i = 1; i <= 3; i++) {
				if (kaizouArray[value1][22 + i] >= 61) {
					var n = kaizouArray[value1][22 + i] % 61;
					urlValue += NumToUrl(kaizouArray[value1][22 + i] - n) + NumToUrl(n);
				} else {
					urlValue += NumToUrl(kaizouArray[value1][22 + i]);
				}
			}
			awakeoffset = 26;
		}
		//覚醒
		for (var i = 1; i <= 2; i++) {
			urlValue += NumToUrl(kaizouArray[value1][awakeoffset + (i - 1) * 3]);
			urlValue += NumToUrl(kaizouArray[value1][awakeoffset + 1 + (i - 1) * 3]);
			urlValue += NumToUrl(kaizouArray[value1][awakeoffset + 2 + (i - 1) * 3]);
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
