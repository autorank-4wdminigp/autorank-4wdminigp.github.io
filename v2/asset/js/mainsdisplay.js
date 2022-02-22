var oldselectArray;

var calcFlg = 0;
var resultFlg = 0;

// パーツ選択UIのインスタンス
var partsSelector;

function View_Set(value1) {
	var writeValue = "";
	writeValue += "<a name='link" + value1 + "'></a><table class='cstable'><tr><td>" + nameView[value1];
	writeValue += "<span id='id_" + nameValue[value1] + "'></span></td></tr><tr>";

	if (value1 == 2) {
		writeValue += "</tr></table>";
		writeValue += "</tr></table><table class='cstable'><tr>";
		writeValue += "<td>メイン特性 <select id='" + nameValue[value1] + "_bodytokusei1' class='tokusei' onchange='Type_Calc(" + value1 + ")'>";
		for (var i = 0; i < selectOption.length; i++) {
			writeValue += "<option value=" + i + ">" + selectOption[i] + "</option>";
		}
		writeValue += "</select></td><td>肉抜き <select id='" + nameValue[value1] + "_niku' class='niku' onchange='Type_Calc(" + value1 + ")'>";
		writeValue += "<option value=0>なし</option>";
		for (var j = 1; j <= 4; j++) {
			writeValue += "<option value=" + j + ">" + j + "箇所</option>";
		}
		writeValue += "</td></tr><tr><td>アシスト特性 <select id='" + nameValue[value1] + "_bodytokusei2' class='tokusei' onchange='Type_Calc(" + value1 + ")'>";
		for (var i = 0; i < selectOption.length; i++) {
			writeValue += "<option value=" + i + ">" + selectOption[i] + "</option>";
		}
		writeValue += "</select></td><td>アシスト特性 <select id='" + nameValue[value1] + "_bodytokusei3' class='tokusei' onchange='Type_Calc(" + value1 + ")'>";
		for (var i = 0; i < selectOption.length; i++) {
			writeValue += "<option value=" + i + ">" + selectOption[i] + "</option>";
		}
		writeValue += "</select></td>";
	}
	//覚醒
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		writeValue += "</tr></table><table class='cstable'>";
		for (var i = 1; i <= 2; i++) {
			writeValue += "<tr><td>覚醒" + i + " <span id='id_" + nameValue[value1] + "_awake" + i + "'></span>　強化Lv ";
			writeValue += "<select id='" + nameValue[value1] + "_awakelv" + i + "' onchange='Type_Calc(" + value1 + ")'>";
			for (var j = 1; j < 10; j++) {
				writeValue += "<option value=" + j + ">" + j + "</option>";
			}
			writeValue += "<option value=" + 10 + " selected>" + 10 + "</option></select>";
			writeValue += "　発動 <span id='id_" + nameValue[value1] + "_awakenum" + i + "'></span></td></tr>";
		}
	}

	writeValue += "</table><table class='cstable'><tr>";
	for (var i = 0; i < typeSelect[nameCalc[value1]].length; i++) {
		if (i > 0 && i % 5 == 0) {
			writeValue += "</tr><tr>";
		}
		if (typeSelect[nameCalc[value1]][i] >= 0) {
			writeValue += "<td>" + typeView[typeSelect[nameCalc[value1]][i]] + "<input class='csinput detail' type='text' id='" + nameValue[value1] + "_" + typeValue[typeSelect[nameCalc[value1]][i]] + "' value=''><br><span class='detail'>改造後</span> <input class='csinput' type='text' id='" + nameValue[value1] + "_" + typeValue[typeSelect[nameCalc[value1]][i]] + "_kaisv' value=''></td>";
		} else {
			writeValue += "<td>" + addTypeView[-typeSelect[nameCalc[value1]][i]] + "<input class='csinput detail' type='text' id='" + nameValue[value1] + "_" + addTypeValue[-typeSelect[nameCalc[value1]][i]] + "' value=''><br><span class='detail'>改造後</span> <input class='csinput' type='text' id='" + nameValue[value1] + "_" + addTypeValue[-typeSelect[nameCalc[value1]][i]] + "_kaisv' value=''></td>";
		}
	}
	writeValue += "</tr></table>";
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		writeValue += "<table class='cstable'><tr>";
		writeValue += "<td>テンプレ改造 <span id='id_" + nameValue[value1] + "_tenpure'></span></td>";
		writeValue += "<td>改造 <input type='button' value='初期化' onclick='Shokika_Set(" + value1 + ")'> </td>";
		if (nameZero[nameCalc[value1]] == 1) {
			writeValue += "<td>パーツ <input type='button' value='外す' onclick='Parts_Out(" + value1 + ")'></td>";
		}
		writeValue += "</tr><td colspan='2'>パーツプリセット <input class='csinput preset' type='text' id='" + nameValue[value1] + "_pres' value=''> <input type='button' value='装着' onclick='Preset_Set(" + value1 + ")'> </td></tr>";
		writeValue += "</tr><td colspan='2'><div>改造結果一括セット</div> <div><input type='button' value='イイ感じ' onclick='Shikou_Set(0, " + value1 + ")'> <input type='button' value='職人技' onclick='Shikou_Set(1, " + value1 + ")'> <input type='button' value='至高の逸品' onclick='Shikou_Set(2, " + value1 + ")'> </div></td></tr>";
		writeValue += "</tr></table><table class='cstable'>";
		for (var i = 1; i <= slotNum; i++) {
			writeValue += "<tr><td>スロット" + i + " ";
			writeValue += "<span id='id_" + nameValue[value1] + "_slot" + i + "'></span><br>";
			writeValue += "<select id='" + nameValue[value1] + "_type" + i + "' onchange='Type_Calc(" + value1 + ")'>";
			writeValue += "<option value=2>イイ感じ</option><option value=3>職人技</option><option value=4 selected>至高の逸品</option></select>　強化Lv ";
			writeValue += "<select id='" + nameValue[value1] + "_lv" + i + "' onchange='Type_Calc(" + value1 + ")'>";
			for (var j = 1; j <= 50; j++) {
				writeValue += "<option value=" + j + (j == 50 ? " selected>" : ">") + j + "</option>";
				//writeValue += "<option value=" + j + ">" + j + "</option>";
			}
			writeValue += "</select>";
			if (i == 1) {
				writeValue += " <input type='button' value='Lv一括' onclick='Lv_Set(" + value1 + ")'>　";
			}
			writeValue += "</td>";
			for (var j = 1; j <= 3; j++) {
				writeValue += "<td class='detail'><span id='id_" + nameValue[value1] + "_slot" + i + "_" + j + "'></span><br><input class='csinput' type='text' id='" + nameValue[value1] + "_slot" + i + "_" + j +"' value=''></td>";
			}
			writeValue += "</tr>";
		}
		writeValue += "</table>";
	}
	oldselectArray = -1;
	document.getElementById("mains-main").innerHTML = writeValue;
}

function Type_Init(value1) {
	var innerValue = "<select id='" + nameValue[value1] + "' class='parts' onchange='Type_Set(" + value1 + ", " + nameUpdate[nameCalc[value1]] + ")'>";
	for (var i = 0; i < selectValue[nameCalc[value1]].length; i++) {
		innerValue += "<option value=" + i + ">" + selectValue[nameCalc[value1]][i][0] + " [" + selectProper[selectValue[nameCalc[value1]][i][1]] + "]";
		if (value1 == 2) {
			innerValue += " [" + selectOption[selectValue[nameCalc[value1]][i][2]] + "]";
		}
		innerValue += "</option>";
	}
	document.getElementById("id_" + nameValue[value1]).innerHTML = innerValue + "</select>";
}

function Type_Set(value1, value2) {
	var index = document.getElementById(nameValue[value1]).value;
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		var sameFlg = 1;
		if (value2 == 1) {
			var oldIndex = oldselectArray;
			if (oldIndex != -1 && kaizouSelect[nameCalc[value1]][kaizouSelectIndex[nameCalc[value1]][index]].length == kaizouSelect[nameCalc[value1]][kaizouSelectIndex[nameCalc[value1]][oldIndex]].length) {
				for (var j = 0; j < kaizouSelect[nameCalc[value1]][kaizouSelectIndex[nameCalc[value1]][index]].length; j++) {
					if (kaizouSelect[nameCalc[value1]][kaizouSelectIndex[nameCalc[value1]][index]][j] != kaizouSelect[nameCalc[value1]][kaizouSelectIndex[nameCalc[value1]][oldIndex]][j]) {
						sameFlg = -1;
						break;
					}
				}
			} else {
				sameFlg = -1;
			}
			if (sameFlg != -1) {
				if (oldIndex != -1 && kaizou7Select[nameCalc[value1]][kaizou7SelectIndex[nameCalc[value1]][index]].length == kaizou7Select[nameCalc[value1]][kaizou7SelectIndex[nameCalc[value1]][oldIndex]].length) {
					for (var j = 0; j < kaizou7Select[nameCalc[value1]][kaizou7SelectIndex[nameCalc[value1]][index]].length; j++) {
						if (kaizou7Select[nameCalc[value1]][kaizou7SelectIndex[nameCalc[value1]][index]][j] != kaizou7Select[nameCalc[value1]][kaizou7SelectIndex[nameCalc[value1]][oldIndex]][j]) {
							sameFlg = -1;
							break;
						}
					}
				} else {
					sameFlg = -1;
				}
			}
		}
		if (sameFlg == -1 || (index == 0 && nameZero[nameCalc[value1]] == 1)) {
			var indexTmp = index;
			if (nameUpdate[nameCalc[value1]] == 0) {
				indexTmp = 0;
			}
			var kaizouIndex = kaizouSelectIndex[nameCalc[value1]][indexTmp];
			var kaizou7Index = kaizou7SelectIndex[nameCalc[value1]][indexTmp];
			var innerValue = "";
			for (var i = 1; i <= slotNum; i++) {
				innerValue = "<select id='" + nameValue[value1] + "_slot" + i + "' class='slot' onchange='Type_Slot_Set(" + value1 + ", " +  (i - 1) + ")'>";
				innerValue += "<option value=-1 selected>改造選択</option>";
				if (i == 7) {
					for (var j = 0; j < kaizou7Select[nameCalc[value1]][kaizou7Index].length; j++) {
						innerValue += "<option value=" + kaizou7Select[nameCalc[value1]][kaizou7Index][j] + ">" + kaizouValue[nameCalc[value1]][kaizou7Select[nameCalc[value1]][kaizou7Index][j]][0][0] + "</option>";
					}
				} else {
					for (var j = 0; j < kaizouSelect[nameCalc[value1]][kaizouIndex].length; j++) {
						innerValue += "<option value=" + kaizouSelect[nameCalc[value1]][kaizouIndex][j] + ">" + kaizouValue[nameCalc[value1]][kaizouSelect[nameCalc[value1]][kaizouIndex][j]][0][0] + "</option>";
					}
				}
				document.getElementById("id_" + nameValue[value1] + "_slot" + i).innerHTML = innerValue + "</select>";
				for (var j = 0; j < 3; j++) {
					document.getElementById("id_" + nameValue[value1] + "_slot" + i + "_" + (j + 1)).innerHTML = "";
				}
			}
			if (kaizouTenpreSelect[nameCalc[value1]] != null) {
				innerValue = "<select id='" + nameValue[value1] + "_tenpure' class='tenpure' onchange='Type_Tenpre_Set(" + value1 + ")'>";
				innerValue += "<option value=-1 selected>テンプレ選択</option>";
				for (var j = 0; j < kaizouTenpreSelect[nameCalc[value1]][kaizouIndex].length; j++) {
					innerValue += "<option value=" + kaizouTenpreSelect[nameCalc[value1]][kaizouIndex][j] + ">" + kaizouTenpre[nameCalc[value1]][kaizouTenpreSelect[nameCalc[value1]][kaizouIndex][j]][0] + "</option>";
				}
				document.getElementById("id_" + nameValue[value1] + "_tenpure").innerHTML = innerValue + "</select>";
			}
		}
	}
	if (value1 == 2) {
		var bodyIndex = document.getElementById(nameValue[2]).value;
		var bodyOption = selectValue[2][bodyIndex][2];
		var calcFlgOrg = calcFlg;
		calcFlg = 0;
		document.getElementById(nameValue[value1] + '_bodytokusei1').selectedIndex = bodyOption;
		calcFlg = calcFlgOrg;
	}
	for (var i = 0; i < typeSelect[nameCalc[value1]].length; i++) {
		if (typeSelect[nameCalc[value1]][i] >= 0) {
			document.getElementById(nameValue[value1] + '_' + typeValue[typeSelect[nameCalc[value1]][i]]).value = selectValue[nameCalc[value1]][index][typeSelect[nameCalc[value1]][i] + addStatusNum];
		} else {
			document.getElementById(nameValue[value1] + '_' + addTypeValue[-typeSelect[nameCalc[value1]][i]]).value = selectValue[nameCalc[value1]][index][-typeSelect[nameCalc[value1]][i]];
		}
	}
	oldselectArray = index;
	//覚醒
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		for (var i = 1; i <= 2; i++) {
			innerValue = "<select class='select_t' id='" + nameValue[value1] + "_awakeskill" + i + "' onchange='Awake_Set(" + value1 + ", " + i + ")'>";
			innerValue += "<option value=0 selected>－</option>";
			var awakeIndex = selectValue[nameCalc[value1]][document.getElementById(nameValue[value1]).value][4];
			if (awakeIndex != 0) {
				for (var j = 0; j < awakeOption[awakeIndex].length; j++) {
					innerValue += "<option value=" + awakeOption[awakeIndex][j] + ">" + awakeValue[awakeOption[awakeIndex][j]][0] + "</option>";
				}
			}
			document.getElementById("id_" + nameValue[value1] + "_awake" + i).innerHTML = innerValue + "</select>";
			var calcFlgOrg = calcFlg;
			calcFlg = 0;
			Awake_Set(value1, i);
			calcFlg = calcFlgOrg;
		}
	}

	Type_Calc(value1);
}

function Awake_Set(value1, value2) {
	var index = document.getElementById(nameValue[value1] + '_awakeskill' + value2).value;
	var innerValue = "<select id='" + nameValue[value1] + "_awakenum" + value2 + "' onchange='Type_Calc(" + value1 + ")'>";
	innerValue += "<option value=" + 1 + " selected>" + awakeValue[index][1] + "</option>";
	for (var j = 2; j < awakeValue[index].length; j++) {
		innerValue += "<option value=" + j + ">" + awakeValue[index][j] + "</option>";
	}
	document.getElementById("id_" + nameValue[value1] + "_awakenum" + value2).innerHTML = innerValue + "</select>";
	Type_Calc(value1);
}

function Type_Slot_Set(value1, value2) {
	var index = document.getElementById(nameValue[value1] + '_slot' + (value2 + 1)).value;
	for (var j = 0; j < 3; j++) {
		document.getElementById("id_" + nameValue[value1] + "_slot" + (value2 + 1) + "_" + (j + 1)).innerHTML = "";
	}
	if (index != -1) {
		for (var j = 0; j < kaizouValue[nameCalc[value1]][index].length; j++) {
			document.getElementById("id_" + nameValue[value1] + "_slot" + (value2 + 1) + "_" + (j + 1)).innerHTML = kaizouValue[nameCalc[value1]][index][j][1];
		}
	}
	Type_Calc(value1);
}

function All_Set() {
	for (var i = 0; i < nameValue.length; i++) {
		statusArray[i] = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //34
		statusArrayInit[i] = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //34
		if (kaizouSelect[nameCalc[i]][0].length != 0) {
			if (i == 2) {
				kaizouArray[i] = new Array(0, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 0, 0);
			} else {
				kaizouArray[i] = new Array(0, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49);
			}
			kaizouArrayUnit[i] = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
		} else {
			kaizouArray[i] = new Array(0, 0);
		}
	}
	urlArray = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""); //34
	calcFlg = 1;
	resultFlg = 1;
	UrlSet();
	for (var i = 0; i < nameValue.length; i++) {
		Menu_Init(i);
		Type_CalcArray(i, 0);
		UrlCalc(i);
		Menu_Set(i);
	}
	All_Calc();
	UrlView(0);
	Menu_Click(0);
}

// マシン詳細とマシン診断の計算を実行する
function All_Calc() {
	var disp1 = document.getElementById('disp1').checked;
	var result = Result_Calc(disp1);
	for (var i = 1; i < typeValue.length; i++) {
		document.getElementById(typeValue[i]).value = result.value[i];
		document.getElementById(typeValue[i] + "_kaisv").value = result.valueKaiSv[i];
		var rate = result.value[i] == 0 ? 0 : result.valueKaiSv[i] / result.value[i] * 100.0 - 100.0;
		document.getElementById(typeValue[i] + "_rate").value = rate;
	}
	var shindantire = 1;
	var shindantirekei = 0;
	if (document.getElementById('shindantire2').checked) {
		shindantire = 2;
		shindantirekei = document.getElementById('shindantirekei').selectedIndex;
	}
	var diagnosis = Diagnosis_Calc(result.valueKaiSv, shindantire, shindantirekei);
	for (var key in diagnosis) {
		document.getElementById(key).value = diagnosis[key];
	}
	Update_Chart();
}

function Type_Tenpre_Set(value1) {
	var index = document.getElementById(nameValue[value1] + '_tenpure').value;
	if (index != -1) {
		for (var i = 1; i <= 6; i++) {
			if (i == 6) {
				calcFlg = 1;
			} else {
				calcFlg = 0;
			}
			document.getElementById(nameValue[value1] + '_slot' + i).selectedIndex = kaizouTenpre[nameCalc[value1]][index][i];
			Type_Slot_Set(value1, i - 1);
		}
		document.getElementById(nameValue[value1] + '_tenpure').selectedIndex = 0;
	}
}

function Type_CalcArray(value1, viewFlg) {
	if (viewFlg != 0) {
		kaizouArray[value1][0] = document.getElementById(nameValue[value1]).selectedIndex;
	}
	var nameIndex = kaizouArray[value1][0];
	if (kaizouSelect[nameCalc[value1]][0].length == 0) {
		var calcValue = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //34
		for (var i = 1; i < selectValue[nameCalc[value1]][nameIndex].length - addStatusNum; i++) {
			calcValue[i] = selectValue[nameCalc[value1]][nameIndex][i + addStatusNum];
			statusArray[value1][i] = calcValue[i];
			statusArrayInit[value1][i] = calcValue[i];
		}
		if (viewFlg != 0) {
			for (var i = 0; i < typeSelect[nameCalc[value1]].length; i++) {
				if (typeSelect[nameCalc[value1]][i] >= 0) {
					document.getElementById(nameValue[value1] + "_" + typeValue[typeSelect[nameCalc[value1]][i]] + "_kaisv").value = calcValue[typeSelect[nameCalc[value1]][i]];
				}
			}
		}
	} else {
		if (viewFlg != 0) {
			for (var i = 1; i <= slotNum; i++) {
				for (var j = 1; j <= 3; j++) {
					document.getElementById(nameValue[value1] + "_slot" + i + "_" + j).value = "";
					kaizouArrayUnit[value1][j - 1 + (i - 1) * 3] = "";
				}
			}
		}
		var calcValueSv = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //34
		var calcValueSvInit = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //34
		for (var i = 1; i < selectValue[nameCalc[value1]][nameIndex].length - addStatusNum; i++) {
			calcValueSv[i] = selectValue[nameCalc[value1]][nameIndex][i + addStatusNum];
			calcValueSvInit[i] = calcValueSv[i];
			statusArrayInit[value1][i] = calcValueSv[i];
		}
		for (var i = 1; i <= slotNum; i++) {
			if (viewFlg != 0) {
				kaizouArray[value1][1 + (i - 1) * 3] = document.getElementById(nameValue[value1] + '_slot' + i).selectedIndex;
				kaizouArray[value1][2 + (i - 1) * 3] = document.getElementById(nameValue[value1] + '_type' + i).selectedIndex;
				kaizouArray[value1][3 + (i - 1) * 3] = document.getElementById(nameValue[value1] + '_lv' + i).selectedIndex;
			}
			var slotIndex = kaizouArray[value1][1 + (i - 1) * 3] - 1;
			if (slotIndex == -1) continue;
			var indexTmp = nameIndex;
			if (nameUpdate[nameCalc[value1]] == 0) {
				indexTmp = 0;
			}
			if (i == 7) {
				slotIndex = kaizou7Select[nameCalc[value1]][kaizou7SelectIndex[nameCalc[value1]][indexTmp]][slotIndex];
			} else {
				slotIndex = kaizouSelect[nameCalc[value1]][kaizouSelectIndex[nameCalc[value1]][indexTmp]][slotIndex];
			}
			var typeVal = kaizouArray[value1][2 + (i - 1) * 3] + 2;
			var lvVal = kaizouArray[value1][3 + (i - 1) * 3] + 1;
			for (var j = 0; j < kaizouValue[nameCalc[value1]][slotIndex].length; j++) {
				var typeIndex = kaizouValue[nameCalc[value1]][slotIndex][j][7];
				var kaizouVal = 0.0;
				if (kaizouValue[nameCalc[value1]][slotIndex][j][6] == -1) {
					kaizouVal = Math.abs(selectValue[nameCalc[value1]][nameIndex][typeIndex + addStatusNum]) * kaizouValue[nameCalc[value1]][slotIndex][j][typeVal];
				} else {
					kaizouVal = kaizouValue[nameCalc[value1]][slotIndex][j][typeVal];
				}
				var kyoukaValSv = 0.0;
				if (kaizouValue[nameCalc[value1]][slotIndex][j][6] == -2) {
					kyoukaValSv = kaizouValue[nameCalc[value1]][slotIndex][j][5] * lvVal;
				} else {
					kyoukaValSv = Math.abs(calcValueSvInit[typeIndex]) * kaizouValue[nameCalc[value1]][slotIndex][j][5] * lvVal;
				}
				if (viewFlg != 0) {
					document.getElementById(nameValue[value1] + "_slot" + i + "_" + (j + 1)).value = kaizouVal + kyoukaValSv;
				}
				kaizouArrayUnit[value1][j + (i - 1) * 3] = kaizouVal + kyoukaValSv;
				calcValueSv[typeIndex] += kaizouVal + kyoukaValSv;
				//if (calcValueSv[typeIndex] < 0 && typeIndex != 12) calcValueSv[typeIndex] = 0;
			}
		}
		if (value1 == 2) {
			if (viewFlg != 0) {
				kaizouArray[value1][22] = document.getElementById(nameValue[value1] + '_niku').selectedIndex;
				for (var i = 1; i <= 3; i++) {
					kaizouArray[value1][22 + i] = document.getElementById(nameValue[value1] + '_bodytokusei' + i).selectedIndex;
				}
			}
			var nikuVal = kaizouArray[value1][22];
			calcValueSv[5] -= nikuVal * calcValueSvInit[5] * 0.02;
		}
		for (var i = 0; i < typeSelect[nameCalc[value1]].length; i++) {
			var typeIndex = typeSelect[nameCalc[value1]][i];
			if (typeIndex >= 0) {
				if (viewFlg != 0) {
					document.getElementById(nameValue[value1] + "_" + typeValue[typeIndex] + "_kaisv").value = calcValueSv[typeIndex];
				}
				statusArray[value1][typeIndex] = calcValueSv[typeIndex];
			} else {
				if (viewFlg != 0) {
					document.getElementById(nameValue[value1] + "_" + addTypeValue[-typeIndex] + "_kaisv").value = document.getElementById(nameValue[value1] + "_" + addTypeValue[-typeIndex]).value;
				}
			}
		}
	}
}

function Type_Calc(value1) {
	if (calcFlg == 0) return 0;
	Type_CalcArray(value1, 1);
	UrlCalc(value1);
	Menu_Set(value1);
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		document.getElementById(nameValue[value1] + "_pres").value = urlArray[value1];
	}
	if (resultFlg == 0) return 0;
	All_Calc();
	UrlView(0);
}

function UrlView(value1) {
	var urlValue = urlArray.join("");
	var historyValue = "a";
	if (document.getElementById('history2').checked) {
		historyValue = "b";
	}
	var base = location.origin + location.pathname;
	var search = "?" + urlValue + historyValue;
	document.getElementById('linkurl').href = base + search;
	document.getElementById('dispurl').value = base + search;
	document.getElementById('v1url').href = base.replace("v2/", "") + search;
	if (historyValue == "b" || value1 == 1) {
		history.replaceState("", "", search);
	}
	var shortBtn = document.getElementById('short');
	shortBtn.value = "短縮";
	shortBtn.disabled = false;
}

function UrlShort() {
	var btn = document.getElementById('short');
	btn.disabled = true;
	btn.value = "短縮中";

	var url = document.getElementById('linkurl').href;
	fetch("https://is.gd/create.php?format=json&url=" + encodeURIComponent(url),
		{
			method: "GET",
			redirect: "follow"
		}
	)
	.then(r => {
		console.log(r);
		if (r.ok) {
			return r.json();
		} else {
			return Promise.reject(r);
		}
	})
	.then(body => {
		if (body.shorturl) {
			btn.value = "短縮完了";
			document.getElementById('linkurl').href = body.shorturl;
			document.getElementById('dispurl').value = body.shorturl;
		} else {
			return Promise.reject(body);
		}
	})
	.catch(e => {
		console.log(e);
		btn.value = "短縮失敗";
	});
}

function UrlSet() {
	var url = document.location.href;
	var start = url.indexOf("?", 0);
	if (start != -1) {
		var presetText = url.substring(start + 1);
		var index = 0;
		var pos = 0;
		if (presetText.length >= ((1 + 3 * 6) * (nameValue.length - 5) + 5 + 3)) { //19x29+5+3=559 19x30+4+3=577 19x30+4+4=578 22x30+4+4=668 22x31+4+3=689 22x32+4+3=711
			var indexEnd = UrlToNum(presetText.charAt(presetText.length - 1));
			for (var value1 = 0; value1 < nameValue.length; value1++) {
				var str = presetText.charAt(pos++);
				var charLenTmp = 0;
				index = UrlToNum(str);
				if (index > 60) {
					str = presetText.charAt(pos++);
					index += UrlToNum(str);
					charLenTmp++;
				}
				kaizouArray[value1][0] = index;
				if (kaizouSelect[nameCalc[value1]][0].length != 0) {
					var slotNumTmp = slotNum;
					if (presetText.length <= (578 + charLenTmp)) slotNumTmp = 6;
					for (var i = 1; i <= slotNumTmp; i++) {
						index = UrlToNum(presetText.charAt(pos++));
						kaizouArray[value1][1 + (i - 1) * 3] = index;
						index = UrlToNum(presetText.charAt(pos++));
						kaizouArray[value1][2 + (i - 1) * 3] = index;
						index = UrlToNum(presetText.charAt(pos++));
						kaizouArray[value1][3 + (i - 1) * 3] = index;
					}
					if (value1 == 2) {
						index = UrlToNum(presetText.charAt(pos++));
						kaizouArray[value1][22] = index;
						if (presetText.length != (559 + charLenTmp) && presetText.length != (577 + charLenTmp)) {
							index = UrlToNum(presetText.charAt(pos++));
							if (index > 60) {
								index += UrlToNum(presetText.charAt(pos++));
							}
							kaizouArray[value1][23] = index;
						}
						index = UrlToNum(presetText.charAt(pos++));
						if (index > 60) {
							index += UrlToNum(presetText.charAt(pos++));
						}
						kaizouArray[value1][24] = index;
						index = UrlToNum(presetText.charAt(pos++));
						if (index > 60) {
							index += UrlToNum(presetText.charAt(pos++));
						}
						kaizouArray[value1][25] = index;
					}
					if ((value1 == 32 && presetText.length <= (669 + charLenTmp)) || (value1 == 34 && presetText.length <= (690 + charLenTmp))) {
						kaizouArray[value1][0] = 0;
						for (var i = 1; i <= slotNumTmp; i++) {
							kaizouArray[value1][1 + (i - 1) * 3] = 0;
							kaizouArray[value1][2 + (i - 1) * 3] = 2;
							kaizouArray[value1][3 + (i - 1) * 3] = 49;
						}
					}
				}
			}
			index = UrlToNum(presetText.charAt(pos++));
			if (index == 1 || indexEnd == 1) {
				document.getElementById('history2').checked = true;
			}
		}
	}
}

function Preset_Set(value1) {
	var presetText = document.getElementById(nameValue[value1] + "_pres").value;
	var index = 0;
	var pos = 0;
	if ((value1 != 2 && presetText.length >= 19) || (value1 == 2 && presetText.length >= 22)) {
		calcFlg = 0;
		var str = presetText.charAt(pos++);
		var charLenTmp = 0;
		index = UrlToNum(str);
		if (index > 60) {
			str = presetText.charAt(pos++);
			index += UrlToNum(str);
			charLenTmp++;
		}
		document.getElementById(nameValue[value1]).selectedIndex = index;
		kaizouArray[value1][0] = index;
		Type_Set(value1, nameUpdate[nameCalc[value1]]);
		var slotNumTmp = slotNum;
		if (presetText.length < (22 + charLenTmp)) slotNumTmp = 6;
		for (var i = 1; i <= slotNumTmp; i++) {
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + '_slot' + i).selectedIndex = index;
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + '_type' + i).selectedIndex = index;
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + '_lv' + i).selectedIndex = index;
			Type_Slot_Set(value1, i - 1);
		}
		if (value1 == 2) {
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + '_niku').selectedIndex = index;
			if (presetText.length >= (23 + charLenTmp)) {
				index = UrlToNum(presetText.charAt(pos++));
				document.getElementById(nameValue[value1] + '_bodytokusei1').selectedIndex = index;
			}
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + '_bodytokusei2').selectedIndex = index;
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + '_bodytokusei3').selectedIndex = index;
		}
		calcFlg = 1;
		Type_Calc(value1);
	} else {
		for (var i = 1; i <= slotNum; i++) {
			document.getElementById(nameValue[value1] + '_slot' + i).selectedIndex = 0;
			if (i == slotNum) {
				calcFlg = 1;
			} else {
				calcFlg = 0;
			}
			Type_Slot_Set(value1, i - 1);
		}
	}
	
	Select_Reload();
}

function Lv_Set(value1) {
	var index = document.getElementById(nameValue[value1] + '_lv' + 1).selectedIndex;
	for (var i = 2; i <= slotNum; i++) {
		document.getElementById(nameValue[value1] + '_lv' + i).selectedIndex = index;
		if (i == slotNum) {
			calcFlg = 1;
		} else {
			calcFlg = 0;
		}
		Type_Slot_Set(value1, i - 1);
	}
}

function Shokika_Set(value1) {
	for (var i = 1; i <= slotNum; i++) {
		document.getElementById(nameValue[value1] + '_slot' + i).selectedIndex = 0;
		if (i == slotNum) {
			calcFlg = 1;
		} else {
			calcFlg = 0;
		}
		Type_Slot_Set(value1, i - 1);
	}
}

function Shikou_Set(value, parts) {
	// 第2引数が指定されていたらパーツ単品のみセットする
	if (Number.isInteger(parts)) {
		for (var i = 1; i <= slotNum; i++) {
			kaizouArray[parts][2 + (i - 1) * 3] = value;
		}
	} else {
		for (var i = 0; i < nameValue.length; i++) {
			if (kaizouSelect[nameCalc[i]][0].length != 0) {
				for (var j = 1; j <= slotNum; j++) {
					kaizouArray[i][2 + (j - 1) * 3] = value;
				}
			}
		}
	}
	for (var i = 0; i < nameValue.length; i++) {
		Type_CalcArray(i, 0);
		UrlCalc(i);
	}
	All_Calc();
	UrlView(0);

	// 全パーツにセットする場合はモーターを選択状態にする
	Menu_Click(Number.isInteger(parts) ? parts : 0);
}

function Parts_Out(value1) {
	document.getElementById(nameValue[value1]).selectedIndex = 0;
	Type_Set(value1, nameUpdate[nameCalc[value1]]);
	Select_Reload();
}

function Get_Storage(category, key) {
	var container = localStorage.getItem("simulator");
	if (!container) {
		return;
	}
	try {
		return JSON.parse(container)[category][key];
	} catch (e) {
		return;
	}
}

function Set_Storage(category, key, value) {
	var container = localStorage.getItem("simulator") || "{}";
	container = JSON.parse(container);
	if (!container[category]) {
		container[category] = {};
	}
	container[category][key] = value;
	localStorage.setItem("simulator", JSON.stringify(container));
}

// パーツ選択UIの初期化
function Select_Set() {
	if (partsSelector) {
		partsSelector.remove();
	}
	partsSelector = tail.select("select.parts", {
		animate: false,
		openAbove: false,
		width: "100%",
		locale: "ja",
		search: true,
		searchMinLength: 0,
	});
}

// パーツ選択UIを再読み込み(プリセット装着時など用)
function Select_Reload() {
	partsSelector.reload();
}
