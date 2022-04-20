var diagnosisValue = new Array("dia0speed_h", "dia1speed_s", "dia2battery", "dia3accele", "dia4arrivaltime", "dia5tiregrip", "dia6cornerdecele", "dia7jump", "dia8boundtime", "dia9gravity", "dia10rollerangle", "dia11weight", "dia12brake", "dia13rollermasatsu", "dia14rollerteikou", "dia15kuuten_h", "dia16taifuu_h", "dia17offload_h", "dia18offloaddirt_h", "dia19taisuikuuten_h", "dia20cornerspeed_h", "dia21raincornerspeed_h", "dia22arrivaltime95", "dia23time100m", "dia24stamina", "dia25staminascore", "dia26time25m", "dia27time50m", "dia28ampere", "dia29speed25dec", "dia30speed10s", "dia31speed20s", "dia32cornerin", "dia33cornerdecele", "dia34cornerdecele", "dia35cornerdecele", "dia36offroad", "dia38wave", "dia39digital", "dia40taifuu", "dia41aerodf", "dia42taisui");
var diagnosisView = new Array("最高速度(時速) ", "最高速度(秒速) ", "バッテリー消費量<font color='#FFA500'>※2</font> ", "加速度(毎秒) ", "最高速到達時間(秒)<font color='#FFA500'>※6</font> ", "タイヤグリップ ", "コーナー減速率(仮)<font color='#FFA500'>※4</font> ", "ジャンプ飛距離(仮)<font color='#FFA500'>※3</font> ", "バウンド時間(仮)<font color='#FFA500'>※5</font> ", "前後の重心 ", "ローラースラスト角 ", "重さ ", "ブレーキ性能 ", "有効ローラー摩擦 ", "有効ローラー抵抗 ", "空転目安(時速) ", "耐風最高速(時速) ", "芝最高速(時速) ", "ダート最高速(時速) ", "耐水空転目安(時速) ", "ｺｰﾅｰｵﾊﾞｽﾋﾟ目安(仮)(時速) ", "雨ｺｰﾅｰｵﾊﾞｽﾋﾟ目安(仮)(時速) ", "最高速95%到達時間(秒) ", "100m走(仮)(秒) ", "ﾃﾞｼﾞﾀﾙｶｰﾌﾞ耐久目安 ", "ﾃﾞｼﾞﾀﾙｶｰﾌﾞ耐久ｽｺｱ(仮) ", "25m走(仮)(秒) ", "50m走(仮)(秒) ", "消費電流量(仮)(毎秒)<font color='#FFA500'>※6</font> ", "最高速25%減少時間(仮)(秒) ", "10秒後最高速度(仮)(時速) ", "20秒後最高速度(仮)(時速) ", "コーナー安定(進入)目安 ", "最内側減速率(仮) ", "最外側減速率(仮) ", "ﾚｰｽでのｺｰﾅｰ減速率(仮) ", "オフロード ", "ウェーブ ", "デジタル ", "耐風 ", "エアロダウンフォース ", "耐水 ");

function All_Calc() {
	window.parent.mains.All_Calc();
}

function View_Diagnosis() {
	//var diagnosisValue = window.parent.mains.diagnosisValue;
	//var diagnosisView = window.parent.mains.diagnosisView;
	var writeValue = "<table class='cstable'><tr>";
	writeValue += "<td><input class='csinput1' type='radio' id='shindantire1' name='shindantire' onchange='All_Calc()' checked>マシン診断　";
	writeValue += "<input class='csinput1' type='radio' id='shindantire2' name='shindantire' onchange='All_Calc()'>タイヤ径差表示　";
	writeValue += "<select id='shindantirekei' onchange='All_Calc()'>";
	for (var j = 0; j <= 8; j++) {
		writeValue += "<option value=" + j + ">" + j + "</option>";
	}
	writeValue += "</select></td>";
	//覚醒
	writeValue += "<td class='cstd'></td>";
	writeValue += "<td><input class='csinput1' type='radio' id='awakecalc1' name='awakecalc' onchange='All_Calc()'>覚醒オン　";
	writeValue += "<input class='csinput1' type='radio' id='awakecalc2' name='awakecalc' onchange='All_Calc()' checked>オフ　</td>";

	writeValue += "<td class='cstd'></td>";
	writeValue += "<td><input class='csinput1' type='radio' id='lanenum3' name='lanenum' onchange='All_Calc()' checked>3レーン　";
	writeValue += "<input class='csinput1' type='radio' id='lanenum5' name='lanenum' onchange='All_Calc()'>5レーン　</td>";

	writeValue += "<td class='cstd'></td>";
	writeValue += "<td>連続セクション数　<select id='sectionnum' onchange='All_Calc()'>";
	for (var j = 1; j <= 20; j++) {
		writeValue += "<option value=" + j + ">" + j + "</option>";
	}
	writeValue += "</select></td>";

	writeValue += "</tr></table><table class='cstable'><tr><td class='cstd'>　</td>";
	for (var i = 0; i < diagnosisValue.length; i++) {
		if (i > 0 && i % 4 == 0) {
			writeValue += "</tr><tr><td class='cstd'>　</td>";
		}
		writeValue += "<td>" + diagnosisView[i] + "<input class='csinput' type='text' id='" + diagnosisValue[i] + "' value=''></td>";
	}
	writeValue += "</tr></table>";
	writeValue += "<br><font color='#FFA500'>※2 誤差あり</font>";
	writeValue += "<br><font color='#FFA500'>※3 誤差あり(電池消耗未実装)</font>";
	writeValue += "<br><font color='#FFA500'>※4 ほぼ解明(重心ありやスラスト角ありは誤差少しあり)</font>";
	writeValue += "<br><font color='#FFA500'>※5 誤差あり(電池消耗未実装)</font>";
	writeValue += "<br><font color='#FFA500'>※6 情報提供感謝します</font>";
	document.getElementById("bmain").innerHTML = writeValue;
}
