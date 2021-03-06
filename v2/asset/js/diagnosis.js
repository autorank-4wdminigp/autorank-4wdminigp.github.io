﻿function View_Diagnosis() {
	var diagnosisValue = window.diagnosisValue;
	var diagnosisView = window.diagnosisView;
	var writeValue = "<table class='cstable'><tr>";
	for (var i = 0; i < diagnosisValue.length; i++) {
		if (i > 0 && i % 4 == 0) {
			writeValue += "</tr><tr>";
		}
		writeValue += "<td>" + diagnosisView[i] + "<input class='csinput' type='text' id='" + diagnosisValue[i] + "' value=''></td>";
	}
	writeValue += "</tr></table><table class='cstable'><tr class='specs'>";
	writeValue += "<td><input class='csinput1' type='radio' id='shindantire1' name='shindantire' onchange='All_Calc()' checked>マシン診断　";
	writeValue += "<input class='csinput1' type='radio' id='shindantire2' name='shindantire' onchange='All_Calc()'>タイヤ径差表示　";
	writeValue += "<select id='shindantirekei' onchange='All_Calc()'>";
	for (var j = 0; j <= 8; j++) {
		writeValue += "<option value=" + j + ">" + j + "</option>";
	}
	writeValue += "</select></td></tr></table>";
	writeValue += "<br><font color='#FFA500'>※3 誤差少しあり(電池消耗、速度が遅い場合のジャンプ角度低下、ブレーキが強い場合のウイリー未実装)</font>";
	writeValue += "<br><font color='#FFA500'>※4 ほぼ解明((重心ありやスラスト角ありは誤差少しあり)</font>";
	writeValue += "<br><font color='#FFA500'>※5 誤差あり(電池消耗、速度が遅い場合のジャンプ角度低下、ブレーキが強い場合のウイリー未実装)</font>";
	writeValue += "<br><font color='#FFA500'>※6 情報提供感謝します</font>";
	document.getElementById("diagnosis-main").innerHTML = writeValue;
}
