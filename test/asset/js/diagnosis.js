function View_Diagnosis() {
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
	writeValue += "<br><font color='#FFA500'>※3 参考値です(ブレーキは考慮せず、速いマシンの場合は表示より少し大きくなり、遅い場合は少し小さくなります)</font>";
	writeValue += "<br><font color='#FFA500'>※4 ほぼ解明(最適重心未実装)</font>";
	writeValue += "<br><font color='#FFA500'>※5 参考値です(2次多項式の重回帰分析による近似式)</font>";
	writeValue += "<br><font color='#FFA500'>※6 情報提供感謝します</font>";
	document.getElementById("diagnosis-main").innerHTML = writeValue;
}
