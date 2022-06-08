var oldselectArray;

var calcFlg = 0;
var resultFlg = 0;
var selectMenuIndex = 0;

function View_Set(value1) {
	var writeValue = "";
	if (value1 == 0) {
		writeValue += "<table class='cstable'><tr><td>全パーツ <input type='button' value='至高の逸品' onclick='Shikou_Set(2)'>　<input type='button' value='職人技' onclick='Shikou_Set(1)'>　<input type='button' value='イイ感じ' onclick='Shikou_Set(0)'> </td>";
		writeValue += "<td class='cstd'>　</td><td>全覚醒 <input type='button' value='初期化' onclick='Awake_Init()'></td></tr></table><br>";
	}
	writeValue += "<a name='link" + value1 + "'></a><table class='cstable'><tr><td>" + nameView[value1];
	writeValue += "<span id='id_" + nameValue[value1] + "'></span></td>";
	if (value1 == 2) {
		writeValue += "<td class='cstd'></td>";
		writeValue += "<td>肉抜き <select id='" + nameValue[value1] + "_niku' onchange='Type_Calc(" + value1 + ")'>";
		writeValue += "<option value=0>なし</option>";
		for (var j = 1; j <= 4; j++) {
			writeValue += "<option value=" + j + ">" + j + "箇所</option>";
		}
		writeValue += "</td>";
	}
	if (nameZero[nameCalc[value1]] == 1) {
		writeValue += "<td class='cstd'></td>";
		writeValue += "<td>パーツ <input type='button' value='外す' onclick='Parts_Out(" + value1 + ")'></td>";
	}
	writeValue += "</tr><tr>";

	if (value1 == 2) {
		writeValue += "</tr></table>";
		writeValue += "</tr></table><table class='cstable'><tr><td class='cstd'>　</td>";
		writeValue += "<td>メイン特性 <select id='" + nameValue[value1] + "_bodytokusei1' onchange='Type_Calc(" + value1 + ")'>";
		for (var i = 0; i < selectOption.length; i++) {
			writeValue += "<option value=" + i + ">" + selectOption[i] + "</option>";
		}
		writeValue += "</select></td><td>アシスト特性 <select id='" + nameValue[value1] + "_bodytokusei2' onchange='Type_Calc(" + value1 + ")'>";
		for (var i = 0; i < selectOption.length; i++) {
			writeValue += "<option value=" + i + ">" + selectOption[i] + "</option>";
		}
		writeValue += "</select></td><td>アシスト特性 <select id='" + nameValue[value1] + "_bodytokusei3' onchange='Type_Calc(" + value1 + ")'>";
		for (var i = 0; i < selectOption.length; i++) {
			writeValue += "<option value=" + i + ">" + selectOption[i] + "</option>";
		}
		writeValue += "</select></td>";
	}
	//覚醒
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		writeValue += "</tr></table><table class='cstable'>";
		for (var i = 1; i <= 2; i++) {
			writeValue += "<tr><td class='cstd'>　</td><td class='awtd'>覚醒" + i + " <span id='id_" + nameValue[value1] + "_awake" + i + "'></span>　強化Lv ";
			writeValue += "<select id='" + nameValue[value1] + "_awakelv" + i + "' onchange='Type_Calc(" + value1 + ")'>";
			for (var j = 1; j < 10; j++) {
				writeValue += "<option value=" + j + ">" + j + "</option>";
			}
			writeValue += "<option value=" + 10 + " selected>" + 10 + "</option></select>";
			writeValue += "　発動 <span id='id_" + nameValue[value1] + "_awakenum" + i + "'></span></td></tr>";
		}
	}

	writeValue += "</table><table class='cstable'><tr><td class='cstd'>　</td>";
	for (var i = 0; i < typeSelect[nameCalc[value1]].length; i++) {
		if (i > 0 && i % 5 == 0) {
			writeValue += "</tr><tr><td class='cstd'>　</td>";
		}
		if (typeSelect[nameCalc[value1]][i] >= 0) {
			writeValue += "<td>" + typeView[typeSelect[nameCalc[value1]][i]] + "<input class='csinput' type='text' id='" + nameValue[value1] + "_" + typeValue[typeSelect[nameCalc[value1]][i]] + "' value=''><br>改造後 <input class='csinput' type='text' id='" + nameValue[value1] + "_" + typeValue[typeSelect[nameCalc[value1]][i]] + "_kaisv' value=''></td>";
		} else {
			writeValue += "<td>" + addTypeView[-typeSelect[nameCalc[value1]][i]] + "<input class='csinput' type='text' id='" + nameValue[value1] + "_" + addTypeValue[-typeSelect[nameCalc[value1]][i]] + "' value=''><br>改造後 <input class='csinput' type='text' id='" + nameValue[value1] + "_" + addTypeValue[-typeSelect[nameCalc[value1]][i]] + "_kaisv' value=''></td>";
		}
	}
	writeValue += "</tr></table>";
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		writeValue += "<table class='cstable'><tr><td class='cstd'>　</td><td>テンプレ改造 ";
		writeValue += "<span id='id_" + nameValue[value1] + "_tenpure'></span>";
		writeValue += "<td class='cstd'></td>";
		writeValue += "<td>改造 <input type='button' value='初期化' onclick='Shokika_Set(" + value1 + ")'> </td>";
		writeValue += "</td><td class='cstd'></td>";
		writeValue += "<td>パーツプリセット <input class='csinput_p' type='text' id='" + nameValue[value1] + "_pres' value=''> <input type='button' value='装着' onclick='Preset_Set(" + value1 + ")'> </td>";
		writeValue += "</tr></table><table class='cstable'>";
		for (var i = 1; i <= slotNum; i++) {
			writeValue += "<tr><td class='cstd'>　</td><td>スロット" + i + " ";
			writeValue += "<span id='id_" + nameValue[value1] + "_slot" + i + "'></span><br>";
			if (i == 1) {
				writeValue += " <input type='button' value='Lv一括' onclick='Lv_Set(" + value1 + ")'>　";
			}
			writeValue += "<select id='" + nameValue[value1] + "_type" + i + "' onchange='Type_Calc(" + value1 + ")'>";
			writeValue += "<option value=2>イイ感じ</option><option value=3>職人技</option><option value=4 selected>至高の逸品</option></select>　強化Lv ";
			writeValue += "<select id='" + nameValue[value1] + "_lv" + i + "' onchange='Type_Calc(" + value1 + ")'>";
			for (var j = 1; j < 50; j++) {
				writeValue += "<option value=" + j + ">" + j + "</option>";
			}
			writeValue += "<option value=" + 50 + " selected>" + 50 + "</option></select></td>";
			for (var j = 1; j <= 3; j++) {
				writeValue += "<td><span id='id_" + nameValue[value1] + "_slot" + i + "_" + j + "'></span><br><input class='csinput' type='text' id='" + nameValue[value1] + "_slot" + i + "_" + j +"' value=''></td>";
			}
			writeValue += "</tr>";
		}
		writeValue += "</table>";
	}
	oldselectArray = -1;
	document.getElementById("bmain").innerHTML = writeValue;
}

function Type_Init(value1) {
	var innerValue = "<select id='" + nameValue[value1] + "' onchange='Type_Set(" + value1 + ", " + nameUpdate[nameCalc[value1]] + ")'>";
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
				innerValue = "<select id='" + nameValue[value1] + "_slot" + i + "' onchange='Type_Slot_Set(" + value1 + ", " +  (i - 1) + ")'>";
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
				innerValue = "<select class='select_t' id='" + nameValue[value1] + "_tenpure' onchange='Type_Tenpre_Set(" + value1 + ")'>";
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
			innerValue = "<select id='" + nameValue[value1] + "_awakeskill" + i + "' onchange='Awake_Set(" + value1 + ", " + i + ")'>";
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

function Menu_Init(value1) {
	window.parent.menus.document.getElementById("id_menu" + value1 + "_back").innerHTML = "<img class='csimgback' src='asset/img/imgback.png'>";
}

function Menu_Click(value1) {
	var oldIndex = window.parent.menus.document.getElementById("menu_oldselect").value;
	//window.parent.menus.document.getElementById("id_menu" + oldIndex + "_back").innerHTML = "<img class='csimgback' src='asset/img/imgback.png'>";
	//window.parent.menus.document.getElementById("id_menu" + value1 + "_back").innerHTML = "<img class='csimgback' src='asset/img/imgselect.png'>";
	window.parent.menus.document.getElementById("menu_oldselect").value = value1;
	var oldImg = "";
	if (selectValue[nameCalc[oldIndex]][kaizouArray[oldIndex][0]][3] >= 1) {
		oldImg = "l";
	}
	var newImg = "";
	if (selectValue[nameCalc[value1]][kaizouArray[value1][0]][3] >= 1) {
		newImg = "l";
	}
	window.parent.menus.document.getElementById("id_menu" + oldIndex + "_back").innerHTML = "<img class='csimgback' src='asset/img/imgback" + oldImg + ".png'>";
	window.parent.menus.document.getElementById("id_menu" + value1 + "_back").innerHTML = "<img class='csimgback' src='asset/img/imgselect" + newImg + ".png'>";
	selectMenuIndex = value1;
	calcFlg = 0;
	resultFlg = 0;
	View_Set(value1);
	Type_Init(value1);
	document.getElementById(nameValue[value1]).selectedIndex =  kaizouArray[value1][0];
	Type_Set(value1, 1);
	for (var i = 0; i < typeSelect[nameCalc[value1]].length; i++) {
		if (typeSelect[nameCalc[value1]][i] >= 0) {
			document.getElementById(nameValue[value1] + '_' + typeValue[typeSelect[nameCalc[value1]][i]] + "_kaisv").value = statusArray[value1][typeSelect[nameCalc[value1]][i]];
		} else {
			document.getElementById(nameValue[value1] + '_' + addTypeValue[-typeSelect[nameCalc[value1]][i]] + "_kaisv").value = selectValue[nameCalc[value1]][kaizouArray[value1][0]][-typeSelect[nameCalc[value1]][i]];
		}
	}
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		for (var i = 1; i <= slotNum; i++) {
			document.getElementById(nameValue[value1] + '_slot' + i).selectedIndex = kaizouArray[value1][1 + (i - 1) * 3];
			document.getElementById(nameValue[value1] + '_type' + i).selectedIndex = kaizouArray[value1][2 + (i - 1) * 3];
			document.getElementById(nameValue[value1] + '_lv' + i).selectedIndex = kaizouArray[value1][3 + (i - 1) * 3];
			Type_Slot_Set(value1, i - 1);
			for (var j = 0; j < 3; j++) {
				document.getElementById(nameValue[value1] + "_slot" + i + "_" + (j + 1)).value = kaizouArrayUnit[value1][j + (i - 1) * 3];
			}
		}
		var awakeoffset = 22;
		if (value1 == 2) {
			document.getElementById(nameValue[value1] + '_niku').selectedIndex = kaizouArray[value1][22];
			for (var i = 1; i <= 3; i++) {
				document.getElementById(nameValue[value1] + '_bodytokusei' + i).selectedIndex = kaizouArray[value1][22 + i];
			}
			awakeoffset = 26;
		}
		//覚醒
		for (var i = 1; i <= 2; i++) {
			document.getElementById(nameValue[value1] + '_awakeskill' + i).selectedIndex = kaizouArray[value1][awakeoffset + (i - 1) * 3];
			document.getElementById(nameValue[value1] + '_awakelv' + i).selectedIndex = kaizouArray[value1][awakeoffset + 1 + (i - 1) * 3];
			Awake_Set(value1, i);
			document.getElementById(nameValue[value1] + '_awakenum' + i).selectedIndex = kaizouArray[value1][awakeoffset + 2 + (i - 1) * 3];
		}

		document.getElementById(nameValue[value1] + "_pres").value = urlArray[value1];
	}
	calcFlg = 1;
	resultFlg = 1;
}

function Menu_Set(value1) {
	var index = kaizouArray[value1][0];
	var imgName = "set";
	if (index == 0 && nameZero[nameCalc[value1]] == 1) {
		imgName = "";
	} else {
		if (kaizouSelect[nameCalc[value1]][0].length != 0) {
			var slotNumTmp = 6;
			if (kaizouArray[value1][1 + 6 * 3] != 0) {
				imgName += "7";
				slotNumTmp = 7;
			}
			var kaizouMax = "";
			for (var i = 0; i < slotNumTmp; i++) {
				if (kaizouArray[value1][1 + i * 3] == 0 || kaizouArray[value1][3 + i * 3] != 49) {
					kaizouMax = "x";
					break;
				}
			}
			imgName += kaizouMax;
		} else {
			imgName += "x";
		}
	}
	var imgNo = nameCalc[value1];
	if ((value1 >= 25 && value1 <= 32) || value1 == 36) {
		imgNo = 13;
	}
	window.parent.menus.document.getElementById("id_menu" + value1 + "_img").innerHTML = "<img class='csimg' src='asset/img/img" + imgNo + imgName + ".png' onclick='Menu_Click(" + value1 + ")'>";
	var partsName = "";
	if (imgName != "") {
		partsName = selectValue[nameCalc[value1]][index][0];
	}
	window.parent.menus.document.getElementById("id_menu" + value1 + "_text").innerHTML = partsName;
	var newImg = "";
	if (selectValue[nameCalc[value1]][index][3] >= 1) {
		newImg = "l";
	}
	var selectImg = "back";
	if (selectMenuIndex == value1) {
		selectImg = "select";
	}
	window.parent.menus.document.getElementById("id_menu" + value1 + "_back").innerHTML = "<img class='csimgback' src='asset/img/img" + selectImg + newImg + ".png'>";
}

function All_Set() {
	for (var i = 0; i < nameValue.length; i++) {
		statusArray[i] = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //36
		statusArrayInit[i] = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //36
		if (kaizouSelect[nameCalc[i]][0].length != 0) {
			if (i == 2) {
				kaizouArray[i] = new Array(0, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 0, 0, 0, 9, 0, 0, 9, 0);
			} else {
				kaizouArray[i] = new Array(0, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 2, 49, 0, 9, 0, 0, 9, 0);
			}
			kaizouArrayUnit[i] = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
		} else {
			kaizouArray[i] = new Array(0, 0);
		}
	}
	urlArray = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""); //36
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
	var disp1 = window.parent.results.document.getElementById('disp1').checked;
	var result = Result_Calc(disp1);
	for (var i = 1; i < typeValue.length; i++) {
		window.parent.results.document.getElementById(typeValue[i]).value = result.value[i];
		window.parent.results.document.getElementById(typeValue[i] + "_kaisv").value = result.valueKaiSv[i];
		var rate = result.value[i] == 0 ? 0 : result.valueKaiSv[i] / result.value[i] * 100.0 - 100.0;
		window.parent.results.document.getElementById(typeValue[i] + "_rate").value = rate;
	}
	var shindantire = 1;
	var shindantirekei = 0;
	if (window.parent.diagnosis.document.getElementById('shindantire2').checked) {
		shindantire = 2;
		shindantirekei = window.parent.diagnosis.document.getElementById('shindantirekei').selectedIndex;
	}
	//覚醒
	var awakecalc = 1;
	if (window.parent.diagnosis.document.getElementById('awakecalc2').checked) {
		awakecalc = 2;
	}
	var lanenum = 3;
	if (window.parent.diagnosis.document.getElementById('lanenum5').checked) {
		lanenum = 5;
	}
	var sectionnum = window.parent.diagnosis.document.getElementById('sectionnum').selectedIndex + 1;

	var diagnosis = Diagnosis_Calc(result.valueKaiSv, shindantire, shindantirekei, awakecalc, lanenum, sectionnum);
	for (var key in diagnosis) {
		window.parent.diagnosis.document.getElementById(key).value = diagnosis[key];
	}
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
		var calcValue = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //36
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
		var calcValueSv = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //36
		var calcValueSvInit = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //36
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
		var awakeoffset = 22;
		if (value1 == 2) {
			if (viewFlg != 0) {
				kaizouArray[value1][22] = document.getElementById(nameValue[value1] + '_niku').selectedIndex;
				for (var i = 1; i <= 3; i++) {
					kaizouArray[value1][22 + i] = document.getElementById(nameValue[value1] + '_bodytokusei' + i).selectedIndex;
				}
			}
			var nikuVal = kaizouArray[value1][22];
			calcValueSv[5] -= nikuVal * calcValueSvInit[5] * 0.02;
			awakeoffset = 26;
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
		//覚醒
		if (viewFlg != 0) {
			for (var i = 1; i <= 2; i++) {
				kaizouArray[value1][awakeoffset + (i - 1) * 3] = document.getElementById(nameValue[value1] + '_awakeskill' + i).selectedIndex;
				kaizouArray[value1][awakeoffset + 1 + (i - 1) * 3] = document.getElementById(nameValue[value1] + '_awakelv' + i).selectedIndex;
				kaizouArray[value1][awakeoffset + 2 + (i - 1) * 3] = document.getElementById(nameValue[value1] + '_awakenum' + i).selectedIndex;
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
	if (window.parent.results.document.getElementById('history2').checked) {
		historyValue = "b";
	}
	var url = window.parent.document.location.href;
	var start = url.indexOf("?", 0);
	var base = url;
	if (start != -1) base = url.substring(0, start);

	var tmp = base.split("/");
	var filename = tmp[tmp.length-1];
	tmp.pop();
	base = tmp.join("/") + "/";

	var search = "?" + urlValue + historyValue;
	var url = base + filename + search;
	var v2url = base + "v2/" + filename + search;

	window.parent.results.document.getElementById('linkurl').href = url;
	window.parent.results.document.getElementById('dispurl').value = url;
	window.parent.document.getElementById('v2url').href = v2url;
	if (historyValue == "b" || value1 == 1) {
		window.parent.history.replaceState("", "", search);
	}
}

function UrlSet() {
	var url = window.parent.document.location.href;
	var start = url.indexOf("?", 0);
	if (start != -1) {
		var presetText = url.substring(start + 1);
		var index = 0;
		var pos = 0;
		if (presetText.length >= ((1 + 3 * 6) * (nameValue.length - 5) + 5 + 3)) { //19x29+5+3=559 19x30+4+3=577 19x30+4+4=578 22x30+4+4=668 22x31+4+3=689 22x32+4+3=711 28x32+4+3=903 28x33+4+3=931 28x34+4+3=959
			var indexEnd = UrlToNum(presetText.charAt(presetText.length - 1));
			var charLenTmp = 0;
			for (var value1 = 0; value1 < nameValue.length; value1++) {
				var str = presetText.charAt(pos++);
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
					var awakeoffset = 22;
					if (value1 == 2) {
						index = UrlToNum(presetText.charAt(pos++));
						kaizouArray[value1][22] = index;
						if (presetText.length != (559 + charLenTmp) && presetText.length != (577 + charLenTmp)) {
							index = UrlToNum(presetText.charAt(pos++));
							if (index > 60) {
								index += UrlToNum(presetText.charAt(pos++));
								charLenTmp++;
							}
							kaizouArray[value1][23] = index;
						}
						index = UrlToNum(presetText.charAt(pos++));
						if (index > 60) {
							index += UrlToNum(presetText.charAt(pos++));
							charLenTmp++;
						}
						kaizouArray[value1][24] = index;
						index = UrlToNum(presetText.charAt(pos++));
						if (index > 60) {
							index += UrlToNum(presetText.charAt(pos++));
							charLenTmp++;
						}
						kaizouArray[value1][25] = index;
						awakeoffset = 26;
					}
					if ((value1 == 32 && presetText.length <= (669 + charLenTmp)) || (value1 == 34 && presetText.length <= (690 + charLenTmp)) || (value1 == 35 && presetText.length <= (904 + charLenTmp)) || (value1 == 36 && presetText.length <= (932 + charLenTmp))) {
						kaizouArray[value1][0] = 0;
						for (var i = 1; i <= slotNumTmp; i++) {
							kaizouArray[value1][1 + (i - 1) * 3] = 0;
							kaizouArray[value1][2 + (i - 1) * 3] = 2;
							kaizouArray[value1][3 + (i - 1) * 3] = 49;
						}
					}
					//覚醒
					if (presetText.length >= (904 + charLenTmp)) {
						for (var i = 1; i <= 2; i++) {
							index = UrlToNum(presetText.charAt(pos++));
							kaizouArray[value1][awakeoffset + (i - 1) * 3] = index;
							index = UrlToNum(presetText.charAt(pos++));
							kaizouArray[value1][awakeoffset + 1 + (i - 1) * 3] = index;
							index = UrlToNum(presetText.charAt(pos++));
							kaizouArray[value1][awakeoffset + 2 + (i - 1) * 3] = index;
						}
					}
				}
			}
			index = UrlToNum(presetText.charAt(pos++));
			if (index == 1 || indexEnd == 1) {
				window.parent.results.document.getElementById('history2').checked = true;
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
		var awakeoffset = 22;
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
			awakeoffset = 26;
		}
		//覚醒
		for (var i = 1; i <= 2; i++) {
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + '_awakeskill' + i).selectedIndex = index;
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + '_awakelv' + i).selectedIndex = index;
			Awake_Set(value1, i);
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + '_awakenum' + i).selectedIndex = index;
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

function Shikou_Set(value0) {
	for (var i = 0; i < nameValue.length; i++) {
		if (kaizouSelect[nameCalc[i]][0].length != 0) {
			for (var j = 1; j <= slotNum; j++) {
				kaizouArray[i][2 + (j - 1) * 3] = value0;
			}
		}
	}
	for (var i = 0; i < nameValue.length; i++) {
		Type_CalcArray(i, 0);
		UrlCalc(i);
	}
	All_Calc();
	UrlView(0);
	Menu_Click(0);
}

function Awake_Init() {
	for (var i = 0; i < nameValue.length; i++) {
		if (kaizouSelect[nameCalc[i]][0].length != 0) {
			var awakeoffset = 22;
			if (i == 2) {
				awakeoffset = 26;
			}
			for (var j = 1; j <= 2; j++) {
				kaizouArray[i][awakeoffset + (j - 1) * 3] = 0;
				kaizouArray[i][awakeoffset + 1 + (j - 1) * 3] = 9;
				kaizouArray[i][awakeoffset + 2 + (j - 1) * 3] = 0;
			}
		}
	}
	for (var i = 0; i < nameValue.length; i++) {
		UrlCalc(i);
	}
	UrlView(0);
	Menu_Click(0);
	Type_Calc(0);
}

function Parts_Out(value1) {
	document.getElementById(nameValue[value1]).selectedIndex = 0;
	Type_Set(value1, nameUpdate[nameCalc[value1]]);
}
