var selectMenuIndex = 0;

function View_Menus() {
	var menuValue = new Array();
	menuValue[0] = new Array(-1, 2, 0, 1);
	menuValue[1] = new Array(34, -1, 3, -1);
	menuValue[2] = new Array(4, 6, 5, 7);
	menuValue[3] = new Array(-1, 8, 9, 10);
	menuValue[4] = new Array(-1, 14, 15, 16);
	menuValue[5] = new Array(-1, 11, 12, 13);
	menuValue[6] = new Array(-1, -1, -1, 17);
	menuValue[7] = new Array(-1, -1, 19, 18);
	menuValue[8] = new Array(-1, 20, 21, 22);
	menuValue[9] = new Array(-1, 23, -1, 24);
	menuValue[10] = new Array(25, 26, 27, 28);
	menuValue[11] = new Array(29, 30, 31, 32);
	menuValue[12] = new Array(-1, -1, 33, -1);
	var writeValue = "<table class='csmenutable'>";
	for (var j = 0; j <= 12; j++) {
		writeValue += "<tr>";
		for (var i = 0; i < 4; i++) {
			if (menuValue[j][i] != -1) {
				writeValue += "<td class='csmenutd'><div class='csmenuimg'><span id='id_menu" + menuValue[j][i] + "_back'></span>";
				writeValue += "<span id='id_menu" + menuValue[j][i] + "_img'></span><div class='csmenutext' onselectstart='return false;' onclick='Menu_Click(" + menuValue[j][i] + ")'><span id='id_menu" + menuValue[j][i] + "_text'></span></div></div></td>";
			} else {
				writeValue += "<td class='csmenutd'></td>";
			}
		}
		writeValue += "</tr>";
	}
	writeValue += "</table>";
	writeValue += "<table class='cstable'><tr><td>全パーツ</td></tr><tr>";
	writeValue += "<td><input type='button' value='至高の逸品' onclick='Shikou_Set(2)'></td>";
	writeValue += "<td><input type='button' value='職人技' onclick='Shikou_Set(1)'></td>";
	writeValue += "<td><input type='button' value='イイ感じ' onclick='Shikou_Set(0)'></td>";
	writeValue += "</tr></table>";
	writeValue += "<table class='cstable'><tr><td>全覚醒 <input type='button' value='初期化' onclick='Awake_Init()'></td></tr></table>";
	writeValue += "<input type='hidden' id='menu_oldselect' value='0'>";
	document.getElementById("menus-main").innerHTML = writeValue;
}

function Menu_Init(value1) {
	document.getElementById("id_menu" + value1 + "_back").innerHTML = "<img class='csimgback' src='../asset/img/imgback.png'>";
}

function Menu_Click(value1) {
	var oldIndex = document.getElementById("menu_oldselect").value;
	//document.getElementById("id_menu" + oldIndex + "_back").innerHTML = "<img class='csimgback' src='../asset/img/imgback.png'>";
	//document.getElementById("id_menu" + value1 + "_back").innerHTML = "<img class='csimgback' src='../asset/img/imgselect.png'>";
	document.getElementById("menu_oldselect").value = value1;
	var oldImg = "";
	if (selectValue[nameCalc[oldIndex]][kaizouArray[oldIndex][0]][3] >= 1) {
		oldImg = "l";
	}
	var newImg = "";
	if (selectValue[nameCalc[value1]][kaizouArray[value1][0]][3] >= 1) {
		newImg = "l";
	}
	document.getElementById("id_menu" + oldIndex + "_back").innerHTML = "<img class='csimgback' src='../asset/img/imgback" + oldImg + ".png'>";
	document.getElementById("id_menu" + value1 + "_back").innerHTML = "<img class='csimgback' src='../asset/img/imgselect" + newImg + ".png'>";
	selectMenuIndex = value1;
	calcFlg = 0;
	resultFlg = 0;
	View_Set(value1);
	Type_Init(value1);
	document.getElementById(nameValue[value1]).selectedIndex =  kaizouArray[value1][0];
	Select_Set();
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
	if (value1 >= 25 && value1 <= 32) {
		imgNo = 13;
	}
	document.getElementById("id_menu" + value1 + "_img").innerHTML = "<img class='csimg' src='../asset/img/img" + imgNo + imgName + ".png' onclick='Menu_Click(" + value1 + ")'>";
	var partsName = "";
	if (imgName != "") {
		partsName = selectValue[nameCalc[value1]][index][0];
	}
	document.getElementById("id_menu" + value1 + "_text").innerHTML = partsName;
	var newImg = "";
	if (selectValue[nameCalc[value1]][index][3] >= 1) {
		newImg = "l";
	}
	var selectImg = "back";
	if (selectMenuIndex == value1) {
		selectImg = "select";
	}
	document.getElementById("id_menu" + value1 + "_back").innerHTML = "<img class='csimgback' src='../asset/img/img" + selectImg + newImg + ".png'>";
}