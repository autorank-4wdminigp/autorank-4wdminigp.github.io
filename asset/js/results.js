﻿var typeValue = new Array("", "speed", "power", "corner", "stamina", "weight", "gearfuka", "powerloss", "speedloss", "aerodf", "setsuden", "seishin", "thrust", "tiremasatsu", "tiresenkai", "tirehanpatsu", "tirekei", "rollermasatsu", "rollerteikou", "wave", "offload", "gearrate", "ampere", "brake", "stabilizer", "digital", "taifuu", "taisui", "curvestamina", "jumpstamina", "tread", "wheelbase", "rollerwidth", "rollerbase", "tiresenkaidown", "cornerdown", "staminadown", "antilandspeed", "motergravity", "batterygravity", "taiyuki", "taiyukibrake", "setsudendown", "total");
var typeView = new Array("", "スピード ", "パワー ", "コーナー安定 ", "スタミナ耐久 ", "重さ ", "ギヤ負荷 ", "パワーロス ", "スピードロス ", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ ", "節電 ", "制振 ", "スラスト角 ", "タイヤ摩擦 ", "タイヤ旋回 ", "タイヤ反発 ", "タイヤ径 ", "ローラー摩擦 ", "ローラー抵抗 ", "ウェーブ ", "オフロード ", "ギヤ比 ", "消費電流 ", "ブレーキ減速 ", "スタビ減速 ", "デジタル ", "耐風 ", "耐水 ", "耐カーブ ", "耐ジャンプ ", "トレッド ", "ﾎｲｰﾙﾍﾞｰｽ ", "ローラー幅 ", "ﾛｰﾗｰﾍﾞｰｽ ", "ﾀｲﾔ旋回ﾀﾞｳﾝ ", "ｺｰﾅｰ安定ﾀﾞｳﾝ ", "ｽﾀﾐﾅ耐久ﾀﾞｳﾝ ", "着地減速抑制 ", "モーター重心 ", "バッテリー重心 ", "耐雪 ", "耐ﾌﾞﾚｰｷ改善(雪) ", "節電ダウン ", "総合評価 ");

function All_Calc() {
	window.parent.mains.All_Calc();
}
function UrlView(value1) {
	window.parent.mains.UrlView(value1);
}

function View_Result() {
	//var typeValue = window.parent.mains.typeValue;
	//var typeView = window.parent.mains.typeView;
	var writeValue = "<table class='cstable'><tr>";
	writeValue += "<td><input class='csinput1' type='radio' id='disp1' name='disp' onchange='All_Calc()'>旧アプリ表示　";
	writeValue += "<input class='csinput1' type='radio' id='disp2' name='disp' onchange='All_Calc()' checked>標準アクセサリー適用表示　</td>";
	writeValue += "</tr></table><table class='cstable'><tr><td class='cstd'>　</td>";
	for (var i = 1; i < typeValue.length; i++) {
		if (i > 1 && (i - 1) % 5 == 0) {
			writeValue += "</tr><tr><td class='cstd'>　</td>";
		}
		writeValue += "<td>" + typeView[i] + "<input class='csinput' type='text' id='" + typeValue[i] + "' value=''><br>改造後 <input class='csinput' type='text' id='" + typeValue[i] + "_kaisv' value=''><br>改造比率[%] <input class='csinput' type='text' id='" + typeValue[i] + "_rate' value=''></td>";
	}
	writeValue += "</tr></table>";
	writeValue += "<br><table class='cstable'><tr><td>プリセットURL管理　<input class='csinput1' type='radio' id='history1' name='history' onchange='UrlView(1)' checked>手動　";
	writeValue += "<input class='csinput1' type='radio' id='history2' name='history' onchange='UrlView(0)'>自動適用　</td></tr></table>";
	writeValue += "<br><a href='' id='linkurl' target='_blank' rel='noopener'>プリセットURL</a>";
	writeValue += "<table class='cstable'><tr><td class='cstd'>　</td><td><input class='csinput2' type='text' id='dispurl' value=''></td></tr></table>";
	document.getElementById("bmain").innerHTML = writeValue;
}
