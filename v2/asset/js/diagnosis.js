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
	writeValue += "</tr><tr><td colspan='4'>t秒後最高速度(仮)(時速) <div id='chart'></div></td></tr></table><table class='cstable'><tr class='specs'>";
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
			'<span class="tooltip-point-value">{point.y} km/h</span></div>',
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

function Lock_Line() {
	chartValues.speedDecrement.lock = chartValues.speedDecrement.current.concat();
	Update_Chart();
}

function Update_Chart() {
	chart.update({
		xAxis: {
			categories: chartValues.speedDecrement.time
		},
		series: [{
			data: chartValues.speedDecrement.current
		}, {
			data: chartValues.speedDecrement.lock
		}]
	});
}
