function Menu_Click(value1) {
	window.parent.mains.Menu_Click(value1);
}

function View_Menus() {
	var menuValue = new Array();
	menuValue[0] = new Array(-1, 2, 0, 1);
	menuValue[1] = new Array(-1, -1, 3, -1);
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
				writeValue += "<a href='mains.html#' target='mains'><span id='id_menu" + menuValue[j][i] + "_img'></span><div class='csmenutext' onselectstart='return false;' onclick='Menu_Click(" + menuValue[j][i] + ")'><span id='id_menu" + menuValue[j][i] + "_text'></span></div></a></div></td>";
			} else {
				writeValue += "<td class='csmenutd'></td>";
			}
		}
		writeValue += "</tr>";
	}
	writeValue += "</table>";
	writeValue += "<input type='hidden' id='menu_oldselect' value='0'>";
	document.getElementById("bmain").innerHTML = writeValue;
}

