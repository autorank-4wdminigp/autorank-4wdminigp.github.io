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
	writeValue += "</tr><tr><td colspan='4'>t秒後最高速度(仮)(時速)<font color='#FFA500'>※7※8</font><div id='chart'></div></td></tr></table><table class='cstable'><tr class='specs'>";
	writeValue += "<td><input class='csinput1' type='radio' id='shindantire1' name='shindantire' onchange='All_Calc()' checked>マシン診断　";
	writeValue += "<input class='csinput1' type='radio' id='shindantire2' name='shindantire' onchange='All_Calc()'>タイヤ径差表示　";
	writeValue += "<select id='shindantirekei' onchange='All_Calc()'>";
	for (var j = 0; j <= 8; j++) {
		writeValue += "<option value=" + j + ">" + j + "</option>";
	}
	writeValue += "</select></td>";
	//覚醒
	writeValue += "<td><input class='csinput1' type='radio' id='awakecalc1' name='awakecalc' onchange='All_Calc()'>覚醒オン　";
	writeValue += "<input class='csinput1' type='radio' id='awakecalc2' name='awakecalc' onchange='All_Calc()' checked>オフ　</td>";

	writeValue += "<td><input class='csinput1' type='radio' id='lanenum3' name='lanenum' onchange='All_Calc()' checked>3レーン　";
	writeValue += "<input class='csinput1' type='radio' id='lanenum5' name='lanenum' onchange='All_Calc()'>5レーン　</td>";

	writeValue += "<td>連続セクション数　<select id='sectionnum' onchange='All_Calc()'>";
	for (var j = 1; j <= 20; j++) {
		writeValue += "<option value=" + j + ">" + j + "</option>";
	}
	writeValue += "</select></td>";

	writeValue += "</tr></table>";
	writeValue += "<br><font color='#FFA500'>※2 誤差あり</font>";
	writeValue += "<br><font color='#FFA500'>※3 誤差あり(電池消耗未実装)</font>";
	writeValue += "<br><font color='#FFA500'>※4 ほぼ解明((重心ありやスラスト角ありは誤差少しあり)</font>";
	writeValue += "<br><font color='#FFA500'>※5 誤差あり(電池消耗未実装)</font>";
	writeValue += "<br><font color='#FFA500'>※6 情報提供感謝します</font>";
	writeValue += "<br><font color='#FFA500'>※7 ロックを押すと表示中の線を固定して他のセットとの比較が可能です。既にロック中の線がある場合は古い方を破棄します。</font>";
	writeValue += "<br><font color='#FFA500'>※8 ツールチップ中の括弧内数値は、初速を最高速として各時刻まで直線を無負荷走行した距離の近似値です。</font>";
	document.getElementById("diagnosis-main").innerHTML = writeValue;
	View_Chart();
}

var chart;

function View_Chart() {
	chart = Highcharts.chart('chart', {
		title: {
			text: undefined
		},
		chart: {
			type: 'line',
			backgroundColor: 'black'
		},
		colors: ['#ffa500', '#D00000'],
		xAxis: {
			title: {
				text: '経過時間[s]',
				style: {
					color: 'white'
				}
			},
			labels: {
				style: {
					color: 'white'
				}
			},
			crosshair: true
		},
		yAxis: {
			title: {
				text: '最高速度[km/h]',
				style: {
					color: 'white'
				}
			},
			labels: {
				style: {
					color: 'white'
				}
			}
		},
		series: [{
			name: '現在のセット',
		}, {
			name: 'ロック中'
		}],
		plotOptions: {
			series: {
				keys: ['y', 'distance']
			}
		},
		legend: {
			enabled: false
		},
		tooltip: {
			shared: true,
			useHTML: true,
			backgroundColor: 'rgba(0,0,0,0.75)',
			headerFormat: '<div class="tooltip-title">{point.key} s</div>',
			pointFormat:'<div class="tooltip-points">' +
			'<span class="tooltip-series-name" style="color: {series.color}">{series.name}: </span>' +
			'<span class="tooltip-point-value">{point.y} km/h ({point.distance} m)</span></div>',
			valueDecimals: 3
		},
		responsive: {},
		credits: {
			enabled: false
		}
	}, function (chart) {
		chart.renderer.button('ロック', 5, 265).on('click', Lock_Line).add();
	});	
}

let csd = chartValues.speedDecrement;

function Lock_Line() {
	csd.lock = csd.current.concat();
	Update_Chart();
}

function Update_Chart() {
	chart.update({
		xAxis: {
			categories: csd.time
		},
		series: [{
			data: csd.current
		}, {
			data: csd.lock
		}]
	});
}
