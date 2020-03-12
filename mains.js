//0:ギヤ, 1:モーター, 2:ボディ, 3:シャーシ
var nameValue = new Array("moter", "gear", "body", "chassis");
var nameView = new Array("モーター ", "ギヤ ", "ボディ ", "シャーシ ");
var nameUpdate = new Array(1, 0, 0, 0);

var typeValue = new Array("", "speed", "power", "corner", "stamina", "weight", "gearfuka", "powerloss", "speedloss", "aero", "setsuden", "seishin", "thrust", "tiremasatsu", "tiresenkai", "rollermasatsu", "rollerteikou");
var typeView = new Array("", "スピード ", "パワー ", "コーナー安定 ", "スタミナ耐久 ", "重さ ", "ギヤ負荷 ", "パワーロス ", "スピードロス ", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ ", "節電 ", "制振 ", "スラスト角 ", "タイヤ摩擦 ", "タイヤ旋回 ", "ローラー摩擦 ", "ローラー抵抗 ");

var s;
var typeSelect = new Array();
typeSelect[0] = new Array(1, 2, 3, 4, 5, 6);
typeSelect[1] = new Array(1, 2, 3, 4, 5, 6, 7);
typeSelect[2] = new Array(1, 2, 3, 4, 5, 9, 10);
typeSelect[3] = new Array(1, 2, 3, 4, 5, 6, 11, 12);

var kaizouSelect = new Array();
s = 0;
kaizouSelect[0] = new Array();
kaizouSelect[0][s++] = new Array(0, 1, 4, 5, 6, 9);
kaizouSelect[0][s++] = new Array(0, 1, 4, 5, 6, 9);
kaizouSelect[0][s++] = new Array(0, 1, 2, 4, 5, 7, 10 ,11);
kaizouSelect[0][s++] = new Array(0, 1, 3, 4, 6, 8, 10 ,11);
kaizouSelect[0][s++] = new Array(0, 1, 4, 5, 6, 9);
s = 0;
kaizouSelect[1] = new Array();
kaizouSelect[1][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[1][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[1][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[1][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[1][s++] = new Array(0, 1, 2, 3, 4);
s = 0;
kaizouSelect[2] = new Array();
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
s = 0;
kaizouSelect[3] = new Array();
kaizouSelect[3][s++] = new Array(0, 1, 2, 3, 4, 5, 6 ,7);
kaizouSelect[3][s++] = new Array(0, 1, 2, 3, 4, 5, 6 ,7);
kaizouSelect[3][s++] = new Array(0, 1, 2, 3, 4, 5, 6 ,7);
kaizouSelect[3][s++] = new Array(0, 1, 2, 3, 4, 5, 6 ,7);
kaizouSelect[3][s++] = new Array(0, 1, 2, 3, 4, 5, 6 ,7);
kaizouSelect[3][s++] = new Array(0, 1, 2, 3, 4, 5, 6 ,7);
kaizouSelect[3][s++] = new Array(0, 1, 2, 3, 4, 5, 6 ,7);
kaizouSelect[3][s++] = new Array(0, 1, 2, 3, 4, 5, 6 ,7);
kaizouSelect[3][s++] = new Array(0, 1, 2, 3, 4, 5, 6 ,7);


//タイプ 1:スピード, 2:パワー, 3:コーナー安定, 4:スタミナ耐久, 5:重さ, 6:ギヤ負荷, 7:パワーロス, 8:スピードロス, 9:エアロダウンフォース, 10:節電
//11:制振, 12:スラスト角, 13:タイヤ摩擦, 14:タイヤ旋回, 15:ローラー摩擦, 16:ローラー抵抗
var selectValue = new Array();
s = 0;
selectValue[0] = new Array();
selectValue[0][s++] = new Array("FA-130タイプノーマル", 1380.0, 495.0, 0.0, 0.0, 1.7, 1000.0);
selectValue[0][s++] = new Array("ハイパーミニ", 1460.0, 730.0, 0.0, 0.0, 1.7, 1500.0);
selectValue[0][s++] = new Array("トルクチューン", 1430.0, 1268.0, 0.0, 0.0, 1.7, 1500.0);
selectValue[0][s++] = new Array("レブチューン", 1740.0, 747.0, 0.0, 0.0, 1.7, 1500.0);
selectValue[0][s++] = new Array("ハイパーダッシュ", 1900.0, 1583.0, 0.0, 0.0, 1.7, 1500.0);
s = 0;
selectValue[1] = new Array();
selectValue[1][s++] = new Array("5:1 標準ギヤ", 0.0, 20.0, 0.0, 0.2, 1.0, 1000.0, 400.0);
selectValue[1][s++] = new Array("4.2:1 高速ギヤ", 5.0, 15.0, 0.0, 0.2, 1.0, 1000.0, 400.0);
selectValue[1][s++] = new Array("4:1 ハイスピードギヤ", 10.0, 10.0, 0.0, 0.2, 1.0, 1000.0, 400.0);
selectValue[1][s++] = new Array("4:1 スーパーカウンターギヤ", 10.0, 10.0, 0.0, 0.4, 1.5, 900.0, 350.0);
selectValue[1][s++] = new Array("3.5:1 超速ギヤ", 20.0, 0.0, 0.0, 0.4, 1.5, 850.0, 350.0);
s = 0;
selectValue[2] = new Array();
selectValue[2][s++] = new Array("パックマンボディ", 20.0, 0.0, 4.5, 0.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("スーパードラゴンSDP", 20.0, 0.0, 4.5, 0.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ホーネットJr.(棚橋SP)", 20.0, 0.0, 4.5, 0.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ブーメラン・10", 20.0, 0.0, 4.5, 0.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("アバンテJr.", 7.0, 4.0, 10.5, 5.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("セイントドラゴンJr.", 2.0, 2.0, 18.0, 20.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("マグナムセイバー", 20.0, 0.0, 4.5, 0.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ソニックセイバー", 7.0, 4.0, 10.5, 5.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("スピンアックス", 7.0, 4.0, 10.5, 0.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("トライダガーX", 20.0, 0.0, 4.5, 0.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ビークスパイダー", 7.0, 4.0, 10.5, 0.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ブラックセイバー", 2.0, 2.0, 18.0, 20.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ブロッケンギガント", 2.0, 2.0, 18.0, 20.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("プロトセイバーJB", 2.0, 2.0, 18.0, 20.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("シャイニングスコーピオン", 20.0, 0.0, 1.2, 0.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ビクトリーマグナム", 20.0, 1.0, 4.5, 0.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("バンガードソニック", 7.0, 5.0, 10.5, 5.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
s = 0;
selectValue[3] = new Array();
selectValue[3][s++] = new Array("スーパー1シャーシ", 10.0, 10.0, 9.12, 10.8, 15.8, 800.0, 0.0, 0.0, 0.0, 0.0, 100.0, 8.0);
selectValue[3][s++] = new Array("スーパー1強化シャーシ", 11.0, 10.0, 9.6, 25.0, 15.8, 800.0, 0.0, 0.0, 0.0, 0.0, 100.0, 8.0);
selectValue[3][s++] = new Array("ゼロシャーシ", 15.0, 5.0, 8.76, 13.5, 15.1, 850.0, 0.0, 0.0, 0.0, 0.0, 100.0, 5.0);
selectValue[3][s++] = new Array("タイプ1シャーシ", 2.0, 18.0, 8.4, 18.0, 18.8, 1000.0, 0.0, 0.0, 0.0, 0.0, 100.0, 1.0);
selectValue[3][s++] = new Array("タイプ1シャーシ(イベント)", 2.0, 18.0, 7.92, 18.0, 18.8, 1000.0, 0.0, 0.0, 0.0, 0.0, 100.0, 1.0);
selectValue[3][s++] = new Array("タイプ2シャーシ", 20.0, 0.0, 8.16, 14.4, 17.7, 950.0, 0.0, 0.0, 0.0, 0.0, 100.0, 1.0);
selectValue[3][s++] = new Array("タイプ3シャーシ", 4.0, 16.0, 7.68, 16.2, 18.6, 930.0, 0.0, 0.0, 0.0, 0.0, 100.0, 1.0);
selectValue[3][s++] = new Array("FMシャーシ", 9.0, 11.0, 8.52, 12.6, 18.0, 900.0, 0.0, 0.0, 0.0, 0.0, 100.0, 5.0);
selectValue[3][s++] = new Array("スーパーFMシャーシ", 12.0, 8.0, 9.12, 13.8, 17.8, 800.0, 0.0, 0.0, 0.0, 0.0, 100.0, 8.0);



//2:イイ感じ, 3:職人技, 4:至高の逸品, 5:強化, 6:固定フラグ, 7:タイプ
var kaizouValue = new Array();
kaizouValue[0] = new Array();
kaizouValue[0][0] = new Array();
kaizouValue[0][0][0] = new Array("慣らし走行 [1]", "ギヤ負荷〇〇〇〇 [8] ", -0.08, -0.096, -0.112, -0.004, -1, 6);
kaizouValue[0][0][1] = new Array("", "パワー〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 2);
kaizouValue[0][1] = new Array();
kaizouValue[0][1][0] = new Array("ピニオンギヤの固定", "ギヤ負荷〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 6);
kaizouValue[0][1][1] = new Array("", "パワー〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 2);
kaizouValue[0][2] = new Array();
kaizouValue[0][2][0] = new Array("ブレークイン(トルク重視) ", "パワー〇〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 2);
kaizouValue[0][3] = new Array();
kaizouValue[0][3][0] = new Array("ブレークイン(回転数重視) ", "スピード〇〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 1);
kaizouValue[0][4] = new Array();
kaizouValue[0][4][0] = new Array("ブレークイン(バランス重視)", "スピード〇 [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 1);
kaizouValue[0][4][1] = new Array("", "パワー〇 [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 2);
kaizouValue[0][5] = new Array();
kaizouValue[0][5][0] = new Array("3Vブレークイン(トルク重視) [4]", "パワー〇〇〇 [3] ", 0.03, 0.036, 0.042, 0.0015, -1, 2);
kaizouValue[0][6] = new Array();
kaizouValue[0][6][0] = new Array("3Vブレークイン(回転数重視) [4]", "スピード〇〇〇 [3] ", 0.03, 0.036, 0.042, 0.0015, -1, 1);
kaizouValue[0][7] = new Array();
kaizouValue[0][7][0] = new Array("3Vブレークイン(バランス重視[トルク]) [2]", "スピード〇 [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 1);
kaizouValue[0][7][1] = new Array("", "パワー〇〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 2);
kaizouValue[0][8] = new Array();
kaizouValue[0][8][0] = new Array("3Vブレークイン(バランス重視[レブ]) [2]", "スピード〇〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 1);
kaizouValue[0][8][1] = new Array("", "パワー〇 [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 2);
kaizouValue[0][9] = new Array();
kaizouValue[0][9][0] = new Array("3Vブレークイン(バランス重視) [2]", "スピード〇〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 1);
kaizouValue[0][9][1] = new Array("", "パワー〇〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 2);
kaizouValue[0][10] = new Array();
kaizouValue[0][10][0] = new Array("冷却ブレークイン(トルク重視) [2]", "パワー〇〇〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 2);
kaizouValue[0][11] = new Array();
kaizouValue[0][11][0] = new Array("冷却ブレークイン(回転数重視) [2]", "スピード〇〇〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 1);

kaizouValue[1] = new Array();
kaizouValue[1][0] = new Array();
kaizouValue[1][0][0] = new Array("ギヤメンテ", "ギヤ負荷〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 6);
kaizouValue[1][0][1] = new Array("", "パワー〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 2);
kaizouValue[1][1] = new Array();
kaizouValue[1][1][0] = new Array("ギヤ慣らし", "パワーロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 7);
kaizouValue[1][1][1] = new Array("", "パワー〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 2);
kaizouValue[1][2] = new Array();
kaizouValue[1][2][0] = new Array("ギヤ研磨 [4]", "ギヤ負荷〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 6);
kaizouValue[1][2][1] = new Array("", "パワー〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 2);
kaizouValue[1][3] = new Array();
kaizouValue[1][3][0] = new Array("ギヤフローティング加工 [2]", "ギヤ負荷〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 6);
kaizouValue[1][3][1] = new Array("", "パワー〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 2);
kaizouValue[1][4] = new Array();
kaizouValue[1][4][0] = new Array("ギヤ位置の固定 [2]", "パワーロス〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 7);
kaizouValue[1][4][1] = new Array("", "パワー〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 2);

kaizouValue[2] = new Array();
kaizouValue[2][0] = new Array();
kaizouValue[2][0][0] = new Array("軽量化", "重さ〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 5);
kaizouValue[2][0][1] = new Array("", "スピード〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 1);
kaizouValue[2][1] = new Array();
kaizouValue[2][1][0] = new Array("ｴｱﾛﾀﾞｳﾝﾌｫｰｽ増加 [4]", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ〇 [5] ", 0.05, 0.06, 0.07, 0.0025, -1, 9);
kaizouValue[2][1][1] = new Array("", "コーナー安定〇 [5(固定)] ", 1.0, 1.2, 1.4, 0.0025, 20, 3);
kaizouValue[2][2] = new Array();
kaizouValue[2][2][0] = new Array("ｴｱﾛﾀﾞｳﾝﾌｫｰｽ減少 [4]", "スピード〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 1);
kaizouValue[2][2][1] = new Array("", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ× [5] ", -0.05, -0.06, -0.07, -0.0025, -1, 9);
kaizouValue[2][3] = new Array();
kaizouValue[2][3][0] = new Array("冷却能力向上 [4]", "節電〇 [5] ", 50, 60, 70, 0.0025, 1000, 10);
kaizouValue[2][3][1] = new Array("", "スピード〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 1);
kaizouValue[2][4] = new Array();
kaizouValue[2][4][0] = new Array("限界軽量化 [2]", "重さ〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 5);
kaizouValue[2][4][1] = new Array("", "スピード〇 [1(固定)] ", 1.0, 1.0, 1.0, 0.0005, 100, 1);
kaizouValue[2][4][2] = new Array("", "スタミナ耐久× [1] ", -0.01, -0.012, -0.014, -0.0005, -1, 4);

kaizouValue[3] = new Array();
kaizouValue[3][0] = new Array();
kaizouValue[3][0][0] = new Array("グリスアップ", "ギヤ負荷〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 6);
kaizouValue[3][0][1] = new Array("", "パワー〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 2);
kaizouValue[3][1] = new Array();
kaizouValue[3][1][0] = new Array("軽量化", "重さ〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 5);
kaizouValue[3][1][1] = new Array("", "スピード〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 1);
kaizouValue[3][2] = new Array();
kaizouValue[3][2][0] = new Array("限界軽量化 [2]", "重さ〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 5);
kaizouValue[3][2][1] = new Array("", "スピード〇 [1(固定)] ", 1.0, 1.0, 1.0, 0.0005, 100, 1);
kaizouValue[3][2][2] = new Array("", "スタミナ耐久× [1] ", -0.01, -0.012, -0.014, -0.0005, -1, 4);
kaizouValue[3][3] = new Array();
kaizouValue[3][3][0] = new Array("電池落とし", "コーナー安定〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 3);
kaizouValue[3][4] = new Array();
kaizouValue[3][4][0] = new Array("剛性補強 [4]", "スタミナ耐久〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 5);
kaizouValue[3][4][1] = new Array("", "重さ× [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 5);
kaizouValue[3][5] = new Array();
kaizouValue[3][5][0] = new Array("ギヤ位置の調整 [2]", "ギヤ負荷〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 6);
kaizouValue[3][5][1] = new Array("", "パワー〇 [1(固定)] ", 1.0, 1.2, 1.4, 0.0005, 100, 2);
kaizouValue[3][6] = new Array();
kaizouValue[3][6][0] = new Array("制震対策 [4]", "制震〇 [5] ", 0.05, 0.06, 0.07, 0.0025, -1, 11);
kaizouValue[3][6][1] = new Array("", "コーナー安定〇 [5(固定)] ", 1.0, 1.2, 1.4, 0.0025, 20, 3);
kaizouValue[3][7] = new Array();
kaizouValue[3][7][0] = new Array("超制震対策 [2]", "制震〇〇〇 [10] ", 0.1, 0.12, 0.14, 0.005, -1, 11);
kaizouValue[3][7][1] = new Array("", "コーナー安定〇 [10(固定)] ", 1.0, 1.0, 1.0, 0.005, 10, 3);
kaizouValue[3][7][2] = new Array("", "スタミナ耐久× [1] ", -0.01, -0.012, -0.014, -0.0005, -1, 4);


function View_Set(value1) {
	document.write("<table class='cstable'>");
	document.write("<tr>");
	document.write("<td>" + nameView[value1]);
	document.write("<span id='id_" + nameValue[value1] + "'></span>");
	document.write("</td>");
	document.write("</tr>");
	document.write("</table>");
	document.write("<table class='cstable'>");
	document.write("<tr>");
	document.write("<td class='cstd'>　</td>");
	for (var i = 0; i < typeSelect[value1].length; i++) {
		if (i == 5 || i == 10 || i == 15) {
			document.write("</tr>");
			document.write("<tr>");
			document.write("<td class='cstd'>　</td>");
		}
		document.write("<td>" + typeView[typeSelect[value1][i]] + "<input type='text' name='" + nameValue[value1] + "_" + typeValue[typeSelect[value1][i]] + "' value=''><br>改造後 <input type='text' name='" + nameValue[value1] + "_" + typeValue[typeSelect[value1][i]] + "_kai' value=''></td>");
	}
	document.write("</tr>");
	document.write("</table>");

	document.write("<table class='cstable'>");
	for (var i = 1; i <= 6; i++) {
		document.write("<tr>");
		document.write("<td class='cstd'>　</td>");
		document.write("<td>スロット" + i + " ");
		document.write("<span id='id_" + nameValue[value1] + "_slot" + i + "'></span>");
		document.write("<br>");
		document.write("<select name='" + nameValue[value1] + "_type" + i + "' onchange='Type_Calc(" + value1 + ")'>");
		document.write("<option value=2>イイ感じ</option>");
		document.write("<option value=3>職人技</option>");
		document.write("<option value=4>至高の逸品</option>");
		document.write("</select>");
		document.write(" 強化Lv");
		document.write("<select name='" + nameValue[value1] + "_lv" + i + "' onchange='Type_Calc(" + value1 + ")'>");
		for (var j = 1; j <= 50; j++) {
			document.write("<option value=" + j + ">" + j + "</option>");
		}
		document.write("</select>");
		document.write("</td>");
		document.write("<td><span id='id_" + nameValue[value1] + "_slot" + i + "_1'></span><br><input type='text' name='" + nameValue[value1] + "_slot" + i + "_1' value=''></td>");
		document.write("<td><span id='id_" + nameValue[value1] + "_slot" + i + "_2'></span><br><input type='text' name='" + nameValue[value1] + "_slot" + i + "_2' value=''></td>");
		document.write("<td><span id='id_" + nameValue[value1] + "_slot" + i + "_3'></span><br><input type='text' name='" + nameValue[value1] + "_slot" + i + "_3' value=''></td>");
		document.write("</tr>");
	}
	document.write("</table>");
}

function All_Set() {
	for (var i = 0; i < nameValue.length; i++) {
		Type_Init(i);
		Type_Set(i, 1);
	}
}

function Type_Init(value1) {
	var innerValue = "<select name='" + nameValue[value1] + "' onchange='Type_Set(" + value1 + ", " + nameUpdate[value1] + ")'>";
	for (var i = 0; i < selectValue[value1].length; i++) {
		innerValue += "<option value=" + i + ">" + selectValue[value1][i][0] + "</option>";
	}
	document.getElementById("id_" + nameValue[value1]).innerHTML = innerValue + "</select>";
}

function Type_Set(value1, value2) {
	var index = document.getElementsByName(nameValue[value1])[0].value;
	if (value2 == 1) {
		var innerValue = "";
		for (var i = 1; i <= 6; i++) {
			innerValue = "<select name='" + nameValue[value1] + "_slot" + i + "' onchange='Type_Slot_Set(" + value1 + ", " +  (i - 1) + ")'>";
			innerValue += "<option value=-1 selected>改造選択</option>";
			for (var j = 0; j < kaizouSelect[value1][index].length; j++) {
				innerValue += "<option value=" + kaizouSelect[value1][index][j] + ">" + kaizouValue[value1][kaizouSelect[value1][index][j]][0][0] + "</option>";
			}
			document.getElementById("id_" + nameValue[value1] + "_slot" + i).innerHTML = innerValue + "</select>";
			for (var j = 0; j < 3; j++) {
				document.getElementById("id_" + nameValue[value1] + "_slot" + i + "_" + (j + 1)).innerHTML = "";
			}
		}
	}
	for (var i = 0; i < typeSelect[value1].length; i++) {
		document.getElementsByName(nameValue[value1] + '_' + typeValue[typeSelect[value1][i]])[0].value = selectValue[value1][index][typeSelect[value1][i]];
	}
	Type_Calc(value1);
}

function Type_Slot_Set(value1, value2) {
	var index = document.getElementsByName(nameValue[value1] + '_slot' + (value2 + 1))[0].value;
	for (var j = 0; j < 3; j++) {
		document.getElementById("id_" + nameValue[value1] + "_slot" + (value2 + 1) + "_" + (j + 1)).innerHTML = "";
	}
	if (index != -1) {
		for (var j = 0; j < kaizouValue[value1][index].length; j++) {
			document.getElementById("id_" + nameValue[value1] + "_slot" + (value2 + 1) + "_" + (j + 1)).innerHTML = kaizouValue[value1][index][j][1];
		}
	}
	Type_Calc(value1)
}

function Type_Calc(value1) {
	for (var i = 1; i <= 6; i++) {
		for (var j = 1; j <= 3; j++) {
			document.getElementsByName(nameValue[value1] + "_slot" + i + "_" + j)[0].value = "";
		}
	}
	var nameIndex = document.getElementsByName(nameValue[value1])[0].value;
	var calcValue = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
	for (var i = 1; i < selectValue[value1][nameIndex].length; i++) {
		calcValue[i] = selectValue[value1][nameIndex][i];
	}
	for (var i = 1; i <= 6; i++) {
		var slotIndex = document.getElementsByName(nameValue[value1] + '_slot' + i)[0].value;
		if (slotIndex == -1) continue;
		var typeVal = document.getElementsByName(nameValue[value1] + '_type' + i)[0].value;
		var lvVal = document.getElementsByName(nameValue[value1] + '_lv' + i)[0].value;
		for (var j = 0; j < kaizouValue[value1][slotIndex].length; j++) {
			var typeIndex = kaizouValue[value1][slotIndex][j][7];
			var kaizouVal = 0.0;
			if (kaizouValue[value1][slotIndex][j][6] == -1) {
				kaizouVal = selectValue[value1][nameIndex][typeIndex] * kaizouValue[value1][slotIndex][j][typeVal];
			} else {
				kaizouVal = kaizouValue[value1][slotIndex][j][typeVal];
			}
			var kyoukaVal = (calcValue[typeIndex] + kaizouVal) * kaizouValue[value1][slotIndex][j][5] * lvVal;
			document.getElementsByName(nameValue[value1] + "_slot" + i + "_" + (j + 1))[0].value = kaizouVal + kyoukaVal;
			calcValue[typeIndex] = calcValue[typeIndex] + kaizouVal + kyoukaVal;
			if (calcValue[typeIndex] < 0) calcValue[typeIndex] = 0;
		}
	}
	for (var i = 0; i < typeSelect[value1].length; i++) {
		document.getElementsByName(nameValue[value1] + "_" + typeValue[typeSelect[value1][i]] + "_kai")[0].value = calcValue[typeSelect[value1][i]];
	}
}

function View_Result() {
	document.write("<table class='cstable'>");
	document.write("<tr>");
	for (var i = 1; i < typeValue.length; i++) {
		if (i == 6 || i == 11 || i == 16) {
			document.write("</tr>");
			document.write("<tr>");
		}
		document.write("<td>" + typeView[i] + "<input type='text' name='" + typeValue[i] + "' value=''><br>改造後 <input type='text' name='" + typeValue[i] + "_kai' value=''></td>");
	}
	document.write("</tr>");
	document.write("</table>");
}

