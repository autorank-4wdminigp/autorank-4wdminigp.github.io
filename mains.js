//0:モーター, 1:ギヤ, 2:ボディ, 3:シャーシ, 4:フロント・ホイール, 5:リヤ・ホイール, 6:フロント・タイヤ, 7:リヤ・タイヤ, 8:フロントステー, 9:サイドステー, 10:リヤステー, 11:フロント中・ローラー, 12:サイド中・ローラー, 13:リヤ中・ローラー, 14:フロント上・ローラー, 15:サイド上・ローラー, 16:リヤ上・ローラー, 17:リヤ下・ローラー, 18:ウイング・ローラー, 19:ボディオプション, 20:フロント・スタビライザー, 21:サイド・スタビライザー, 22:リヤ・スタビライザー, 23:フロント・ウェイト, 24:リヤ・ウェイト, 25:アクセサリー・ターミナル, 26:アクセサリー・モーターサポート, 27:アクセサリー・ピニオンギヤ, 28:アクセサリー・プロペラシャフト, 29:アクセサリー・軸受け, 30:アクセサリー・シャフト, 31:アクセサリー・ギヤシャフト, 32:アクセサリー・クラウンギヤ, 33:バッテリー
var nameValue = new Array("moter", "gear", "body", "chassis", "f_wheel", "r_wheel", "f_tire", "r_tire", "f_stator", "s_stator", "r_stator", "fm_roller", "sm_roller", "rm_roller", "ft_roller", "st_roller", "rt_roller", "rb_roller", "w_roller", "bodyoption", "f_stabilizer", "s_stabilizer", "r_stabilizer", "f_weight", "r_weight", "terminal", "msupport", "pgear", "pshaft", "bearing", "shaft", "gshaft", "cgear", "battery");
var nameView = new Array("モーター ", "ギヤ ", "ボディ ", "シャーシ ", "フロント・ホイール ", "リヤ・ホイール ", "フロント・タイヤ ", "リヤ・タイヤ ", "フロントステー ", "サイドステー ", "リヤステー ", "フロント中・ローラー ", "サイド中・ローラー ", "リヤ中・ローラー ", "フロント上・ローラー ", "サイド上・ローラー ", "リヤ上・ローラー ", "リヤ下・ローラー ", "ウイング・ローラー ", "ボディオプション ", "フロント・スタビライザー ", "サイド・スタビライザー ", "リヤ・スタビライザー ", "フロント・ウェイト ", "リヤ・ウェイト ", "アクセサリー・ターミナル ", "アクセサリー・モーターサポート ", "アクセサリー・ピニオンギヤ ", "アクセサリー・プロペラシャフト ", "アクセサリー・軸受け ", "アクセサリー・シャフト ", "アクセサリー・ギヤシャフト ", "アクセサリー・クラウンギヤ ", "バッテリー ");
//0:モーター, 1:ギヤ, 2:ボディ, 3:シャーシ, 4:ホイール, 5:タイヤ, 6:フロントステー, 7:サイドステー, 8:リヤステー, 9:ローラー, 10:ボディオプション, 11:スタビライザー, 12:ウェイト, 13:ターミナル, 14:モーターサポート, 15:ピニオンギヤ, 16:プロペラシャフト, 17:軸受け, 18:シャフト, 19:ギヤシャフト, 20:クラウンギヤ, 21:バッテリー
var nameCalc = new Array(0, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 11, 11, 11, 12, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21);

var typeValue = new Array("", "speed", "power", "corner", "stamina", "weight", "gearfuka", "powerloss", "speedloss", "aerodf", "setsuden", "seishin", "thrust", "tiremasatsu", "tiresenkai", "tirehanpatsu", "tirekei", "rollermasatsu", "rollerteikou", "wave", "offload", "gearrate", "ampere", "brake", "stabilizer", "digital", "taifuu", "taisui");
var typeView = new Array("", "スピード ", "パワー ", "コーナー安定 ", "スタミナ耐久 ", "重さ ", "ギヤ負荷 ", "パワーロス ", "スピードロス ", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ ", "節電 ", "制振 ", "スラスト角 ", "タイヤ摩擦 ", "タイヤ旋回 ", "タイヤ反発 ", "タイヤ径 ", "ローラー摩擦 ", "ローラー抵抗 ", "ウェーブ ", "オフロード ", "ギヤ比 ", "消費電流 ", "ブレーキ減速 ", "スタビ減速 ", "デジタル ", "耐風 ", "耐水 ");

var nameUpdate = new Array(1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var nameZero = new Array(0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

var diagnosisValue = new Array("dia0speed_h", "dia1speed_s", "dia2battery", "dia3accele", "dia4arrivaltime", "dia5tiregrip", "dia6cornerdecele", "dia7jump", "dia8boundtime", "dia9gravity", "dia10rollerangle", "dia11weight", "dia12brake", "dia13rollermasatsu", "dia14rollerteikou", "dia15kuuten_h", "dia16taifuu_h", "dia17offload_h", "dia18offloaddirt_h", "dia19taisuikuuten_h", "dia20cornerspeed_h", "dia21raincornerspeed_h", "dia22arrivaltime95", "dia23time100m");
var diagnosisView = new Array("最高速度(時速)<font color='#FFA500'>※1</font> ", "最高速度(秒速)<font color='#FFA500'>※1</font> ", "バッテリー消費量 ", "加速度(毎秒)<font color='#FFA500'>※1</font> ", "最高速到達時間(秒)<font color='#FFA500'>※6</font> ", "タイヤグリップ<font color='#FFA500'>※6</font> ", "コーナー減速率<font color='#FFA500'>※4</font> ", "ジャンプ飛距離<font color='#FFA500'>※2</font> ", "バウンド時間<font color='#FFA500'>※5</font> ", "前後の重心<font color='#FFA500'>※3</font> ", "ローラースラスト角 ", "重さ ", "ブレーキ性能 ", "有効ローラー摩擦 ", "有効ローラー抵抗 ", "空転目安(時速) ", "耐風最高速(時速) ", "芝最高速(時速) ", "ダート最高速(時速) ", "耐水空転目安(時速) ", "ｺｰﾅｰｵﾊﾞｽﾋﾟ目安(仮)(時速) ", "雨ｺｰﾅｰｵﾊﾞｽﾋﾟ目安(仮)(時速) ", "最高速95%到達時間(秒) ", "100m走(仮)(秒) ");

var slotNum = 7;

//タイプ 1:スピード, 2:パワー, 3:コーナー安定, 4:スタミナ耐久, 5:重さ, 6:ギヤ負荷, 7:パワーロス, 8:スピードロス, 9:エアロダウンフォース, 10:節電
//11:制振, 12:スラスト角, 13:タイヤ摩擦, 14:タイヤ旋回, 15:タイヤ反発, 16:タイヤ径, 17:ローラー摩擦, 18:ローラー抵抗, 19:ウェーブ, 20:オフロード
//21:ギヤ比, 22:消費電流, 23:ブレーキ減速, 24:スタビ減速, 25:デジタル, 26:耐風, 27:耐水
var s;
var typeSelect = new Array();
typeSelect[0] = new Array(1, 2, 3, 4, 5, 6, 22);
typeSelect[1] = new Array(1, 2, 3, 4, 5, 6, 7, 21);
typeSelect[2] = new Array(1, 2, 3, 4, 5, 9, 10);
typeSelect[3] = new Array(1, 2, 3, 4, 5, 6, 11, 12);
typeSelect[4] = new Array(1, 2, 3, 4, 5, 7, 8, 11, 19);
typeSelect[5] = new Array(1, 2, 3, 4, 5, 7, 8, 13, 14, 15, 16, 20, 27);
typeSelect[6] = new Array(1, 2, 3, 4, 5, 9, 12, 25, 26);
typeSelect[7] = new Array(1, 2, 3, 4, 5, 9);
typeSelect[8] = new Array(1, 2, 3, 4, 5, 9, 23);
typeSelect[9] = new Array(1, 2, 3, 4, 5, 9, 17, 18);
typeSelect[10] = new Array(1, 2, 3, 4, 5, 9, 25, 26);
typeSelect[11] = new Array(1, 2, 3, 4, 5, 24);
typeSelect[12] = new Array(1, 2, 3, 4, 5);
typeSelect[13] = new Array(1, 2, 3, 4, 5, 7, 10);
typeSelect[14] = new Array(1, 2, 3, 4, 5, 10);
typeSelect[15] = new Array(1, 2, 3, 4, 5, 6, 7);
typeSelect[16] = new Array(1, 2, 3, 4, 5, 6, 7);
typeSelect[17] = new Array(1, 2, 3, 4, 5, 8);
typeSelect[18] = new Array(1, 2, 3, 4, 5, 8);
typeSelect[19] = new Array(1, 2, 3, 4, 5, 6, 7);
typeSelect[20] = new Array(1, 2, 3, 4, 5, 6, 7);
typeSelect[21] = new Array(1, 2, 3, 4, 5);

var kaizouSelectIndex = new Array();
var kaizouSelect = new Array();
var kaizou7SelectIndex = new Array();
var kaizou7Select = new Array();
var kaizouTenpreSelect = new Array();
var kaizouTenpre = new Array();
s = 0;
kaizouSelectIndex[0] = new Array(0, 0, 1, 2, 0);
kaizouSelect[0] = new Array();
kaizouSelect[0][s++] = new Array(0, 1, 4, 5, 6, 9);
kaizouSelect[0][s++] = new Array(0, 1, 2, 4, 5, 7, 10 ,11);
kaizouSelect[0][s++] = new Array(0, 1, 3, 4, 6, 8, 10 ,11);
s = 0;
kaizou7SelectIndex[0] = new Array(0, 0, 0, 0, 0);
kaizou7Select[0] = new Array();
kaizou7Select[0][s++] = new Array(12, 13);
s = 0;
kaizouTenpreSelect[0] = new Array();
kaizouTenpreSelect[0][s++] = new Array(0, 1, 2);
kaizouTenpreSelect[0][s++] = new Array(3, 4, 5);
kaizouTenpreSelect[0][s++] = new Array(6, 7, 8);
kaizouTenpre[0] = new Array();
kaizouTenpre[0][0] = new Array("スピードx4 バランスx2", 5, 5, 5, 5, 6, 6);
kaizouTenpre[0][1] = new Array("スピードx4 パワーx2", 5, 5, 5, 5, 4, 4);
kaizouTenpre[0][2] = new Array("パワーx4 バランスx2", 4, 4, 4, 4, 6, 6);
kaizouTenpre[0][3] = new Array("スピードx2 バランスx4", 8, 8, 6, 6, 6, 6);
kaizouTenpre[0][4] = new Array("スピードx2 パワーx2 バランスx2", 8, 8, 7, 7, 6, 6);
kaizouTenpre[0][5] = new Array("パワーx6", 7, 7, 5, 5, 5, 5);
kaizouTenpre[0][6] = new Array("スピードx6", 8, 8, 5, 5, 5, 5);
kaizouTenpre[0][7] = new Array("スピードx5 パワーx1", 8, 8, 5, 5, 5, 7);
kaizouTenpre[0][8] = new Array("スピードx4 パワーx2", 8, 8, 5, 5, 7, 7);
s = 0;
kaizouSelectIndex[1] = new Array(0, 0);
kaizouSelect[1] = new Array();
kaizouSelect[1][s++] = new Array(0, 1, 2, 3, 4);
s = 0;
kaizou7SelectIndex[1] = new Array(0, 0);
kaizou7Select[1] = new Array();
kaizou7Select[1][s++] = new Array(5, 6);
s = 0;
kaizouTenpreSelect[1] = new Array();
kaizouTenpreSelect[1][s++] = new Array(0, 1, 2, 3);
kaizouTenpre[1] = new Array();
kaizouTenpre[1][0] = new Array("パワロスx4 ギヤ負荷x2", 5, 5, 2, 2, 4, 4);
kaizouTenpre[1][1] = new Array("パワロスx2 ギヤ負荷x4", 5, 5, 4, 4, 3, 3);
kaizouTenpre[1][2] = new Array("パワロスx6", 5, 5, 2, 2, 2, 2);
kaizouTenpre[1][3] = new Array("ギヤ負荷x6", 4, 4, 3, 3, 3, 3);
s = 0;
kaizouSelectIndex[2] = new Array(0, 0);
kaizouSelect[2] = new Array();
kaizouSelect[2][s++] = new Array(0, 1, 2, 3, 4);
s = 0;
kaizou7SelectIndex[2] = new Array(0, 0);
kaizou7Select[2] = new Array();
kaizou7Select[2][s++] = new Array(5, 6);
s = 0;
kaizouTenpreSelect[2] = new Array();
kaizouTenpreSelect[2][s++] = new Array(0, 1, 2);
kaizouTenpre[2] = new Array();
kaizouTenpre[2][0] = new Array("軽量x2 節電x4", 5, 5, 4, 4, 4, 4);
kaizouTenpre[2][1] = new Array("軽量x6", 5, 5, 1, 1, 1, 1);
kaizouTenpre[2][2] = new Array("軽量x2 エアロダウンフォース減少x4", 5, 5, 3, 3, 3, 3);
s = 0;
kaizouSelectIndex[3] = new Array(0, 0);
kaizouSelect[3] = new Array();
kaizouSelect[3][s++] = new Array(0, 1, 2, 3, 4, 5, 6 ,7, 8);
s = 0;
kaizou7SelectIndex[3] = new Array(0, 0);
kaizou7Select[3] = new Array();
kaizou7Select[3][s++] = new Array(9, 10);
s = 0;
kaizouTenpreSelect[3] = new Array();
kaizouTenpreSelect[3][s++] = new Array(0, 1, 2, 3, 4, 5, 6, 7);
kaizouTenpre[3] = new Array();
kaizouTenpre[3][0] = new Array("ギヤ負荷x6", 6, 6, 1, 1, 1, 1);
kaizouTenpre[3][1] = new Array("軽量x6", 3, 3, 2, 2, 2, 2);
kaizouTenpre[3][2] = new Array("軽量x4 ギヤ負荷x2", 3, 3, 2, 2, 6, 6);
kaizouTenpre[3][3] = new Array("軽量x2 ギヤ負荷x4", 3, 3, 6, 6, 1, 1);
kaizouTenpre[3][4] = new Array("制振x6", 8, 8, 7, 7, 7, 7);
kaizouTenpre[3][5] = new Array("制振x4 軽量x2", 8, 8, 7, 7, 3, 3);
kaizouTenpre[3][6] = new Array("軽量x2 ギヤ負荷x2 スラスト角の減少x2", 3, 3, 6, 6, 9, 9);
kaizouTenpre[3][7] = new Array("軽量x2 スラスト角の減少x4", 3, 3, 9, 9, 9, 9);
s = 0;
kaizouSelectIndex[4] = new Array(0, 1, 2, 2, 0, 1, 2, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 3, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 2, 2, 0, 1, 0, 1, 2, 3, 0, 1);
kaizouSelect[4] = new Array();
kaizouSelect[4][s++] = new Array(0, 2, 3, 4, 5, 6);
kaizouSelect[4][s++] = new Array(1, 2, 3, 4, 5, 6);
kaizouSelect[4][s++] = new Array(0, 2, 3, 4, 5, 6, 7);
kaizouSelect[4][s++] = new Array(1, 2, 3, 4, 5, 6, 7);
s = 0;
kaizou7SelectIndex[4] = new Array(0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 2, 0, 0);
kaizou7Select[4] = new Array();
kaizou7Select[4][s++] = new Array(8, 9);
kaizou7Select[4][s++] = new Array(10, 9);
kaizou7Select[4][s++] = new Array(8, 10, 9);
s = 0;
kaizouTenpreSelect[4] = new Array();
kaizouTenpreSelect[4][s++] = new Array(0, 1, 2);
kaizouTenpreSelect[4][s++] = new Array(0, 1, 2);
kaizouTenpreSelect[4][s++] = new Array(3, 1, 2);
kaizouTenpreSelect[4][s++] = new Array(3, 1, 2, 4);
kaizouTenpre[4] = new Array();
kaizouTenpre[4][0] = new Array("パワロスx6", 1, 1, 1, 1, 1, 1);
kaizouTenpre[4][1] = new Array("スピロスx6", 2, 2, 2, 2, 2, 2);
kaizouTenpre[4][2] = new Array("軽量x6", 4, 4, 3, 3, 3, 3);
kaizouTenpre[4][3] = new Array("パワロスx6", 7, 7, 7, 7, 1, 1);
kaizouTenpre[4][4] = new Array("パワロススピートx6", 1, 1, 1, 1, 1, 1);
s = 0;
kaizouSelectIndex[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0);
kaizouSelect[5] = new Array();
kaizouSelect[5][s++] = new Array(0, 1, 2, 3, 4, 5);
kaizouSelect[5][s++] = new Array(0, 1, 2, 3, 6);
s = 0;
kaizou7SelectIndex[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0);
kaizou7Select[5] = new Array();
kaizou7Select[5][s++] = new Array(7, 8);
kaizou7Select[5][s++] = new Array(9, 8);
s = 0;
kaizouTenpreSelect[5] = new Array();
kaizouTenpreSelect[5][s++] = new Array(0, 1, 2, 3, 4, 5);
kaizouTenpreSelect[5][s++] = new Array(6, 2, 3, 7, 8);
kaizouTenpre[5] = new Array();
kaizouTenpre[5][0] = new Array("摩擦x6", 5, 5, 2, 2, 2, 2);
kaizouTenpre[5][1] = new Array("摩擦x2 パワロスx4", 5, 5, 1, 1, 1, 1);
kaizouTenpre[5][2] = new Array("パワロスx6", 1, 1, 1, 1, 1, 1);
kaizouTenpre[5][3] = new Array("スピロスx4 パワロスx2 ", 4, 4, 4, 4, 1, 1);
kaizouTenpre[5][4] = new Array("スピロスx4 旋回x2 ", 4, 4, 4, 4, 6, 6);
kaizouTenpre[5][5] = new Array("旋回x6", 6, 6, 3, 3, 3, 3);
kaizouTenpre[5][6] = new Array("摩擦x4 パワロスx2", 2, 2, 2, 2, 1, 1);
kaizouTenpre[5][7] = new Array("摩擦x4 オフロードx2", 2, 2, 2, 2, 5, 5);
kaizouTenpre[5][8] = new Array("オフロードx2 パワロスx4", 5, 5, 1, 1, 1, 1);
s = 0;
kaizouSelectIndex[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 3, 0, 0, 0);
kaizouSelect[6] = new Array();
kaizouSelect[6][s++] = new Array(0, 1, 2, 3, 4, 6);
kaizouSelect[6][s++] = new Array(0, 1, 3, 4, 5, 6);
kaizouSelect[6][s++] = new Array(0, 3, 4, 6);
kaizouSelect[6][s++] = new Array(0, 3, 4, 6, 7);
s = 0;
kaizou7SelectIndex[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
kaizou7Select[6] = new Array();
kaizou7Select[6][s++] = new Array(8, 9);
kaizou7Select[6][s++] = new Array(8, 9, 10);
s = 0;
kaizouTenpreSelect[6] = new Array();
kaizouTenpreSelect[6][s++] = new Array(0, 1, 2);
kaizouTenpreSelect[6][s++] = new Array(3, 4);
kaizouTenpreSelect[6][s++] = new Array(5, 6);
kaizouTenpreSelect[6][s++] = new Array(5, 7);
kaizouTenpre[6] = new Array();
kaizouTenpre[6][0] = new Array("軽量x6", 3, 3, 2, 2, 2, 2);
kaizouTenpre[6][1] = new Array("耐久x6", 4, 4, 4, 4, 1, 1);
kaizouTenpre[6][2] = new Array("軽量x2 スラスト角の減少x4", 3, 3, 6, 6, 6, 6);
kaizouTenpre[6][3] = new Array("耐久x6", 5, 5, 5, 5, 3, 3);
kaizouTenpre[6][4] = new Array("軽量x4 スラスト角の減少x2", 2, 2, 2, 2, 6, 6);
kaizouTenpre[6][5] = new Array("耐久x6", 2, 2, 2, 2, 1, 1);
kaizouTenpre[6][6] = new Array("耐久x2 スラスト角の減少x4", 2, 2, 4, 4, 4, 4);
kaizouTenpre[6][7] = new Array("耐久x2 デジタルx4", 2, 2, 5, 5, 5, 5);
s = 0;
kaizouSelectIndex[7] = new Array(0, 0);
kaizouSelect[7] = new Array();
kaizouSelect[7][s++] = new Array(0, 1, 2, 3);
s = 0;
kaizou7SelectIndex[7] = new Array(0, 0);
kaizou7Select[7] = new Array();
kaizou7Select[7][s++] = new Array(4, 5);
s = 0;
kaizouTenpreSelect[7] = new Array();
kaizouTenpreSelect[7][s++] = new Array(0, 1);
kaizouTenpre[7] = new Array();
kaizouTenpre[7][0] = new Array("軽量x6", 3, 3, 2, 2, 2, 2);
kaizouTenpre[7][1] = new Array("耐久x6", 4, 4, 4, 4, 1, 1);
s = 0;
kaizouSelectIndex[8] = new Array(0, 1, 1, 0, 0, 0, 0, 1, 0);
kaizouSelect[8] = new Array();
kaizouSelect[8][s++] = new Array(0, 1, 2, 3);
kaizouSelect[8][s++] = new Array(0, 3);
s = 0;
kaizou7SelectIndex[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
kaizou7Select[8] = new Array();
kaizou7Select[8][s++] = new Array(4, 5, 6);
s = 0;
kaizouTenpreSelect[8] = new Array();
kaizouTenpreSelect[8][s++] = new Array(0, 1);
kaizouTenpreSelect[8][s++] = new Array(2, 2);
kaizouTenpre[8] = new Array();
kaizouTenpre[8][0] = new Array("軽量x6", 3, 3, 2, 2, 2, 2);
kaizouTenpre[8][1] = new Array("耐久x6", 4, 4, 4, 4, 1, 1);
kaizouTenpre[8][2] = new Array("耐久x6", 2, 2, 2, 2, 1, 1);
s = 0;
kaizouSelectIndex[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1);
kaizouSelect[9] = new Array();
kaizouSelect[9][s++] = new Array(0, 1, 2, 3, 4);
kaizouSelect[9][s++] = new Array(0, 1, 2, 3);
s = 0;
kaizou7SelectIndex[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1);
kaizou7Select[9] = new Array();
kaizou7Select[9][s++] = new Array(5, 6);
kaizou7Select[9][s++] = new Array(5, 6, 7);
s = 0;
kaizouTenpreSelect[9] = new Array();
kaizouTenpreSelect[9][s++] = new Array(0, 1, 2);
kaizouTenpreSelect[9][s++] = new Array(0, 1, 2);
kaizouTenpre[9] = new Array();
kaizouTenpre[9][0] = new Array("ローラー摩擦を弱めるx4 ローラー抵抗抜きx2", 3, 3, 3, 3, 4, 4);
kaizouTenpre[9][1] = new Array("ローラー摩擦を強めるx4 ローラー抵抗抜きx2", 2, 2, 2, 2, 4, 4);
kaizouTenpre[9][2] = new Array("ローラー摩擦を弱めるx4", 3, 3, 3, 3, 0, 0);
s = 0;
kaizouSelectIndex[10] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0);
kaizouSelect[10] = new Array();
kaizouSelect[10][s++] = new Array(0, 1, 2);
kaizouSelect[10][s++] = new Array(0, 1, 2, 3);
s = 0;
kaizou7SelectIndex[10] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0);
kaizou7Select[10] = new Array();
kaizou7Select[10][s++] = new Array(4, 5, 6);
kaizou7Select[10][s++] = new Array(4, 5, 7);
s = 0;
kaizouTenpreSelect[10] = new Array();
kaizouTenpreSelect[10][s++] = new Array(0, 1, 2);
kaizouTenpreSelect[10][s++] = new Array(0, 1, 2, 3, 4);
kaizouTenpre[10] = new Array();
kaizouTenpre[10][0] = new Array("エアロダウンフォース減少x4 軽量化x2", 3, 3, 3, 3, 1, 1);
kaizouTenpre[10][1] = new Array("エアロダウンフォース増加x4 軽量化x2", 2, 2, 2, 2, 1, 1);
kaizouTenpre[10][2] = new Array("軽量化x6", 1, 1, 1, 1, 1, 1);
kaizouTenpre[10][3] = new Array("耐久x4 軽量化x2", 4, 4, 4, 4, 1, 1);
kaizouTenpre[10][4] = new Array("耐久x4 エアロダウンフォース減少x2", 4, 4, 4, 4, 3, 3);
s = 0;
kaizouSelectIndex[11] = new Array(0, 0);
kaizouSelect[11] = new Array();
kaizouSelect[11][s++] = new Array(0, 1, 2);
s = 0;
kaizou7SelectIndex[11] = new Array(0, 0);
kaizou7Select[11] = new Array();
kaizou7Select[11][s++] = new Array(3, 4);
s = 0;
kaizouTenpreSelect[11] = new Array();
kaizouTenpreSelect[11][s++] = new Array(0, 1, 2);
kaizouTenpre[11] = new Array();
kaizouTenpre[11][0] = new Array("スタビ摩擦を弱めるx4", 3, 3, 3, 3, 0, 0);
kaizouTenpre[11][1] = new Array("スタビ摩擦を強めるx6", 2, 2, 2, 2, 1, 1);
kaizouTenpre[11][2] = new Array("スタビ摩擦を弱めるx4 スタビ摩擦を強めるx2", 3, 3, 3, 3, 2, 2);
s = 0;
kaizouSelectIndex[12] = new Array(0, 0);
kaizouSelect[12] = new Array();
kaizouSelect[12][s++] = new Array();
s = 0;
kaizou7SelectIndex[12] = new Array(0, 0);
kaizou7Select[12] = new Array();
kaizou7Select[12][s++] = new Array();
s = 0;
kaizouSelectIndex[13] = new Array(0, 0);
kaizouSelect[13] = new Array();
kaizouSelect[13][s++] = new Array(0, 1, 2);
s = 0;
kaizou7SelectIndex[13] = new Array(0, 0);
kaizou7Select[13] = new Array();
kaizou7Select[13][s++] = new Array(3, 4);
s = 0;
kaizouTenpreSelect[13] = new Array();
kaizouTenpreSelect[13][s++] = new Array(0, 1);
kaizouTenpre[13] = new Array();
kaizouTenpre[13][0] = new Array("節電x6", 2, 2, 2, 2, 1, 1);
kaizouTenpre[13][1] = new Array("節電x4 パワロスx2", 2, 2, 2, 2, 3, 3);
s = 0;
kaizouSelectIndex[14] = new Array(0, 0);
kaizouSelect[14] = new Array();
kaizouSelect[14][s++] = new Array(0, 1, 2);
s = 0;
kaizou7SelectIndex[14] = new Array(0, 0);
kaizou7Select[14] = new Array();
kaizou7Select[14][s++] = new Array(3, 4);
s = 0;
kaizouTenpreSelect[14] = new Array();
kaizouTenpreSelect[14][s++] = new Array(0, 1, 2);
kaizouTenpre[14] = new Array();
kaizouTenpre[14][0] = new Array("節電x6", 1, 1, 1, 1, 1, 1);
kaizouTenpre[14][1] = new Array("軽量化x6", 2, 2, 2, 2, 2, 2);
kaizouTenpre[14][2] = new Array("耐久x6", 3, 3, 3, 3, 3, 3);
s = 0;
kaizouSelectIndex[15] = new Array(0, 0);
kaizouSelect[15] = new Array();
kaizouSelect[15][s++] = new Array(0, 1, 2);
s = 0;
kaizou7SelectIndex[15] = new Array(0, 0);
kaizou7Select[15] = new Array();
kaizou7Select[15][s++] = new Array(3, 4);
s = 0;
kaizouTenpreSelect[15] = new Array();
kaizouTenpreSelect[15][s++] = new Array(0, 1, 2);
kaizouTenpre[15] = new Array();
kaizouTenpre[15][0] = new Array("パワロスx6", 2, 2, 2, 2, 2, 2);
kaizouTenpre[15][1] = new Array("ギヤ負荷x6", 3, 3, 3, 3, 1, 1);
kaizouTenpre[15][2] = new Array("ギヤ負荷x4 パワロスx2", 3, 3, 3, 3, 2, 2);
s = 0;
kaizouSelectIndex[16] = new Array(0, 0);
kaizouSelect[16] = new Array();
kaizouSelect[16][s++] = new Array(0, 1, 2);
s = 0;
kaizou7SelectIndex[16] = new Array(0, 0);
kaizou7Select[16] = new Array();
kaizou7Select[16][s++] = new Array(3, 4);
s = 0;
kaizouTenpreSelect[16] = new Array();
kaizouTenpreSelect[16][s++] = new Array(0, 1, 2);
kaizouTenpre[16] = new Array();
kaizouTenpre[16][0] = new Array("パワロスx6", 2, 2, 2, 2, 2, 2);
kaizouTenpre[16][1] = new Array("ギヤ負荷x6", 3, 3, 3, 3, 1, 1);
kaizouTenpre[16][2] = new Array("ギヤ負荷x4 パワロスx2", 3, 3, 3, 3, 2, 2);
s = 0;
kaizouSelectIndex[17] = new Array(0, 0);
kaizouSelect[17] = new Array();
kaizouSelect[17][s++] = new Array(0, 1, 2);
s = 0;
kaizou7SelectIndex[17] = new Array(0, 0);
kaizou7Select[17] = new Array();
kaizou7Select[17][s++] = new Array(3, 4);
s = 0;
kaizouTenpreSelect[17] = new Array();
kaizouTenpreSelect[17][s++] = new Array(0, 0);
kaizouTenpre[17] = new Array();
kaizouTenpre[17][0] = new Array("スピロスx6", 3, 3, 2, 2, 2, 2);
s = 0;
kaizouSelectIndex[18] = new Array(0, 0);
kaizouSelect[18] = new Array();
kaizouSelect[18][s++] = new Array(0, 1, 2);
s = 0;
kaizou7SelectIndex[18] = new Array(0, 0);
kaizou7Select[18] = new Array();
kaizou7Select[18][s++] = new Array(3, 4);
s = 0;
kaizouTenpreSelect[18] = new Array();
kaizouTenpreSelect[18][s++] = new Array(0, 1);
kaizouTenpre[18] = new Array();
kaizouTenpre[18][0] = new Array("スピロス・スピードx6", 1, 1, 1, 1, 1, 1);
kaizouTenpre[18][1] = new Array("スピロス・パワーx6", 2, 2, 2, 2, 2, 2);
s = 0;
kaizouSelectIndex[19] = new Array(0, 0);
kaizouSelect[19] = new Array();
kaizouSelect[19][s++] = new Array(0, 1);
s = 0;
kaizou7SelectIndex[19] = new Array(0, 0);
kaizou7Select[19] = new Array();
kaizou7Select[19][s++] = new Array(2, 3);
s = 0;
kaizouTenpreSelect[19] = new Array();
kaizouTenpreSelect[19][s++] = new Array(0, 0);
kaizouTenpre[19] = new Array();
kaizouTenpre[19][0] = new Array("パワロスx6", 2, 2, 1, 1, 1, 1);
s = 0;
kaizouSelectIndex[20] = new Array(0, 0);
kaizouSelect[20] = new Array();
kaizouSelect[20][s++] = new Array();
s = 0;
kaizou7SelectIndex[20] = new Array(0, 0);
kaizou7Select[20] = new Array();
kaizou7Select[20][s++] = new Array();
s = 0;
kaizouSelectIndex[21] = new Array(0, 0);
kaizouSelect[21] = new Array();
kaizouSelect[21][s++] = new Array();
s = 0;
kaizou7SelectIndex[21] = new Array(0, 0);
kaizou7Select[21] = new Array();
kaizou7Select[21][s++] = new Array();

//1:適正(0:なし, 1:St, 2:U, 3:Kp, 4:Co, 5:J), 2:ボディオプション(0:なし, 1:スピードUP, 2:パワーUP, 3:コーナー安定UP, 4:コーナー速度UP, 5:スタミナ耐久UP, 6:ブレーキ効果UP, 7:バウンド抑制UP, 8:節電UP, 9:オフロード特効UP, 10:なし, 11:スピードUP+, 12:パワーUP+, 13:コーナー安定UP+, 14:コーナー速度UP+, 15:スタミナ耐久UP+, 16:ブレーキ効果UP+, 17:バウンド抑制UP+, 18:節電UP+, 19:オフロード特効UP+, 20:なし, 21:かっとびマシン, 22:パワーブースト, 23:流星, 24:パワードリフト, 25:, 26:紅い閃光, 27:, 28:, 29:ワイルドラン, 30:ハイドロウェーブ, 31:アースエナジー)
var selectProper = new Array("－", "St", "U", "Kp", "Co", "J");
var selectOption = new Array("－", "スピードUP", "パワーUP", "コーナー安定UP", "コーナー速度UP", "スタミナ耐久UP", "ブレーキ効果UP", "バウンド抑制UP", "節電UP", "オフロード特効UP", "なし", "スピードUP+", "パワーUP+", "コーナー安定UP+", "コーナー速度UP+", "スタミナ耐久UP+", "なし", "バウンド抑制UP+", "節電UP+", "なし", "なし", "(S)かっとびマシン", "(S)パワーブースト", "(S)流星", "(S)パワードリフト", "なし", "(S)紅い閃光", "なし", "なし", "(S)ワイルドラン", "(S)ハイドロウェーブ", "(S)アースエナジー");

var selectValue = new Array();
s = 0;
selectValue[0] = new Array();
selectValue[0][s++] = new Array("FA-130タイプノーマル", 0, 0, 1380.0, 495.0, 0.0, 0.0, 17.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1100.0);
selectValue[0][s++] = new Array("ハイパーミニ", 3, 0, 1460.0, 730.0, 0.0, 0.0, 17.0, 1500.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1000.0);
selectValue[0][s++] = new Array("トルクチューン", 2, 0, 1430.0, 1268.0, 0.0, 0.0, 17.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1700.0);
selectValue[0][s++] = new Array("レブチューン", 1, 0, 1740.0, 747.0, 0.0, 0.0, 17.0, 1500.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2000.0);
selectValue[0][s++] = new Array("ハイパーダッシュ", 2, 0, 1900.0, 1583.0, 0.0, 0.0, 17.0, 1500.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1600.0);
s = 0;
selectValue[1] = new Array();
selectValue[1][s++] = new Array("5:1 標準ギヤ", 2, 0, 0.0, 20.0, 0.0, 0.2, 1.0, 1000.0, 400.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 5.0);
selectValue[1][s++] = new Array("4.2:1 高速ギヤ", 2, 0, 5.0, 15.0, 0.0, 0.2, 1.0, 1000.0, 400.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.2);
selectValue[1][s++] = new Array("4:1 ハイスピードギヤ", 1, 0, 10.0, 10.0, 0.0, 0.2, 1.0, 1000.0, 400.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.0);
selectValue[1][s++] = new Array("4:1 スーパーカウンターギヤ", 1, 0, 10.0, 10.0, 0.0, 0.4, 1.5, 900.0, 350.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.0);
selectValue[1][s++] = new Array("3.5:1 超速ギヤ", 1, 0, 20.0, 0.0, 0.0, 0.4, 1.5, 850.0, 350.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.5);
s = 0;
selectValue[2] = new Array();
selectValue[2][s++] = new Array("パックマンボディ", 1, 2, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("スーパードラゴンSDP", 1, 1, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ホーネットJr.(棚橋SP)", 1, 1, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("アバンテJr.", 4, 4, 7.0, 4.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ウイニング・バード", 1, 1, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("グラスホッパーⅡJr.", 3, 5, 2.0, 2.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("サンダーショットJr.", 2, 2, 7.0, 15.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("サンダードラゴンJr.", 3, 7, 1.0, 1.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("スーパーセイバーJr.", 1, 1, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("スーパードラゴンJr.", 1, 8, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("スコーチャーJr.", 3, 5, 2.0, 2.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("セイントドラゴンJr.", 3, 6, 2.0, 2.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダッシュX1・原始皇帝", 4, 14, 7.0, 4.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダッシュ0号 地平", 2, 8, 2.0, 18.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダッシュ1号 皇帝", 2, 2, 5.0, 15.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダッシュ2号 太陽", 3, 3, 2.0, 2.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダッシュ3号 流星", 1, 1, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダッシュ4号 弾丸", 2, 2, 5.0, 15.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダッシュ5号 D.D", 3, 9, 1.0, 1.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("バンキッシュJr.", 4, 4, 7.0, 4.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ビッグウィッグJr.", 3, 5, 2.0, 2.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ファイヤードラゴンJr.", 4, 4, 7.0, 4.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ファルコンJr.", 3, 3, 2.0, 2.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ブーメランJr.", 3, 6, 2.0, 2.0, 24.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("フォックスJr.", 4, 4, 7.0, 4.0, 10.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ホーネットJr.", 1, 1, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ホットショットJr.", 2, 1, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ライジング・バード", 2, 2, 2.0, 18.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("マグナムセイバー", 1, 1, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ソニックセイバー", 4, 4, 7.0, 4.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("スピンアックス", 4, 4, 7.0, 4.0, 10.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("トライダガーX", 1, 7, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ビークスパイダー", 4, 4, 7.0, 4.0, 10.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ブラックセイバー", 3, 5, 2.0, 2.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("プロトセイバーJB", 3, 3, 2.0, 2.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("シャイニングスコーピオン", 1, 11, 20.0, 0.0, 1.2, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ビクトリーマグナム", 1, 11, 20.0, 1.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("バンガードソニック", 4, 14, 7.0, 5.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("レイスティンガー", 3, 6, 9.0, 2.0, 18.0, 47.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ブーメラン・10", 1, 1, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("エアロソリチュード [FM]", 4, 4, 7.0, 4.0, 10.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("クリムゾングローリー [FM]", 1, 1, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ブロッケンギガント [FM]", 3, 5, 2.0, 2.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("マグナムセイバー(そらまるSP)", 1, 2, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("マンタレイJr.", 1, 9, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("サイクロンマグナム", 1, 21, 20.0, 1.0, 4.05, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("クリムゾングローリー(銀メッキ) [FM]", 1, 1, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("トムゴディスペシャル", 4, 14, 8.0, 4.0, 10.0, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("自由皇帝", 1, 12, 20.0, 1.0, 4.0, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ビッグウィッグJr.(コジ坊SP)", 3, 5, 2.0, 2.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("スピンコブラ", 4, 14, 8.0, 4.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ネオトライダガーZMC", 1, 17, 20.0, 0.0, 18.0, 45.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダッシュ01号 超皇帝", 2, 12, 6.0, 16.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("アバンテ2001Jr.", 1, 14, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダイナストームJr.", 3, 6, 2.0, 9.0, 18.0, 47.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("小覇龍", 1, 11, 18.0, 4.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("プロトセイバーエボリューション", 2, 12, 7.0, 7.0, 18.0, 47.0, 16.0, 0.0, 0.0, 0.0, 30.0, 0.0);
selectValue[2][s++] = new Array("ファイターマグナムVFX", 1, 8, 20.0, 0.0, 4.5, 5.0, 10.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("セイバー600 二郎丸スペシャル", 1, 9, 2.0, 2.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("アバンテJr.(黒メッキ)", 1, 11, 12.0, 0.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダッシュ1号 皇帝(黒メッキ)", 1, 9, 5.0, 15.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("シャイニングスコーピオン(黒メッキ)", 1, 18, 20.0, 2.0, 1.2, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("原始大帝", 3, 13, 7.0, 5.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("アスチュードJr.", 4, 17, 7.0, 4.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ハリケーンソニック", 4, 24, 8.0, 4.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("イグレスJr.", 3, 5, 8.0, 4.0, 4.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ブーメラン・ガンマ・ブラックスペシャル", 1, 11, 10.0, 10.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ブラックセイバー(ReN SP)", 3, 5, 10.0, 2.0, 18.0, 47.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("バックブレーダー", 2, 22, 5.0, 10.0, 10.5, 45.0, 14.0, 0.0, 0.0, 0.0, 30.0, 0.0);
selectValue[2][s++] = new Array("ダッシュ2号 新太陽", 3, 15, 3.0, 2.0, 18.0, 55.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ビッグ バン ゴースト", 4, 14, 12.0, 10.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ベアホークJr.", 1, 6, 20.0, 2.0, 4.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダッシュ001号 大帝", 2, 29, 6.0, 18.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("コンカラーJr.", 2, 12, 0.0, 12.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ストラトベクター [FM]", 2, 18, 3.0, 9.0, 10.5, 40.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ディオスパーダ", 4, 26, 11.0, 11.0, 6.0, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダッシュ03号 S.S.S.", 1, 23, 22.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("トップフォースJr.", 1, 11, 21.0, 1.0, 4.5, 45.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ビクトリーマグナム(銀メッキ)", 1, 11, 20.0, 2.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("アストロブーメラン", 2, 18, 15.0, 10.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ポセイドンX", 2, 30, 5.0, 20.0, 18.0, 45.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ダッシュCB1 大地皇帝", 2, 31, 5.0, 20.0, 10.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("ネオVQS ジャパンカップ2020", 4, 14, 10.0, 5.0, 30.0, 45.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);
selectValue[2][s++] = new Array("サイクロンマグナム(そらまるX'masSP)", 1, 12, 20.0, 0.0, 4.5, 35.0, 16.0, 0.0, 0.0, 0.0, 50.0, 0.0);//83
s = 0;
var partsGravity = new Array(0, 0, 0, 0, 0.5, -0.5, 0.5, -0.5, 1.0, 0, -0.5, 1.0, 0, -1.0, 1.0, 0, -1.0, -1.0, -1.0, 0, 1.0, 0, -1.0, 0.5, -1.0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var chassisGravity = new Array(0.025, 0.025, 0.025, 0.025, 0.025, 0.025, 0.025, -0.025, 0.025, 0.025, 0.025, -0.025, 0.025);
var baseGravity = new Array(); //0:リヤローラーなしダブルアルミなし, 1:リヤローラーありダブルアルミなし, 2;リヤローラーなしダブルアルミあり, 3;リヤローラーありダブルアルミあり
baseGravity[0] = new Array(80.0, 80.0, 80.0, 80.0, 80.0, 82.0, 80.0, 83.0, 80.0, 82.0, 82.0, 83.0, 82.0);
//baseGravity[1] = new Array(80.0, 80.0, 80.0, 80.0, 80.0, 82.0, 80.0, 83.0, 80.0, 82.0, 82.0, 83.0, 82.0);
//baseGravity[2] = new Array(80.0, 80.0, 80.0, 80.0, 80.0, 82.0, 80.0, 83.0, 80.0, 82.0, 82.0, 83.0, 82.0);
//baseGravity[3] = new Array(80.0, 80.0, 80.0, 80.0, 80.0, 82.0, 80.0, 83.0, 80.0, 82.0, 82.0, 83.0, 82.0);
selectValue[3] = new Array();
selectValue[3][s++] = new Array("スーパー1シャーシ", 4, 0, 10.0, 10.0, 9.12, 10.8, 15.8, 800.0, 0.0, 0.0, 0.0, 0.0, 10.0, 8.0);
selectValue[3][s++] = new Array("スーパー1強化シャーシ", 3, 0, 11.0, 10.0, 9.6, 25.0, 15.8, 800.0, 0.0, 0.0, 0.0, 0.0, 10.0, 8.0);
selectValue[3][s++] = new Array("ゼロシャーシ", 1, 0, 15.0, 5.0, 8.76, 13.5, 15.1, 850.0, 0.0, 0.0, 0.0, 0.0, 10.0, 5.0);
selectValue[3][s++] = new Array("タイプ1シャーシ", 2, 0, 2.0, 18.0, 8.4, 18.0, 18.8, 1000.0, 0.0, 0.0, 0.0, 0.0, 10.0, 1.0);
selectValue[3][s++] = new Array("タイプ1シャーシ(パックマン・棚橋SP)", 1, 0, 2.0, 18.0, 7.92, 18.0, 18.8, 1000.0, 0.0, 0.0, 0.0, 0.0, 10.0, 1.0);
selectValue[3][s++] = new Array("タイプ2シャーシ", 1, 0, 20.0, 0.0, 8.16, 14.4, 17.7, 950.0, 0.0, 0.0, 0.0, 0.0, 10.0, 1.0);
selectValue[3][s++] = new Array("タイプ3シャーシ", 1, 0, 4.0, 16.0, 7.68, 16.2, 18.6, 930.0, 0.0, 0.0, 0.0, 0.0, 10.0, 1.0);
selectValue[3][s++] = new Array("FMシャーシ", 2, 0, 9.0, 11.0, 8.52, 12.6, 18.0, 900.0, 0.0, 0.0, 0.0, 0.0, 10.0, 5.0);
selectValue[3][s++] = new Array("スーパーFMシャーシ", 4, 0, 12.0, 8.0, 9.12, 13.8, 17.8, 800.0, 0.0, 0.0, 0.0, 0.0, 10.0, 8.0);
selectValue[3][s++] = new Array("スーパーTZシャーシ", 1, 0, 12.0, 9.0, 9.12, 10.5, 15.7, 800.0, 0.0, 0.0, 0.0, 0.0, 10.0, 8.0);
selectValue[3][s++] = new Array("タイプ4シャーシ", 1, 0, 20.0, 0.0, 8.16, 19.0, 18.0, 900.0, 0.0, 0.0, 0.0, 0.0, 10.0, 1.0);
selectValue[3][s++] = new Array("FM強化シャーシ", 3, 0, 10.0, 11.0, 9.6, 25.0, 18.2, 850.0, 0.0, 0.0, 0.0, 0.0, 10.0, 5.0);
selectValue[3][s++] = new Array("タイプ5シャーシ", 1, 0, 20.0, 0.0, 7.92, 20.0, 17.0, 940.0, 0.0, 0.0, 0.0, 0.0, 10.0, 1.0);
s = 0;
selectValue[4] = new Array();
selectValue[4][s++] = new Array("小径タイプ1・フロント", 2, 0, 0.0, 12.0, 1.0, 2.0, 1.7, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径タイプ1・リヤ", 2, 0, 0.0, 12.0, 1.0, 2.0, 2.3, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径ナローワンウェイ(通常・赤・黒メッキ)・フロント", 3, 0, 8.0, 5.0, 4.0, 2.6, 3.0, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[4][s++] = new Array("小径ナローワンウェイ(通常・赤・黒メッキ)・リヤ", 3, 0, 8.0, 5.0, 4.0, 2.6, 4.5, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[4][s++] = new Array("小径ローハイトワイド・フロント", 2, 0, 5.0, 8.0, 2.0, 2.8, 1.7, 0.0, 160.0, 1000.0, 0.0, 0.0, 10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径ローハイトワイド・リヤ", 2, 0, 5.0, 8.0, 2.0, 2.8, 2.3, 0.0, 160.0, 1000.0, 0.0, 0.0, 10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径ローハイトWワンウェイ(通常・紫)・フロント", 3, 0, 6.0, 7.0, 6.0, 3.0, 3.0, 0.0, 80.0, 1000.0, 0.0, 0.0, 10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[4][s++] = new Array("小径ローハイトWワンウェイ(通常・紫)・リヤ", 3, 0, 6.0, 7.0, 6.0, 3.0, 4.5, 0.0, 80.0, 1000.0, 0.0, 0.0, 10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[4][s++] = new Array("大径タイプ1・フロント", 1, 0, 12.0, 0.0, 1.0, 2.0, 2.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ1・リヤ", 1, 0, 12.0, 0.0, 1.0, 2.0, 3.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ1(パックマン)・フロント", 1, 0, 12.0, 2.0, 1.0, 2.0, 2.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ1(パックマン)・リヤ", 1, 0, 12.0, 2.0, 1.0, 2.0, 3.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ2・フロント", 1, 0, 12.0, 0.0, 1.0, 2.4, 2.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ2・リヤ", 1, 0, 12.0, 0.0, 1.0, 2.4, 3.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ3・フロント", 1, 0, 12.0, 0.0, 1.0, 2.6, 2.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ3・リヤ", 1, 0, 12.0, 0.0, 1.0, 2.6, 3.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ4・フロント", 1, 0, 12.0, 0.0, 1.0, 2.0, 2.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ4・リヤ", 1, 0, 12.0, 0.0, 1.0, 2.0, 3.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ7(棚橋SP)・フロント", 1, 0, 11.0, 3.0, 1.0, 2.0, 2.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ7(棚橋SP)・リヤ", 1, 0, 11.0, 3.0, 1.0, 2.0, 3.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径エアロホイール・フロント", 1, 0, 12.0, 1.0, 1.0, 2.4, 1.7, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径エアロホイール・リヤ", 1, 0, 12.0, 1.0, 1.0, 2.4, 2.3, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径スピード・フロント", 1, 0, 13.0, 0.0, 1.0, 2.4, 1.6, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径スピード・リヤ", 1, 0, 13.0, 0.0, 1.0, 2.4, 2.2, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径ライトウェイト・フロント", 1, 0, 11.0, 2.0, 1.0, 2.0, 1.5, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径ライトウェイト・リヤ", 1, 0, 11.0, 2.0, 1.0, 2.0, 2.0, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径ワイド・フロント", 1, 0, 11.0, 2.0, 2.0, 2.9, 2.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径ワイド・リヤ", 1, 0, 11.0, 2.0, 2.0, 2.9, 3.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径ワンウェイ(通常・青・黒メッキ)・フロント", 3, 0, 10.0, 3.0, 4.0, 2.6, 3.0, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[4][s++] = new Array("大径ワンウェイ(通常・青・黒メッキ)・リヤ", 3, 0, 10.0, 3.0, 4.0, 2.6, 4.5, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[4][s++] = new Array("小径タイプ2・フロント", 2, 0, 1.0, 12.0, 1.0, 2.0, 1.7, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径タイプ2・リヤ", 2, 0, 1.0, 12.0, 1.0, 2.0, 2.3, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径リアルコブラ・フロント", 2, 0, 0.0, 12.0, 1.0, 2.0, 1.7, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径リアルコブラ・リヤ", 2, 0, 0.0, 12.0, 1.0, 2.0, 2.3, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径ZMC(赤)・フロント", 2, 0, 2.0, 12.0, 1.0, 2.7, 2.8, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径リアルEVO(銀)・フロント", 2, 0, 0.0, 12.0, 1.0, 2.0, 1.7, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径リアルEVO(銀)・リヤ", 2, 0, 0.0, 12.0, 1.0, 2.0, 2.3, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径中空(黄緑)", 3, 0, 1.0, 12.0, 4.0, 2.0, 1.7, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径リアルBB(銀)・フロント", 1, 0, 8.0, 5.0, 4.0, 2.0, 1.7, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径リアルBB(銀)・リヤ", 1, 0, 8.0, 5.0, 4.0, 2.0, 2.3, 0.0, 80.0, 1000.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径ローハイトWエアロ・フロント", 1, 0, 7.0, 6.0, 2.0, 2.8, 1.8, 0.0, 160.0, 800.0, 0.0, 0.0, 10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径ローハイトWエアロ・リヤ", 1, 0, 7.0, 6.0, 3.0, 2.8, 2.2, 0.0, 160.0, 800.0, 0.0, 0.0, 10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ6・フロント", 1, 0, 12.0, 0.0, 1.0, 2.6, 2.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ6・リヤ", 1, 0, 12.0, 0.0, 1.0, 2.6, 3.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径ローハイトワンウェイ・フロント", 2, 0, 4.0, 9.0, 4.0, 3.0, 3.0, 0.0, 80.0, 800.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[4][s++] = new Array("小径ローハイトワンウェイ・リヤ", 2, 0, 4.0, 9.0, 4.0, 3.0, 4.5, 0.0, 80.0, 800.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[4][s++] = new Array("大径タイプ5・フロント", 1, 0, 12.0, 0.0, 1.0, 2.5, 2.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径タイプ5・リヤ", 1, 0, 12.0, 0.0, 1.0, 2.5, 3.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径メッキスポーク・フロント", 1, 0, 13.5, 4.0, 5.0, 3.5, 2.8, 0.0, 320.0, 700.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径メッキスポーク・リヤ", 1, 0, 13.5, 4.0, 7.0, 3.7, 3.8, 0.0, 320.0, 700.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("大径軽量ワンウェイ・フロント", 2, 0, 3.0, 12.0, 5.0, 2.3, 2.8, 0.0, 320.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[4][s++] = new Array("大径軽量ワンウェイ・リヤ", 2, 0, 3.0, 12.0, 5.0, 2.3, 4.0, 0.0, 320.0, 900.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[4][s++] = new Array("小径ローハイトY強化・フロント", 3, 0, 3.0, 12.0, 9.0, 3.2, 2.8, 0.0, 160.0, 900.0, 0.0, 0.0, 7.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[4][s++] = new Array("小径ローハイトY強化・リヤ", 3, 0, 3.0, 12.0, 10.0, 3.5, 3.0, 0.0, 160.0, 800.0, 0.0, 0.0, 7.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

s = 0;
selectValue[5] = new Array();
selectValue[5][s++] = new Array("小径ノーマル・フロント", 2, 0, 0.0, 10.0, 1.8, 2.4, 5.5, 0.0, 130.0, 910.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 90.0, 26.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("小径ノーマル・リヤ", 2, 0, 0.0, 10.0, 1.8, 2.4, 7.5, 0.0, 130.0, 910.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 90.0, 26.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("小径スリック・フロント", 2, 0, 2.0, 10.0, 2.0, 2.2, 5.5, 0.0, 130.0, 910.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 85.0, 26.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("小径スリック・リヤ", 2, 0, 2.0, 10.0, 2.0, 2.2, 7.5, 0.0, 130.0, 910.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 85.0, 26.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("小径スリック(赤)・フロント", 2, 0, 2.0, 10.0, 2.0, 2.4, 5.5, 0.0, 130.0, 910.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 85.0, 26.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("小径スリック(赤)・リヤ", 2, 0, 2.0, 10.0, 2.0, 2.4, 7.5, 0.0, 130.0, 910.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 85.0, 26.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("小径スポンジ・フロント", 2, 0, 2.0, 11.0, 3.6, 2.0, 3.5, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 76.0, 73.0, 65.0, 24.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2500.0);
selectValue[5][s++] = new Array("小径スポンジ・リヤ", 2, 0, 2.0, 11.0, 3.6, 2.0, 4.5, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 76.0, 73.0, 65.0, 24.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3000.0);
selectValue[5][s++] = new Array("小径レストンスポンジ(青・橙)・フロント", 2, 0, 3.0, 10.0, 4.8, 2.0, 2.5, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 80.0, 78.0, 60.0, 24.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2500.0);
selectValue[5][s++] = new Array("小径レストンスポンジ(青・橙)・リヤ", 2, 0, 3.0, 10.0, 4.8, 2.0, 3.5, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 80.0, 78.0, 60.0, 24.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3000.0);
selectValue[5][s++] = new Array("小径ローハイトWスリック(通常・赤)・フロント", 3, 0, 4.5, 8.5, 10.0, 4.0, 3.5, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 76.0, 80.0, 90.0, 24.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("小径ローハイトWスリック(通常・赤)・リヤ", 3, 0, 4.5, 8.5, 10.0, 4.0, 4.5, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 76.0, 80.0, 90.0, 24.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("小径ローハイトWスポンジ・フロント", 3, 0, 8.0, 5.0, 10.0, 4.0, 4.5, 0.0, 135.0, 945.0, 0.0, 0.0, 0.0, 0.0, 80.0, 84.0, 100.0, 27.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1700.0);
selectValue[5][s++] = new Array("小径ローハイトWスポンジ・リヤ", 3, 0, 8.0, 5.0, 10.0, 4.0, 5.5, 0.0, 135.0, 945.0, 0.0, 0.0, 0.0, 0.0, 80.0, 84.0, 100.0, 27.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2000.0);
selectValue[5][s++] = new Array("小径ローハイトWスポンジ(灰)・フロント", 3, 0, 4.5, 8.5, 10.0, 4.0, 3.5, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 80.0, 84.0, 80.0, 24.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2000.0);
selectValue[5][s++] = new Array("小径ローハイトWスポンジ(灰)・リヤ", 3, 0, 4.5, 8.5, 10.0, 4.0, 4.5, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 80.0, 84.0, 80.0, 24.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2500.0);
selectValue[5][s++] = new Array("小径ローハイトW薄スポンジ・フロント", 3, 0, 6.0, 7.0, 10.0, 4.0, 4.5, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 80.0, 84.0, 80.0, 24.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2500.0);
selectValue[5][s++] = new Array("小径ローハイトW薄スポンジ・リヤ", 3, 0, 6.0, 7.0, 10.0, 4.0, 5.5, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 80.0, 84.0, 80.0, 24.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3000.0);
selectValue[5][s++] = new Array("大径ノーマル・フロント", 1, 0, 10.0, 0.0, 1.8, 2.4, 5.5, 0.0, 155.0, 1085.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 130.0, 31.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("大径ノーマル・リヤ", 1, 0, 10.0, 0.0, 1.8, 2.4, 7.8, 0.0, 155.0, 1085.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 130.0, 31.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("大径スリック・フロント", 1, 0, 12.0, 0.0, 2.0, 2.2, 5.5, 0.0, 155.0, 1085.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 130.0, 31.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("大径スリック・リヤ", 1, 0, 12.0, 0.0, 2.0, 2.2, 7.8, 0.0, 155.0, 1085.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 130.0, 31.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("大径スリック(赤)・フロント", 1, 0, 12.0, 0.0, 2.0, 2.4, 5.5, 0.0, 155.0, 1085.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 130.0, 31.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("大径スリック(赤)・リヤ", 1, 0, 12.0, 0.0, 2.0, 2.4, 7.8, 0.0, 155.0, 1085.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 130.0, 31.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("大径スポンジ(通常・青・緑)・フロント", 2, 0, 12.0, 1.0, 3.6, 2.0, 3.5, 0.0, 150.0, 1050.0, 0.0, 0.0, 0.0, 0.0, 76.0, 73.0, 120.0, 30.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1500.0);
selectValue[5][s++] = new Array("大径スポンジ(通常・青・緑)・リヤ", 2, 0, 12.0, 1.0, 3.6, 2.0, 4.5, 0.0, 150.0, 1050.0, 0.0, 0.0, 0.0, 0.0, 76.0, 73.0, 120.0, 30.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2000.0);
selectValue[5][s++] = new Array("大径ワイドスポンジ(黒)・フロント", 1, 0, 11.0, 2.0, 10.0, 4.0, 4.5, 0.0, 150.0, 1050.0, 0.0, 0.0, 0.0, 0.0, 80.0, 84.0, 110.0, 30.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1750.0);
selectValue[5][s++] = new Array("大径ワイドスポンジ(黒)・リヤ", 1, 0, 11.0, 2.0, 10.0, 4.0, 5.5, 0.0, 150.0, 1050.0, 0.0, 0.0, 0.0, 0.0, 80.0, 84.0, 110.0, 30.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2250.0);
selectValue[5][s++] = new Array("大径スパイク・フロント", 1, 0, 12.0, 0.0, 1.8, 2.8, 5.5, 0.0, 155.0, 1085.0, 0.0, 0.0, 0.0, 0.0, 76.0, 67.0, 138.0, 31.0, 0.0, 0.0, 0.0, 2000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1000.0);
selectValue[5][s++] = new Array("大径スパイク・リヤ", 1, 0, 12.0, 0.0, 1.8, 2.8, 7.5, 0.0, 155.0, 1085.0, 0.0, 0.0, 0.0, 0.0, 76.0, 67.0, 138.0, 31.0, 0.0, 0.0, 0.0, 2000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1500.0);
selectValue[5][s++] = new Array("大径スパイク(赤)・フロント", 1, 0, 12.0, 0.0, 1.8, 2.8, 5.5, 0.0, 155.0, 1085.0, 0.0, 0.0, 0.0, 0.0, 76.0, 67.0, 138.0, 31.0, 0.0, 0.0, 0.0, 2000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1000.0);
selectValue[5][s++] = new Array("大径スパイク(赤)・リヤ", 1, 0, 12.0, 0.0, 1.8, 2.8, 7.5, 0.0, 155.0, 1085.0, 0.0, 0.0, 0.0, 0.0, 76.0, 67.0, 138.0, 31.0, 0.0, 0.0, 0.0, 2000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1500.0);
selectValue[5][s++] = new Array("小径トレッドパターン・フロント", 2, 0, 4.0, 9.0, 1.8, 2.8, 5.5, 0.0, 130.0, 910.0, 0.0, 0.0, 0.0, 0.0, 56.0, 67.0, 98.0, 26.0, 0.0, 0.0, 0.0, 2000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2250.0);
selectValue[5][s++] = new Array("小径トレッドパターン・リヤ", 2, 0, 4.0, 9.0, 1.8, 2.8, 7.5, 0.0, 130.0, 910.0, 0.0, 0.0, 0.0, 0.0, 56.0, 67.0, 98.0, 26.0, 0.0, 0.0, 0.0, 2000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2750.0);
selectValue[5][s++] = new Array("小径中空ゴム", 3, 0, 5.0, 8.0, 4.0, 2.2, 1.3, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 62.0, 55.0, 55.0, 24.0, 0.0, 0.0, 0.0, 1000.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("小径ショック吸収・フロント", 3, 0, 3.0, 10.0, 4.8, 2.0, 2.0, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 80.0, 78.0, 55.0, 24.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("小径ショック吸収・リヤ", 3, 0, 3.0, 10.0, 4.8, 2.0, 3.0, 0.0, 120.0, 840.0, 0.0, 0.0, 0.0, 0.0, 80.0, 78.0, 55.0, 24.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("大径ハードスリック・フロント", 1, 0, 14.0, 0.0, 2.4, 3.0, 5.5, 0.0, 155.0, 1085.0, 0.0, 0.0, 0.0, 0.0, 52.0, 45.0, 120.0, 31.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[5][s++] = new Array("小径ローハイトスーパーハード2020", 3, 0, 6.0, 8.0, 1.8, 4.5, 3.8, 0.0, 130.0, 910.0, 0.0, 0.0, 0.0, 0.0, 54.0, 40.0, 60.0, 26.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
s = 0;
selectValue[6] = new Array();
selectValue[6][s++] = new Array("なし", 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("エアロハイマウント フロントステー", 3, 0, 0.0, 0.0, 26.4, 30.0, 4.0, 0.0, 0.0, 0.0, 30.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[6][s++] = new Array("ハイマウント フロントステー(通常・紫)", 4, 0, 0.0, 0.0, 26.4, 30.5, 4.0, 0.0, 0.0, 0.0, 20.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("フロント強化ガード", 3, 0, 0.0, 0.0, 28.8, 32.5, 3.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("ターボフロントステー(通常・赤・黒メッキ)", 3, 0, 0.0, 0.0, 24.0, 25.0, 3.0, 0.0, 0.0, 0.0, 10.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("FRP補強プレート・フロント", 3, 0, 0.0, 0.0, 36.0, 49.0, 4.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("FRP強化マウント・フロント", 3, 0, 0.0, 0.0, 38.4, 55.0, 4.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 2.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("スペーサー付き補強FRP・フロント", 3, 0, 0.0, 0.0, 36.0, 45.0, 6.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("ダウンスラストフロントステー", 3, 0, 0.0, 0.0, 32.4, 40.5, 5.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("可変ダウンスラストローラーステー", 3, 0, 0.0, 0.0, 31.2, 39.0, 6.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("フロントスライドダンパー(通常・赤)", 3, 0, 0.0, 0.0, 33.6, 42.0, 5.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0, 0.0);
selectValue[6][s++] = new Array("(-4)FRP強化マウント・フロント", 3, 0, 0.0, 0.0, 38.4, 55.0, 4.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, -4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("スペーサー付(-4)FRP強化マウント(通常・青)・F", 3, 0, 0.0, 0.0, 38.4, 55.0, 4.3, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, -4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("ジュラルミンマルチワイドステー(青)", 3, 0, 0.0, 0.0, 39.6, 70.0, 4.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("アルミ可変ダウンスラストローラーステー", 3, 0, 0.0, 0.0, 31.2, 60.0, 6.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0, 0.0);
selectValue[6][s++] = new Array("FRP補強2段プレート・フロント", 3, 0, 0.0, 0.0, 39.6, 50.0, 6.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("スペーサー付(-2)FRP強化マウント(赤)・F", 3, 0, 0.0, 0.0, 38.4, 55.0, 4.3, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, -2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[6][s++] = new Array("スペーサー付(-3)FRP強化マウント(白)・F", 3, 0, 0.0, 0.0, 38.4, 55.0, 4.3, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, -3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
s = 0;
selectValue[7] = new Array();
selectValue[7][s++] = new Array("なし", 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[7][s++] = new Array("サイドガード", 3, 0, 0.0, 0.0, 12.0, 5.0, 2.0, 0.0, 0.0, 0.0, 1.0);
selectValue[7][s++] = new Array("ポール付きFRPショート・サイド", 3, 0, 0.0, 0.0, 38.4, 27.5, 6.0, 0.0, 0.0, 0.0, 1.0);
selectValue[7][s++] = new Array("サイドポール", 3, 0, 0.0, 0.0, 12.0, 15.0, 6.0, 0.0, 0.0, 0.0, 1.0);
s = 0;
selectValue[8] = new Array();
selectValue[8][s++] = new Array("なし", 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[8][s++] = new Array("アルミリヤーマルチステー", 3, 0, 0.0, 0.0, 36.0, 50.0, 6.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[8][s++] = new Array("ダブルアルミリヤステー(通常・青)", 3, 0, 0.0, 0.0, 39.6, 60.0, 6.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[8][s++] = new Array("リヤースキッド", 5, 0, 0.0, 0.0, 31.8, 34.5, 4.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 40.0);
selectValue[8][s++] = new Array("リヤローラー・スタビステー", 5, 0, 0.0, 0.0, 31.2, 27.5, 6.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 50.0);
selectValue[8][s++] = new Array("リヤブレーキステー(ハード)", 5, 0, 0.0, 0.0, 30.0, 30.0, 4.8, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 100.0);
selectValue[8][s++] = new Array("リヤブレーキステー(ソフト)", 5, 0, 0.0, 0.0, 30.0, 30.0, 4.8, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 200.0);
selectValue[8][s++] = new Array("ジュラルミンマルチワイドリヤステー(青)", 3, 0, 0.0, 0.0, 39.6, 75.0, 5.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[8][s++] = new Array("リヤースキット・ゴムローラー", 5, 0, 0.0, 0.0, 32.0, 35.0, 4.5, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 150.0);
s = 0;
selectValue[9] = new Array();
selectValue[9][s++] = new Array("なし", 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[9][s++] = new Array("ローラー用9mmボールベアリング", 4, 0, 0.0, 0.0, 68.4, 16.25, 2.9, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 15.0, 100.0);
selectValue[9][s++] = new Array("10mm標準プラ1(灰・赤)", 1, 0, 0.0, 0.0, 24.0, 2.5, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 300.0);
selectValue[9][s++] = new Array("10mm標準プラ1(黒)", 2, 0, 0.0, 0.0, 24.0, 2.5, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 300.0);
selectValue[9][s++] = new Array("10mm標準プラ1(パックマン)", 1, 0, 0.0, 0.0, 36.0, 2.5, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 300.0);
selectValue[9][s++] = new Array("10mm標準プラ2", 1, 0, 0.0, 0.0, 24.0, 2.5, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 300.0);
selectValue[9][s++] = new Array("12mm標準プラ1", 4, 0, 0.0, 0.0, 36.0, 2.5, 1.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 300.0);
selectValue[9][s++] = new Array("12mmセットアップローラーズ", 1, 0, 0.0, 0.0, 37.5, 3.0, 1.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 250.0);
selectValue[9][s++] = new Array("12mmゴム付きプラ", 3, 0, 0.0, 0.0, 79.2, 3.0, 1.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 20.0, 300.0);
selectValue[9][s++] = new Array("13mmセットアップローラーズ", 1, 0, 0.0, 0.0, 40.5, 3.0, 1.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 250.0);
selectValue[9][s++] = new Array("ローラー用13mmボールベアリング", 4, 0, 0.0, 0.0, 82.8, 16.25, 3.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 15.0, 100.0);
selectValue[9][s++] = new Array("14mmセットアップローラーズ", 4, 0, 0.0, 0.0, 46.8, 3.0, 1.4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 250.0);
selectValue[9][s++] = new Array("14mm標準プラ1", 4, 0, 0.0, 0.0, 43.2, 2.5, 1.4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 300.0);
selectValue[9][s++] = new Array("14mmプラベアリング(通常・赤)", 4, 0, 0.0, 0.0, 50.4, 2.5, 1.4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 150.0);
selectValue[9][s++] = new Array("14mm標準ゴム1", 3, 0, 0.0, 0.0, 86.4, 3.5, 1.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 20.0, 300.0);
selectValue[9][s++] = new Array("14mm標準ゴム2", 3, 0, 0.0, 0.0, 86.4, 3.5, 1.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 20.0, 300.0);
selectValue[9][s++] = new Array("14mmゴム付きプラベアリング(通常・青)", 3, 0, 0.0, 0.0, 86.4, 3.0, 1.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 20.0, 150.0);
selectValue[9][s++] = new Array("15mmセットアップローラーズ", 4, 0, 0.0, 0.0, 50.4, 3.0, 1.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 250.0);
selectValue[9][s++] = new Array("15mmゴム付きプラ", 3, 0, 0.0, 0.0, 90.0, 3.5, 1.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 20.0, 300.0);
selectValue[9][s++] = new Array("16mm標準プラ1", 4, 0, 0.0, 0.0, 50.4, 2.5, 1.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 300.0);
selectValue[9][s++] = new Array("16mm標準プラ2(白・棚橋SP)", 1, 0, 0.0, 0.0, 50.4, 2.5, 1.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 300.0);
selectValue[9][s++] = new Array("16mmセットアップローラーズ", 4, 0, 0.0, 0.0, 54.0, 3.0, 1.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 250.0);
selectValue[9][s++] = new Array("16mmゴム付きプラ", 3, 0, 0.0, 0.0, 93.6, 3.5, 1.7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 20.0, 300.0);
selectValue[9][s++] = new Array("19mmゴム付きプラ", 3, 0, 0.0, 0.0, 104.4, 3.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 20.0, 300.0);
selectValue[9][s++] = new Array("19mmゴム付きアルミベアリング(通常・黒メッキ)", 3, 0, 0.0, 0.0, 104.4, 12.5, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 20.0, 100.0);
selectValue[9][s++] = new Array("19mmゴム大径アルミベアリング(青・赤)", 3, 0, 0.0, 0.0, 104.4, 12.5, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 20.0, 100.0);
selectValue[9][s++] = new Array("16mm低摩擦プラ(橙)", 4, 0, 0.0, 0.0, 50.4, 2.5, 0.7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 6.0, 125.0);
selectValue[9][s++] = new Array("19mm低摩擦プラ(紫)", 4, 0, 0.0, 0.0, 59.4, 2.5, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 6.0, 125.0);
selectValue[9][s++] = new Array("ローラー用7mmボールベアリング", 4, 0, 0.0, 0.0, 60.0, 15.0, 0.9, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 15.0, 135.0);
selectValue[9][s++] = new Array("17mmゴム付きアルミベアリング", 3, 0, 0.0, 0.0, 99.0, 13.0, 1.8, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 17.0, 100.0);
selectValue[9][s++] = new Array("ローラー用11mmボールベアリング", 4, 0, 0.0, 0.0, 75.0, 16.25, 3.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 15.0, 100.0);
selectValue[9][s++] = new Array("19mmゴム付きアルミ・エアロ", 3, 0, 0.0, 0.0, 102.0, 13.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 18.0, 100.0);
s = 0;
selectValue[10] = new Array();
selectValue[10][s++] = new Array("なし", 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[10][s++] = new Array("ターボリヤウイング(通常・赤)", 3, 0, 0.0, 0.0, 300.0, 1.2, 2.0, 0.0, 0.0, 0.0, 150.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[10][s++] = new Array("エアロハイマウント リヤウイング", 3, 0, 0.0, 0.0, 280.0, 3.6, 4.0, 0.0, 0.0, 0.0, 100.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[10][s++] = new Array("ハイマウント リヤウイング(通常・紫・黒メッキ)", 4, 0, 0.0, 0.0, 240.0, 2.4, 3.0, 0.0, 0.0, 0.0, 80.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[10][s++] = new Array("スライドダンパー(通常・赤)", 3, 0, 0.0, 0.0, 200.0, 4.8, 5.0, 0.0, 0.0, 0.0, 60.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0, 0.0);
selectValue[10][s++] = new Array("可変リヤーウイング・ナロー", 3, 0, 0.0, 0.0, 260.0, 2.4, 4.0, 0.0, 0.0, 0.0, 150.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 5000.0);
selectValue[10][s++] = new Array("可変リヤーウイング・ワイド", 3, 0, 0.0, 0.0, 300.0, 3.6, 5.0, 0.0, 0.0, 0.0, 180.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3500.0);
selectValue[10][s++] = new Array("ウイング・ダクト(ウイングA)", 1, 0, 0.0, 0.0, 300.0, 1.4, 4.0, 0.0, 0.0, 0.0, 50.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 5000.0);
selectValue[10][s++] = new Array("ウイング・ダクト(ウイングB)", 1, 0, 0.0, 0.0, 320.0, 1.8, 5.0, 0.0, 0.0, 0.0, 60.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 5000.0);
s = 0;
selectValue[11] = new Array();
selectValue[11][s++] = new Array("なし", 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[11][s++] = new Array("スタビライザーポール", 3, 0, 0.0, 0.0, 45.0, 2.5, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10.0);
selectValue[11][s++] = new Array("11mm大径スタビヘッド", 3, 0, 0.0, 0.0, 48.0, 2.5, 3.7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 15.0);
selectValue[11][s++] = new Array("15mm大径スタビヘッド", 3, 0, 0.0, 0.0, 49.5, 2.5, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 20.0);
selectValue[11][s++] = new Array("ショートスタビ", 3, 0, 0.0, 0.0, 46.5, 2.5, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 13.0);
s = 0;
selectValue[12] = new Array();
selectValue[12][s++] = new Array("なし", 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[12][s++] = new Array("セッティングウェイト2g", 5, 0, 0.0, 0.0, 0.0, 0.0, 2.0);
selectValue[12][s++] = new Array("セッティングウェイト4g", 5, 0, 0.0, 0.0, 0.0, 0.0, 4.0);
selectValue[12][s++] = new Array("セッティングウェイト6g", 5, 0, 0.0, 0.0, 0.0, 0.0, 6.0);
selectValue[12][s++] = new Array("セッティングウェイト8g", 5, 0, 0.0, 0.0, 0.0, 0.0, 8.0);
s = 0;
selectValue[13] = new Array();
selectValue[13][s++] = new Array("標準ターミナル", 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[13][s++] = new Array("ゴールドターミナル", 1, 0, 28.0, 2.0, 0.0, 1.0, 1.0, 0.0, 48.0, 0.0, 0.0, 1200.0);
s = 0;
selectValue[14] = new Array();
selectValue[14][s++] = new Array("なし", 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
selectValue[14][s++] = new Array("放熱フィン", 1, 0, 7.0, 23.0, 0.0, 1.0, 1.5, 0.0, 0.0, 0.0, 0.0, 1000.0);
selectValue[14][s++] = new Array("アルミモーターサポート", 1, 0, 5.0, 25.0, 0.0, 4.0, 1.5, 0.0, 0.0, 0.0, 0.0, 600.0);
selectValue[14][s++] = new Array("モータークーリングシールド", 1, 0, 30.0, 0.0, 0.0, 1.0, 1.2, 0.0, 0.0, 0.0, 0.0, 1000.0);
s = 0;
selectValue[15] = new Array();
selectValue[15][s++] = new Array("標準ピニオンギヤ", 0, 0, 0.0, 0.0, 0.0, 0.0, 0.1, 700.0, 400.0);
selectValue[15][s++] = new Array("ピニオンギヤ(紫)", 2, 0, 10.0, 10.0, 0.0, 0.2, 0.1, 650.0, 380.0);
selectValue[15][s++] = new Array("真ちゅうピニオンギヤ", 3, 0, 4.0, 16.0, 0.0, 1.0, 0.3, 650.0, 380.0);
s = 0;
selectValue[16] = new Array();
selectValue[16][s++] = new Array("標準プロペラシャフト", 0, 0, 0.0, 0.0, 0.0, 0.0, 2.0, 700.0, 300.0);
selectValue[16][s++] = new Array("中空軽量プロペラシャフト", 2, 0, 16.0, 14.0, 0.0, 0.2, 1.0, 650.0, 280.0);
s = 0;
selectValue[17] = new Array();
selectValue[17][s++] = new Array("標準軸受け", 0, 0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 1200.0);
selectValue[17][s++] = new Array("メタル軸受け", 3, 0, 8.0, 22.0, 0.0, 1.0, 4.0, 0.0, 0.0, 950.0);
selectValue[17][s++] = new Array("ボールベアリング", 3, 0, 17.0, 13.0, 0.0, 2.0, 3.0, 0.0, 0.0, 900.0);
selectValue[17][s++] = new Array("丸穴ボールベアリング", 1, 0, 30.0, 0.0, 0.0, 2.0, 3.0, 0.0, 0.0, 850.0);
selectValue[17][s++] = new Array("六角穴ボールベアリング", 2, 0, 0.0, 30.0, 0.0, 2.0, 3.0, 0.0, 0.0, 850.0);
s = 0;
selectValue[18] = new Array();
selectValue[18][s++] = new Array("標準シャフト", 0, 0, 0.0, 0.0, 0.0, 0.0, 2.5, 0.0, 0.0, 1200.0);
selectValue[18][s++] = new Array("ハードシャフト", 3, 0, 5.0, 25.0, 0.0, 2.0, 3.0, 0.0, 0.0, 950.0);
selectValue[18][s++] = new Array("中空ステンレスシャフト", 3, 0, 25.0, 5.0, 0.0, 1.0, 2.0, 0.0, 0.0, 900.0);
selectValue[18][s++] = new Array("強化シャフト", 1, 0, 40.0, 10.0, 0.0, 2.5, 2.5, 0.0, 0.0, 600.0);
s = 0;
selectValue[19] = new Array();
selectValue[19][s++] = new Array("標準ギヤシャフト", 0, 0, 0.0, 0.0, 0.0, 0.0, 0.3, 700.0, 300.0);
selectValue[19][s++] = new Array("フッソコートギヤシャフト", 1, 0, 15.0, 15.0, 0.0, 0.2, 0.3, 650.0, 280.0);
s = 0;
selectValue[20] = new Array();
selectValue[20][s++] = new Array("標準クラウンギヤ", 0, 0, 0.0, 0.0, 0.0, 0.0, 0.5, 700.0, 300.0);
s = 0;
selectValue[21] = new Array();
selectValue[21][s++] = new Array("標準バッテリー", 0, 0, 0.0, 0.0, 0.0, 0.0, 36.0);
selectValue[21][s++] = new Array("パワーチャンプゴールド", 0, 0, 0.0, 0.0, 0.0, 0.0, 36.0);

//2:イイ感じ, 3:職人技, 4:至高の逸品, 5:強化, 6:固定フラグ, 7:タイプ
var kaizouValue = new Array();
kaizouValue[0] = new Array();
kaizouValue[0][0] = new Array();
kaizouValue[0][0][0] = new Array("慣らし走行 [1]", "ギヤ負荷〇〇〇〇 [8] ", -0.08, -0.096, -0.112, -0.004, -1, 6);
kaizouValue[0][0][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[0][1] = new Array();
kaizouValue[0][1][0] = new Array("ピニオンギヤの固定", "ギヤ負荷〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 6);
kaizouValue[0][1][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[0][2] = new Array();
kaizouValue[0][2][0] = new Array("ブレークイン(トルク重視)", "パワー〇〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 2);
kaizouValue[0][3] = new Array();
kaizouValue[0][3][0] = new Array("ブレークイン(回転数重視)", "スピード〇〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 1);
kaizouValue[0][4] = new Array();
kaizouValue[0][4][0] = new Array("ブレークイン(バランス重視)", "スピード〇 [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 1);
kaizouValue[0][4][1] = new Array("", "パワー〇 [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 2);
kaizouValue[0][5] = new Array();
kaizouValue[0][5][0] = new Array("3Vブレークイン(トルク重視) [4]", "パワー〇〇〇 [3] ", 0.03, 0.036, 0.042, 0.0015, -1, 2);
kaizouValue[0][6] = new Array();
kaizouValue[0][6][0] = new Array("3Vブレークイン(回転数重視) [4]", "スピード〇〇〇 [3] ", 0.03, 0.036, 0.042, 0.0015, -1, 1);
kaizouValue[0][7] = new Array();
kaizouValue[0][7][0] = new Array("3Vブレークイン(バランス重視[トルク]) [4]", "スピード〇 [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 1);
kaizouValue[0][7][1] = new Array("", "パワー〇〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 2);
kaizouValue[0][8] = new Array();
kaizouValue[0][8][0] = new Array("3Vブレークイン(バランス重視[レブ]) [4]", "スピード〇〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 1);
kaizouValue[0][8][1] = new Array("", "パワー〇 [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 2);
kaizouValue[0][9] = new Array();
kaizouValue[0][9][0] = new Array("冷却ブレークイン(バランス重視) [2]", "スピード〇〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 1);
kaizouValue[0][9][1] = new Array("", "パワー〇〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 2);
kaizouValue[0][10] = new Array();
kaizouValue[0][10][0] = new Array("冷却ブレークイン(トルク重視) [2]", "パワー〇〇〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 2);
kaizouValue[0][11] = new Array();
kaizouValue[0][11][0] = new Array("冷却ブレークイン(回転数重視) [2]", "スピード〇〇〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 1);

kaizouValue[0][12] = new Array();
kaizouValue[0][12][0] = new Array("ピニオンギヤの固定(上級)", "ギヤ負荷〇〇〇 [6] ", -0.06, -0.072, -0.084, -0.003, -1, 6);
kaizouValue[0][12][1] = new Array("", "パワー〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 2);
kaizouValue[0][13] = new Array();
kaizouValue[0][13][0] = new Array("モーター位置調整(仮)", "ギヤ負荷〇〇〇 [6] ", -0.06, -0.072, -0.084, -0.003, -1, 6);
kaizouValue[0][13][1] = new Array("", "スタミナ耐久〇〇(仮) [120(全固定)] ", 1.2, 1.44, 1.68, 0.06, -2, 4);

kaizouValue[1] = new Array();
kaizouValue[1][0] = new Array();
kaizouValue[1][0][0] = new Array("ギヤメンテ", "ギヤ負荷〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 6);
kaizouValue[1][0][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[1][1] = new Array();
kaizouValue[1][1][0] = new Array("ギヤ慣らし", "パワーロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 7);
kaizouValue[1][1][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[1][2] = new Array();
kaizouValue[1][2][0] = new Array("ギヤ研磨 [4]", "ギヤ負荷〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 6);
kaizouValue[1][2][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[1][3] = new Array();
kaizouValue[1][3][0] = new Array("ギヤフローティング加工 [2]", "ギヤ負荷〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 6);
kaizouValue[1][3][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[1][4] = new Array();
kaizouValue[1][4][0] = new Array("ギヤ位置の固定 [2]", "パワーロス〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 7);
kaizouValue[1][4][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);

kaizouValue[1][5] = new Array();
kaizouValue[1][5][0] = new Array("ギヤ慣らし(上級)", "パワーロス〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 7);
kaizouValue[1][5][1] = new Array("", "パワー〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 2);
kaizouValue[1][6] = new Array();
kaizouValue[1][6][0] = new Array("ギヤフローティング加工(上級)(仮)", "ギヤ負荷〇〇〇(仮) [4] ", -0.04, -0.048, -0.056, -0.002, -1, 6);
kaizouValue[1][6][1] = new Array("", "パワー〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 2);

kaizouValue[2] = new Array();
kaizouValue[2][0] = new Array();
kaizouValue[2][0][0] = new Array("軽量化", "重さ〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 5);
kaizouValue[2][0][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[2][1] = new Array();
kaizouValue[2][1][0] = new Array("ｴｱﾛﾀﾞｳﾝﾌｫｰｽ増加 [4]", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ〇 [5] ", 0.05, 0.06, 0.07, 0.0025, -1, 9);
kaizouValue[2][1][1] = new Array("", "コーナー安定〇 [50(全固定)] ", 1.0, 1.2, 1.4, 0.025, -2, 3);
kaizouValue[2][2] = new Array();
kaizouValue[2][2][0] = new Array("ｴｱﾛﾀﾞｳﾝﾌｫｰｽ減少 [4]", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[2][2][1] = new Array("", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ× [5] ", -0.05, -0.06, -0.07, -0.0025, -1, 9);
kaizouValue[2][3] = new Array();
kaizouValue[2][3][0] = new Array("冷却能力向上 [4]", "節電〇 [10000(全固定)] ", 50, 60, 70, 5.0, -2, 10);
kaizouValue[2][3][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[2][4] = new Array();
kaizouValue[2][4][0] = new Array("限界軽量化 [2]", "重さ〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 5);
kaizouValue[2][4][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[2][4][2] = new Array("", "スタミナ耐久× [1] ", -0.01, -0.012, -0.014, -0.0005, -1, 4);

kaizouValue[2][5] = new Array();
kaizouValue[2][5][0] = new Array("ボディ補強(耐久重視)", "スタミナ耐久〇〇〇 [280(全固定)] ", 1.4, 1.68, 1.96, 0.14, -2, 4);
kaizouValue[2][5][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[2][6] = new Array();
kaizouValue[2][6][0] = new Array("ボディ補強(コーナー重視)(確?)", "コーナー安定〇〇〇(確?) [140(全固定)] ", 1.4, 1.68, 1.96, 0.07, -2, 3);
kaizouValue[2][6][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);

kaizouValue[3] = new Array();
kaizouValue[3][0] = new Array();
kaizouValue[3][0][0] = new Array("グリスアップ", "ギヤ負荷〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 6);
kaizouValue[3][0][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[3][1] = new Array();
kaizouValue[3][1][0] = new Array("軽量化", "重さ〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 5);
kaizouValue[3][1][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[3][2] = new Array();
kaizouValue[3][2][0] = new Array("限界軽量化 [2]", "重さ〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 5);
kaizouValue[3][2][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[3][2][2] = new Array("", "スタミナ耐久× [1] ", -0.01, -0.012, -0.014, -0.0005, -1, 4);
kaizouValue[3][3] = new Array();
kaizouValue[3][3][0] = new Array("電池落とし", "コーナー安定〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 3);
kaizouValue[3][4] = new Array();
kaizouValue[3][4][0] = new Array("剛性補強 [4]", "スタミナ耐久〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);
kaizouValue[3][4][1] = new Array("", "重さ× [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 5);
kaizouValue[3][5] = new Array();
kaizouValue[3][5][0] = new Array("ギヤ位置の調整 [2]", "ギヤ負荷〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 6);
kaizouValue[3][5][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[3][6] = new Array();
kaizouValue[3][6][0] = new Array("制振対策 [4]", "制振〇 [45] ", 0.45, 0.54, 0.63, 0.0225, -1, 11);
kaizouValue[3][6][1] = new Array("", "コーナー安定〇 [50(全固定)] ", 1.0, 1.2, 1.4, 0.025, -2, 3);
kaizouValue[3][7] = new Array();
kaizouValue[3][7][0] = new Array("超制振対策 [2]", "制振〇〇〇 [105] ", 1.05, 1.26, 1.47, 0.0525, -1, 11);
kaizouValue[3][7][1] = new Array("", "コーナー安定〇 [100(全固定)] ", 1.0, 1.2, 1.4, 0.05, -2, 3);
kaizouValue[3][7][2] = new Array("", "スタミナ耐久× [1] ", -0.01, -0.012, -0.014, -0.0005, -1, 4);
kaizouValue[3][8] = new Array();
kaizouValue[3][8][0] = new Array("スラスト角の減少 [4]", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[3][8][1] = new Array("", "スラスト角× [1] ",  -0.01, -0.012, -0.014, -0.0005, -1, 12);

kaizouValue[3][9] = new Array();
kaizouValue[3][9][0] = new Array("超剛性強化", "スタミナ耐久〇〇〇〇 [8] ", 0.08, 0.096, 0.112, 0.004, -1, 4);
kaizouValue[3][10] = new Array();
kaizouValue[3][10][0] = new Array("ねじれ具合加工", "コーナー安定〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 3);
kaizouValue[3][10][1] = new Array("", "スタミナ耐久〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);

kaizouValue[4] = new Array();
kaizouValue[4][0] = new Array();
kaizouValue[4][0][0] = new Array("タイヤの固定", "パワーロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 7);
kaizouValue[4][0][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[4][1] = new Array();
kaizouValue[4][1][0] = new Array("タイヤの固定", "パワーロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 7);
kaizouValue[4][1][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[4][2] = new Array();
kaizouValue[4][2][0] = new Array("シャフト受けの面取り", "スピードロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 8);
kaizouValue[4][2][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[4][3] = new Array();
kaizouValue[4][3][0] = new Array("軽量化 [4]", "重さ〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 5);
kaizouValue[4][3][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[4][4] = new Array();
kaizouValue[4][4][0] = new Array("限界軽量化 [2]", "重さ〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 5);
kaizouValue[4][4][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[4][4][2] = new Array("", "スタミナ耐久× [1] ", -0.01, -0.012, -0.014, -0.0005, -1, 4);
kaizouValue[4][5] = new Array();
kaizouValue[4][5][0] = new Array("ホイール貫通 [2]", "スタミナ耐久〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);
kaizouValue[4][6] = new Array();
kaizouValue[4][6][0] = new Array("ホイールブレの精密調整 [4]", "コーナー安定〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 3);
kaizouValue[4][7] = new Array();
kaizouValue[4][7][0] = new Array("ギヤ精密調整 [4]", "パワーロス〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 7);
kaizouValue[4][7][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);

kaizouValue[4][8] = new Array();
kaizouValue[4][8][0] = new Array("シャフト受けの面取り(上級)", "スピードロス〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 8);
kaizouValue[4][8][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[4][9] = new Array();
kaizouValue[4][9][0] = new Array("ホイール貫通(上級)", "スタミナ耐久〇〇〇 [6] ", 0.06, 0.072, 0.084, 0.003, -1, 4);
kaizouValue[4][9][1] = new Array("", "パワーロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 7);
kaizouValue[4][10] = new Array();
kaizouValue[4][10][0] = new Array("ギヤ抵抗調整", "ウェーブ〇〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 19);
kaizouValue[4][10][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);

kaizouValue[5] = new Array();
kaizouValue[5][0] = new Array();
kaizouValue[5][0][0] = new Array("タイヤクリーニング", "パワーロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 7);
kaizouValue[5][0][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[5][1] = new Array();
kaizouValue[5][1][0] = new Array("タイヤウォーミングアップ [4]", "タイヤ摩擦〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 13);
kaizouValue[5][1][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[5][2] = new Array();
kaizouValue[5][2][0] = new Array("タイヤグリップ落とし [4]", "タイヤ旋回〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 14);
kaizouValue[5][2][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[5][3] = new Array();
kaizouValue[5][3][0] = new Array("タイヤ真円出し [4]", "スピードロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 8);
kaizouValue[5][3][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[5][4] = new Array();
kaizouValue[5][4][0] = new Array("トレッドパターン加工 [2]", "タイヤ摩擦〇〇 [3] ", 0.03, 0.036, 0.042, 0.0015, -1, 13);
kaizouValue[5][4][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[5][5] = new Array();
kaizouValue[5][5][0] = new Array("タイヤ面取り [2]", "タイヤ旋回〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 14);
kaizouValue[5][5][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[5][6] = new Array();
kaizouValue[5][6][0] = new Array("スパイク高さ調整 [2]", "オフロード〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 20);
kaizouValue[5][6][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);

kaizouValue[5][7] = new Array();
kaizouValue[5][7][0] = new Array("タイヤ面取り(上級)", "タイヤ旋回〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 14);
kaizouValue[5][7][1] = new Array("", "スピード〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 1);
kaizouValue[5][8] = new Array();
kaizouValue[5][8][0] = new Array("タイヤ真円出し(上級)", "スピードロス〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 8);
kaizouValue[5][8][1] = new Array("", "スピード〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 1);
kaizouValue[5][9] = new Array();
kaizouValue[5][9][0] = new Array("スパイク高さ調整(上級)(仮)", "オフロード〇〇(仮) [3] ", 0.03, 0.036, 0.042, 0.0015, -1, 20);
kaizouValue[5][9][1] = new Array("", "パワー〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 2);

kaizouValue[6] = new Array();
kaizouValue[6][0] = new Array();
kaizouValue[6][0][0] = new Array("ネジ締め調整", "スタミナ耐久〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 4);
kaizouValue[6][1] = new Array();
kaizouValue[6][1][0] = new Array("軽量化 [4]", "重さ〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 5);
kaizouValue[6][1][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[6][2] = new Array();
kaizouValue[6][2][0] = new Array("限界軽量化 [2]", "重さ〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 5);
kaizouValue[6][2][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[6][2][2] = new Array("", "スタミナ耐久× [1] ", -0.01, -0.012, -0.014, -0.0005, -1, 4);
kaizouValue[6][3] = new Array();
kaizouValue[6][3][0] = new Array("剛性補強 [4]", "スタミナ耐久〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);
kaizouValue[6][3][1] = new Array("", "重さ× [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 5);
kaizouValue[6][4] = new Array();
kaizouValue[6][4][0] = new Array("スラスト角の増加 [4]", "スラスト角〇 [1] ",  0.01, 0.012, 0.014, 0.0005, -1, 12);
kaizouValue[6][4][1] = new Array("", "コーナー安定〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 3);
kaizouValue[6][5] = new Array();
kaizouValue[6][5][0] = new Array("スライドダンパーグリス調整 [4]", "スタミナ耐久〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);
kaizouValue[6][5][1] = new Array("", "コーナー安定〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 3);
kaizouValue[6][6] = new Array();
kaizouValue[6][6][0] = new Array("スラスト角の減少 [4]", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[6][6][1] = new Array("", "スラスト角× [1] ",  -0.01, -0.012, -0.014, -0.0005, -1, 12);
kaizouValue[6][7] = new Array();
kaizouValue[6][7][0] = new Array("可変ダウンスラストグリス調整 [4]", "デジタル〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 25);
kaizouValue[6][7][1] = new Array("", "スタミナ耐久〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);

kaizouValue[6][8] = new Array();
kaizouValue[6][8][0] = new Array("超剛性強化(仮)", "スタミナ耐久〇〇〇(仮) [6] ", 0.06, 0.072, 0.084, 0.003, -1, 4);
kaizouValue[6][9] = new Array();
kaizouValue[6][9][0] = new Array("ネジ締め調整(上級)", "コーナー安定〇〇〇 [12] ", 0.12, 0.144, 0.168, 0.006, -1, 3);
kaizouValue[6][10] = new Array();
kaizouValue[6][10][0] = new Array("スライドダンパーグリス調整(デジタル強化)(仮)", "デジタル〇〇〇(仮) [6] ", 0.06, 0.072, 0.084, 0.003, -1, 25);
kaizouValue[6][10][1] = new Array("", "スタミナ耐久〇〇(仮) [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);

kaizouValue[7] = new Array();
kaizouValue[7][0] = new Array();
kaizouValue[7][0][0] = new Array("ネジ締め調整", "スタミナ耐久〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 4);
kaizouValue[7][1] = new Array();
kaizouValue[7][1][0] = new Array("軽量化 [4]", "重さ〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 5);
kaizouValue[7][1][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[7][2] = new Array();
kaizouValue[7][2][0] = new Array("限界軽量化 [2]", "重さ〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 5);
kaizouValue[7][2][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[7][2][2] = new Array("", "スタミナ耐久× [1] ", -0.01, -0.012, -0.014, -0.0005, -1, 4);
kaizouValue[7][3] = new Array();
kaizouValue[7][3][0] = new Array("剛性補強 [4]", "スタミナ耐久〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);
kaizouValue[7][3][1] = new Array("", "重さ× [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 5);

kaizouValue[7][4] = new Array();
kaizouValue[7][4][0] = new Array("超剛性強化(仮)", "スタミナ耐久〇〇〇(仮) [6] ", 0.06, 0.072, 0.084, 0.003, -1, 4);
kaizouValue[7][5] = new Array();
kaizouValue[7][5][0] = new Array("ネジ締め調整(上級)", "コーナー安定〇〇〇 [12] ", 0.12, 0.144, 0.168, 0.006, -1, 3);

kaizouValue[8] = new Array();
kaizouValue[8][0] = new Array();
kaizouValue[8][0][0] = new Array("ネジ締め調整", "スタミナ耐久〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 4);
kaizouValue[8][1] = new Array();
kaizouValue[8][1][0] = new Array("軽量化 [4]", "重さ〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 5);
kaizouValue[8][1][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[8][2] = new Array();
kaizouValue[8][2][0] = new Array("限界軽量化 [2]", "重さ〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 5);
kaizouValue[8][2][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[8][2][2] = new Array("", "スタミナ耐久× [1] ", -0.01, -0.012, -0.014, -0.0005, -1, 4);
kaizouValue[8][3] = new Array();
kaizouValue[8][3][0] = new Array("剛性補強 [4]", "スタミナ耐久〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);
kaizouValue[8][3][1] = new Array("", "重さ× [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 5);

kaizouValue[8][4] = new Array();
kaizouValue[8][4][0] = new Array("超剛性強化(仮)", "スタミナ耐久〇〇〇(仮) [6] ", 0.06, 0.072, 0.084, 0.003, -1, 4);
kaizouValue[8][5] = new Array();
kaizouValue[8][5][0] = new Array("ネジ締め調整(上級)", "コーナー安定〇〇〇 [12] ", 0.12, 0.144, 0.168, 0.006, -1, 3);
kaizouValue[8][6] = new Array();
kaizouValue[8][6][0] = new Array("ブレーキ減速調整", "ブレーキ減速〇〇〇 [2000(全固定)] ", 12.0, 14.0, 16.0, 1.0, -2, 23);

kaizouValue[9] = new Array();
kaizouValue[9][0] = new Array();
kaizouValue[9][0][0] = new Array("ローラーチェック", "ローラー摩擦〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 17);
kaizouValue[9][0][1] = new Array("", "コーナー安定〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 3);
kaizouValue[9][1] = new Array();
kaizouValue[9][1][0] = new Array("ローラー摩擦を強める [4]", "ローラー摩擦〇〇 [3] ", 0.03, 0.036, 0.042, 0.0015, -1, 17);
kaizouValue[9][1][1] = new Array("", "コーナー安定〇〇 [8] ", 0.08, 0.096, 0.112, 0.004, -1, 3);
kaizouValue[9][2] = new Array();
kaizouValue[9][2][0] = new Array("ローラー摩擦を弱める [4]", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[9][2][1] = new Array("", "ローラー摩擦×× [5]", -0.05, -0.06, -0.07, -0.0025, -1, 17);
kaizouValue[9][3] = new Array();
kaizouValue[9][3][0] = new Array("ローラー抵抗抜き [2]", "ローラー抵抗〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 18);
kaizouValue[9][3][1] = new Array("", "コーナー安定〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 3);
kaizouValue[9][4] = new Array();
kaizouValue[9][4][0] = new Array("ローラー軽量化 [4]", "重さ〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 5);

kaizouValue[9][5] = new Array();
kaizouValue[9][5][0] = new Array("ローラー抵抗抜き(上級)", "ローラー抵抗〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 18);
kaizouValue[9][5][1] = new Array("", "コーナー安定〇〇〇 [12] ", 0.12, 0.144, 0.168, 0.006, -1, 3);
kaizouValue[9][6] = new Array();
kaizouValue[9][6][0] = new Array("ローラーチェック(上級)(仮)", "ローラー摩擦〇〇〇(仮) [4] ", 0.04, 0.048, 0.056, 0.002, -1, 17);
kaizouValue[9][6][1] = new Array("", "コーナー安定〇〇〇 [12] ", 0.12, 0.144, 0.168, 0.006, -1, 3);
kaizouValue[9][7] = new Array();
kaizouValue[9][7][0] = new Array("アルミローラー慣らし", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ〇 [2000(全固定)] ", 5.0, 6.0, 7.0, 1.0, -2, 9)
kaizouValue[9][7][1] = new Array("", "コーナー安定〇〇 [12] ", 0.06, 0.072, 0.084, 0.006, -1, 3);

kaizouValue[10] = new Array();
kaizouValue[10][0] = new Array();
kaizouValue[10][0][0] = new Array("軽量化", "重さ〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 5);
kaizouValue[10][0][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[10][1] = new Array();
kaizouValue[10][1][0] = new Array("ｴｱﾛﾀﾞｳﾝﾌｫｰｽ増加 [4]", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ〇 [5] ", 0.05, 0.06, 0.07, 0.0025, -1, 9);
kaizouValue[10][1][1] = new Array("", "コーナー安定〇 [50(全固定)] ", 1.0, 1.2, 1.4, 0.025, -2, 3);
kaizouValue[10][2] = new Array();
kaizouValue[10][2][0] = new Array("ｴｱﾛﾀﾞｳﾝﾌｫｰｽ減少 [4]", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[10][2][1] = new Array("", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ× [5] ", -0.05, -0.06, -0.07, -0.0025, -1, 9);
kaizouValue[10][3] = new Array();
kaizouValue[10][3][0] = new Array("スライドダンパーグリス調整 [4]", "スタミナ耐久〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);
kaizouValue[10][3][1] = new Array("", "コーナー安定〇 [1] ", 0.01, 0.012, 0.014, 0.0005, -1, 3);

kaizouValue[10][4] = new Array();
kaizouValue[10][4][0] = new Array("ｴｱﾛﾀﾞｳﾝﾌｫｰｽ増加(上級)(仮)", "コーナー安定〇〇〇(仮) [150(全固定)] ", 1.0, 1.2, 1.4, 0.075, -2, 3);
kaizouValue[10][4][1] = new Array("", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ〇〇(仮) [10] ", 0.1, 0.12, 0.14, 0.005, -1, 9);
kaizouValue[10][5] = new Array();
kaizouValue[10][5][0] = new Array("ｴｱﾛﾀﾞｳﾝﾌｫｰｽ減少(上級)", "スピード〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 1);
kaizouValue[10][5][1] = new Array("", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ× [5] ", -0.05, -0.06, -0.07, -0.0025, -1, 9);
kaizouValue[10][6] = new Array();
kaizouValue[10][6][0] = new Array("ウイング角度調整", "耐風〇〇〇 [32000(全固定)] ", 160.0, 192.0, 224.0, 16.0, -2, 26);
kaizouValue[10][6][1] = new Array("", "スタミナ耐久〇〇 [3] ", 0.03, 0.036, 0.042, 0.0015, -1, 4);
kaizouValue[10][7] = new Array();
kaizouValue[10][7][0] = new Array("スライドダンパーグリス調整(デジタル強化)(仮)", "デジタル〇〇〇(仮) [6] ", 0.06, 0.072, 0.084, 0.003, -1, 25);
kaizouValue[10][7][1] = new Array("", "スタミナ耐久〇〇(仮) [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);

kaizouValue[11] = new Array();
kaizouValue[11][0] = new Array();
kaizouValue[11][0][0] = new Array("スタビチェック", "スタビ減速〇 [3] ", 0.03, 0.036, 0.042, 0.0015, -1, 24);
kaizouValue[11][1] = new Array();
kaizouValue[11][1][0] = new Array("スタビ摩擦を強める [4]", "スタビ減速〇〇 [3] ", 0.03, 0.036, 0.042, 0.0015, -1, 24);
kaizouValue[11][1][1] = new Array("", "コーナー安定〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 3);
kaizouValue[11][2] = new Array();
kaizouValue[11][2][0] = new Array("スタビ摩擦を弱める [4]", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[11][2][1] = new Array("", "スタビ減速×× [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 24);

kaizouValue[11][3] = new Array();
kaizouValue[11][3][0] = new Array("スタビ摩擦を強める(上級)(仮)", "スタビ減速〇〇〇(仮) [4] ", 0.04, 0.048, 0.056, 0.002, -1, 24);
kaizouValue[11][3][1] = new Array("", "コーナー安定〇〇(仮) [8] ", 0.08, 0.096, 0.112, 0.004, -1, 3);
kaizouValue[11][4] = new Array();
kaizouValue[11][4][0] = new Array("スタビ摩擦を弱める(上級)", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[11][4][1] = new Array("", "スタビ減速××× [4] ", -0.04, -0.048, -0.056, -0.002, -1, 24);

kaizouValue[12] = new Array();
kaizouValue[12][0] = new Array();

kaizouValue[13] = new Array();
kaizouValue[13][0] = new Array();
kaizouValue[13][0][0] = new Array("ターミナルチェック", "節電〇 [3] ", 0.03, 0.036, 0.042, 0.0015, -1, 10);
kaizouValue[13][0][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[13][1] = new Array();
kaizouValue[13][1][0] = new Array("ターミナル磨き [4]", "節電〇〇 [5] ", 0.05, 0.06, 0.07, 0.0025, -1, 10);
kaizouValue[13][1][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[13][2] = new Array();
kaizouValue[13][2][0] = new Array("ターミナル位置の固定 [2]", "パワーロス〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 7);
kaizouValue[13][2][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);

kaizouValue[13][3] = new Array();
kaizouValue[13][3][0] = new Array("ターミナル位置の固定(上級)(仮)", "パワーロス〇〇(仮) [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 7);
kaizouValue[13][3][1] = new Array("", "パワー〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 2);
kaizouValue[13][4] = new Array();
kaizouValue[13][4][0] = new Array("ターミナルメンテ(仮)", "スタミナ耐久〇〇〇(仮) [280(全固定)] ", 1.4, 1.68, 1.96, 0.14, -2, 4);
kaizouValue[13][4][1] = new Array("", "スピード〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 1);

kaizouValue[14] = new Array();
kaizouValue[14][0] = new Array();
kaizouValue[14][0][0] = new Array("冷却能力向上", "節電〇 [3] ", 0.03, 0.036, 0.042, 0.0015, -1, 10);
kaizouValue[14][0][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[14][1] = new Array();
kaizouValue[14][1][0] = new Array("軽量化", "重さ〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 5);
kaizouValue[14][1][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[14][2] = new Array();
kaizouValue[14][2][0] = new Array("剛性補強", "スタミナ耐久〇〇 [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);

kaizouValue[14][3] = new Array();
kaizouValue[14][3][0] = new Array("限界軽量化(仮)", "重さ〇〇〇(仮) [4] ", -0.04, -0.048, -0.056, -0.002, -1, 5);
kaizouValue[14][3][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[14][3][2] = new Array("", "スタミナ耐久× [1] ", -0.01, -0.012, -0.014, -0.0005, -1, 4);
kaizouValue[14][4] = new Array();
kaizouValue[14][4][0] = new Array("超剛性強化(仮)", "スタミナ耐久〇〇〇(仮) [280(全固定)] ", 1.4, 1.68, 1.96, 0.14, -2, 4);

kaizouValue[15] = new Array();
kaizouValue[15][0] = new Array();
kaizouValue[15][0][0] = new Array("ギヤメンテ", "ギヤ負荷〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 6);
kaizouValue[15][0][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[15][1] = new Array();
kaizouValue[15][1][0] = new Array("ギヤ慣らし", "パワーロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 7);
kaizouValue[15][1][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[15][2] = new Array();
kaizouValue[15][2][0] = new Array("ギヤ研磨 [4]", "ギヤ負荷〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 6);
kaizouValue[15][2][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);

kaizouValue[15][3] = new Array();
kaizouValue[15][3][0] = new Array("ギヤ慣らし(上級)(仮)", "パワーロス〇〇(仮) [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 7);
kaizouValue[15][3][1] = new Array("", "パワー〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 2);
kaizouValue[15][4] = new Array();
kaizouValue[15][4][0] = new Array("ギヤ研磨(上級)(仮)", "ギヤ負荷〇〇(仮) [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 6);
kaizouValue[15][4][1] = new Array("", "パワー〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 2);

kaizouValue[16] = new Array();
kaizouValue[16][0] = new Array();
kaizouValue[16][0][0] = new Array("プロペラシャフトメンテ", "ギヤ負荷〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 6);
kaizouValue[16][0][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[16][1] = new Array();
kaizouValue[16][1][0] = new Array("ギヤ慣らし", "パワーロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 7);
kaizouValue[16][1][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[16][2] = new Array();
kaizouValue[16][2][0] = new Array("ギヤ研磨 [4]", "ギヤ負荷〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 6);
kaizouValue[16][2][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);

kaizouValue[16][3] = new Array();
kaizouValue[16][3][0] = new Array("ギヤ位置の調整(仮)", "パワーロス〇〇(仮) [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 7);
kaizouValue[16][3][1] = new Array("", "スタミナ耐久〇〇(仮) [4] ", 0.04, 0.048, 0.056, 0.002, -1, 4);
kaizouValue[16][4] = new Array();
kaizouValue[16][4][0] = new Array("ギヤ研磨(上級)(仮)", "ギヤ負荷〇〇〇(仮) [4] ", -0.04, -0.048, -0.056, -0.002, -1, 6);
kaizouValue[16][4][1] = new Array("", "パワー〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 2);

kaizouValue[17] = new Array();
kaizouValue[17][0] = new Array();
kaizouValue[17][0][0] = new Array("ベアリングメンテ", "スピードロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 8);
kaizouValue[17][0][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[17][1] = new Array();
kaizouValue[17][1][0] = new Array("ベアリング慣らし [4]", "スピードロス〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 8);
kaizouValue[17][1][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[17][2] = new Array();
kaizouValue[17][2][0] = new Array("ベアリング抵抗減少 [2]", "スピードロス〇〇〇 [4] ", -0.04, -0.048, -0.056, -0.002, -1, 8);
kaizouValue[17][2][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);

kaizouValue[17][3] = new Array();
kaizouValue[17][3][0] = new Array("ベアリング慣らし(上級)(仮)", "スピードロス〇〇〇(仮) [4] ", -0.04, -0.048, -0.056, -0.002, -1, 8);
kaizouValue[17][3][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[17][4] = new Array();
kaizouValue[17][4][0] = new Array("ベアリング駆動チェック(仮)", "スピードロス〇〇(仮) [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 8);
kaizouValue[17][4][1] = new Array("", "スタミナ耐久〇〇〇(仮) [280(全固定)] ", 1.4, 1.68, 1.96, 0.14, -2, 4);

kaizouValue[18] = new Array();
kaizouValue[18][0] = new Array();
kaizouValue[18][0][0] = new Array("回転ブレのチェック", "スピードロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 8);
kaizouValue[18][0][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);
kaizouValue[18][1] = new Array();
kaizouValue[18][1][0] = new Array("シャフトチェック", "スピードロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 8);
kaizouValue[18][1][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[18][2] = new Array();
kaizouValue[18][2][0] = new Array("滑り止め加工 [4]", "スタミナ耐久〇 [2] ", 0.02, 0.024, 0.028, 0.001, -1, 4);

kaizouValue[18][3] = new Array();
kaizouValue[18][3][0] = new Array("シャフトチェック(上級)(仮)", "スピードロス〇〇(仮) [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 8);
kaizouValue[18][3][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[18][4] = new Array();
kaizouValue[18][4][0] = new Array("回転ブレのチェック(上級)(仮)", "スピードロス〇〇(仮) [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 8);
kaizouValue[18][4][1] = new Array("", "スピード〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 1);

kaizouValue[19] = new Array();
kaizouValue[19][0] = new Array();
kaizouValue[19][0][0] = new Array("回転ブレのチェック", "パワーロス〇 [2] ", -0.02, -0.024, -0.028, -0.001, -1, 7);
kaizouValue[19][0][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);
kaizouValue[19][1] = new Array();
kaizouValue[19][1][0] = new Array("ギヤシャフト固定 [2]", "パワーロス〇〇 [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 7);
kaizouValue[19][1][1] = new Array("", "パワー〇 [200(全固定)] ", 1.0, 1.2, 1.4, 0.1, -2, 2);

kaizouValue[19][2] = new Array();
kaizouValue[19][2][0] = new Array("ギヤシャフトメンテ(仮)", "スタミナ耐久〇〇(仮) [120(全固定)] ", 1.2, 1.44, 1.68, 0.06, -2, 4);
kaizouValue[19][2][1] = new Array("", "パワー〇〇〇(仮) [200(全固定)] ", 2.0, 2.4, 2.8, 0.1, -2, 2);
kaizouValue[19][3] = new Array();
kaizouValue[19][3][0] = new Array("回転ブレのチェック(上級)(仮)", "パワーロス〇〇(仮) [3] ", -0.03, -0.036, -0.042, -0.0015, -1, 7);
kaizouValue[19][3][1] = new Array("", "パワー〇〇 [200(全固定)] ", 1.5, 1.8, 2.1, 0.1, -2, 2);

kaizouValue[20] = new Array();
kaizouValue[20][0] = new Array();

kaizouValue[21] = new Array();
kaizouValue[21][0] = new Array();

var calcFlg = 0;
var resultFlg = 0;
function All_Set() {
	calcFlg = 0;
	resultFlg = 0;
	for (var i = 0; i < nameValue.length; i++) {
		Type_Init(i);
		document.getElementById(nameValue[i] + i + '_oldselect').value = -1;
		Type_Set(i, 1);
	}
	UrlSet();
	calcFlg = 1;
	for (var i = 0; i < nameValue.length; i++) {
		Type_Calc(i);
	}
	resultFlg = 1;
	Type_Calc(0);
}

function View_Set(value1) {
	var writeValue = "<a name='link" + value1 + "'></a><table class='cstable'><tr><td>" + nameView[value1];
	writeValue += "<span id='id_" + nameValue[value1] + value1 + "'></span></td>";
	if (value1 == 2) {
		writeValue += "<td class='cstd'>　</td>";
		writeValue += "<td>肉抜き <select id='" + nameValue[value1] + value1 + "_niku' onchange='Type_Calc(" + value1 + ")'>";
		writeValue += "<option value=0>なし</option>";
		for (var j = 1; j <= 5; j++) {
			writeValue += "<option value=" + j + ">" + j + "箇所</option>";
		}
		writeValue += "</td>";
	}
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		writeValue += "<td class='cstd'>　</td>"
		writeValue += "<td>パーツプリセット <input class='csinput' type='text' id='" + nameValue[value1] + value1 + "_pres' value=''> <input type='button' value='装着' onclick='Preset_Set(" + value1 + ")'> </td>";
		writeValue += "<td class='cstd'>　</td>"
		writeValue += "<td>改造 <input type='button' value='初期化' onclick='Shokika_Set(" + value1 + ")'> </td>";
		if (value1 == 0) {
			writeValue += "<td class='cstd'>　</td> <td>全パーツ <input type='button' value='至高の逸品' onclick='Shikou_Set(2)'>　<input type='button' value='職人技' onclick='Shikou_Set(1)'>　<input type='button' value='イイ感じ' onclick='Shikou_Set(0)'> </td>";
		}
	}
	if (value1 == 2) {
		writeValue += "</tr></table>";
		writeValue += "</tr></table><table class='cstable'><tr><td class='cstd'>　</td>";
		writeValue += "<td>メイン特性 <select id='" + nameValue[value1] + value1 + "_bodytokusei1' onchange='Type_Calc(" + value1 + ")'>";
		for (var i = 0; i < selectOption.length; i++) {
			writeValue += "<option value=" + i + ">" + selectOption[i] + "</option>";
		}
		writeValue += "</select></td><td>アシスト特性 <select id='" + nameValue[value1] + value1 + "_bodytokusei2' onchange='Type_Calc(" + value1 + ")'>";
		for (var i = 0; i <= 20; i++) {
			writeValue += "<option value=" + i + ">" + selectOption[i] + "</option>";
		}
		writeValue += "</select></td><td>アシスト特性 <select id='" + nameValue[value1] + value1 + "_bodytokusei3' onchange='Type_Calc(" + value1 + ")'>";
		for (var i = 0; i <= 20; i++) {
			writeValue += "<option value=" + i + ">" + selectOption[i] + "</option>";
		}
		writeValue += "</select></td>";
	}
	writeValue += "</tr></table><table class='cstable'><tr><td class='cstd'>　</td>";
	for (var i = 0; i < typeSelect[nameCalc[value1]].length; i++) {
		if (i > 0 && i % 5 == 0) {
			writeValue += "</tr><tr><td class='cstd'>　</td>";
		}
		writeValue += "<td>" + typeView[typeSelect[nameCalc[value1]][i]] + "<input class='csinput' type='text' id='" + nameValue[value1] + "_" + typeValue[typeSelect[nameCalc[value1]][i]] + value1 + "' value=''><br>改造後 <input class='csinput' type='text' id='" + nameValue[value1] + "_" + typeValue[typeSelect[nameCalc[value1]][i]] + value1 + "_kaisv' value=''></td>";
	}
	writeValue += "</tr></table>";
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		writeValue += "<table class='cstable'><tr><td class='cstd'>　</td><td>テンプレ改造 ";
		writeValue += "<span id='id_" + nameValue[value1] + value1 + "_tenpure'></span>";
		writeValue += "</td><td class='cstd'>　</td><td class='cstd'><a href='#link0'>モーターへ</a>　</td><td class='cstd'><a href='#link4'>ホイールへ</a>　</td><td class='cstd'><a href='#link11'>ローラーへ</a>　</td><td class='cstd'><a href='#link25'>アクセサリーへ</a>　</td></tr></table>";
		writeValue += "<table class='cstable'>";
		for (var i = 1; i <= slotNum; i++) {
			writeValue += "<tr><td class='cstd'>　</td><td>スロット" + i + " ";
			writeValue += "<span id='id_" + nameValue[value1] + value1 + "_slot" + i + "'></span><br>";
			if (i == 1) {
				writeValue += " <input type='button' value='Lv一括' onclick='Lv_Set(" + value1 + ")'>　";
			}
			writeValue += "<select id='" + nameValue[value1] + value1 + "_type" + i + "' onchange='Type_Calc(" + value1 + ")'>";
			writeValue += "<option value=2>イイ感じ</option><option value=3>職人技</option><option value=4 selected>至高の逸品</option></select>　強化Lv ";
			writeValue += "<select id='" + nameValue[value1] + value1 + "_lv" + i + "' onchange='Type_Calc(" + value1 + ")'>";
			for (var j = 1; j < 50; j++) {
				writeValue += "<option value=" + j + ">" + j + "</option>";
			}
			writeValue += "<option value=" + 50 + " selected>" + 50 + "</option></select></td>";
			for (var j = 1; j <= 3; j++) {
				writeValue += "<td><span id='id_" + nameValue[value1] + value1 + "_slot" + i + "_" + j + "'></span><br><input class='csinput' type='text' id='" + nameValue[value1] + value1 + "_slot" + i + "_" + j +"' value=''></td>";
			}
			writeValue += "</tr>";
		}
		writeValue += "</table>";
	}
	writeValue += "<input type='hidden' id='" + nameValue[value1] + value1 + "_url' value=''>";
	writeValue += "<input type='hidden' id='" + nameValue[value1] + value1 + "_oldselect' value='-1'>";
	document.write(writeValue);
}

function Type_Init(value1) {
	var innerValue = "<select id='" + nameValue[value1] + value1 + "' onchange='Type_Set(" + value1 + ", " + nameUpdate[nameCalc[value1]] + ")'>";
	for (var i = 0; i < selectValue[nameCalc[value1]].length; i++) {
		innerValue += "<option value=" + i + ">" + selectValue[nameCalc[value1]][i][0] + " [" + selectProper[selectValue[nameCalc[value1]][i][1]] + "]";
		if (value1 == 2) {
			innerValue += " [" + selectOption[selectValue[nameCalc[value1]][i][2]] + "]";
		}
		innerValue += "</option>";
	}
	document.getElementById("id_" + nameValue[value1] + value1).innerHTML = innerValue + "</select>";
}

function Type_Set(value1, value2) {
	var index = document.getElementById(nameValue[value1] + value1).value;
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		var sameFlg = 1;
		if (value2 == 1) {
			var oldIndex = document.getElementById(nameValue[value1] + value1 + '_oldselect').value;
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
			var innerValue = "";
			for (var i = 1; i <= slotNum; i++) {
				innerValue = "<select id='" + nameValue[value1] + value1 + "_slot" + i + "' onchange='Type_Slot_Set(" + value1 + ", " +  (i - 1) + ")'>";
				innerValue += "<option value=-1 selected>改造選択</option>";
				if (i == 7) {
					for (var j = 0; j < kaizou7Select[nameCalc[value1]][kaizou7SelectIndex[nameCalc[value1]][index]].length; j++) {
						innerValue += "<option value=" + kaizou7Select[nameCalc[value1]][kaizou7SelectIndex[nameCalc[value1]][index]][j] + ">" + kaizouValue[nameCalc[value1]][kaizou7Select[nameCalc[value1]][kaizou7SelectIndex[nameCalc[value1]][index]][j]][0][0] + "</option>";
					}
				} else {
					for (var j = 0; j < kaizouSelect[nameCalc[value1]][kaizouSelectIndex[nameCalc[value1]][index]].length; j++) {
						innerValue += "<option value=" + kaizouSelect[nameCalc[value1]][kaizouSelectIndex[nameCalc[value1]][index]][j] + ">" + kaizouValue[nameCalc[value1]][kaizouSelect[nameCalc[value1]][kaizouSelectIndex[nameCalc[value1]][index]][j]][0][0] + "</option>";
					}
				}
				document.getElementById("id_" + nameValue[value1] + value1 + "_slot" + i).innerHTML = innerValue + "</select>";
				for (var j = 0; j < 3; j++) {
					document.getElementById("id_" + nameValue[value1] + value1 + "_slot" + i + "_" + (j + 1)).innerHTML = "";
				}
			}
			if (kaizouTenpreSelect[nameCalc[value1]] != null) {
			innerValue = "<select id='" + nameValue[value1] + value1 + "_tenpure' onchange='Type_Tenpre_Set(" + value1 + ")'>";
			innerValue += "<option value=-1 selected>テンプレ選択</option>";
			for (var j = 0; j < kaizouTenpreSelect[nameCalc[value1]][kaizouSelectIndex[nameCalc[value1]][index]].length; j++) {
				innerValue += "<option value=" + kaizouTenpreSelect[nameCalc[value1]][kaizouSelectIndex[nameCalc[value1]][index]][j] + ">" + kaizouTenpre[nameCalc[value1]][kaizouTenpreSelect[nameCalc[value1]][kaizouSelectIndex[nameCalc[value1]][index]][j]][0] + "</option>";
			}
			document.getElementById("id_" + nameValue[value1] + value1 + "_tenpure").innerHTML = innerValue + "</select>";
			}
		}
	}
	if (value1 == 2) {
		var bodyIndex = document.getElementById(nameValue[2] + "2").value;
		var bodyOption = selectValue[2][bodyIndex][2];
		var calcFlgOrg = calcFlg;
		calcFlg = 0;
		document.getElementById(nameValue[value1] + value1 + '_bodytokusei1').selectedIndex = bodyOption;
		calcFlg = calcFlgOrg;
	}
	for (var i = 0; i < typeSelect[nameCalc[value1]].length; i++) {
		document.getElementById(nameValue[value1] + '_' + typeValue[typeSelect[nameCalc[value1]][i]] + value1).value = selectValue[nameCalc[value1]][index][typeSelect[nameCalc[value1]][i] + 2];
	}
	document.getElementById(nameValue[value1] + value1 + '_oldselect').value = index;
	Type_Calc(value1);
}

function Type_Slot_Set(value1, value2) {
	var index = document.getElementById(nameValue[value1] + value1 + '_slot' + (value2 + 1)).value;
	for (var j = 0; j < 3; j++) {
		document.getElementById("id_" + nameValue[value1] + value1 + "_slot" + (value2 + 1) + "_" + (j + 1)).innerHTML = "";
	}
	if (index != -1) {
		for (var j = 0; j < kaizouValue[nameCalc[value1]][index].length; j++) {
			document.getElementById("id_" + nameValue[value1] + value1 + "_slot" + (value2 + 1) + "_" + (j + 1)).innerHTML = kaizouValue[nameCalc[value1]][index][j][1];
		}
	}
	Type_Calc(value1);
}

function Type_Tenpre_Set(value1) {
	var index = document.getElementById(nameValue[value1] + value1 + '_tenpure').value;
	if (index != -1) {
		for (var i = 1; i <= 6; i++) {
			document.getElementById(nameValue[value1] + value1 + '_slot' + i).selectedIndex = kaizouTenpre[nameCalc[value1]][index][i];
			Type_Slot_Set(value1, i - 1);
		}
		document.getElementById(nameValue[value1] + value1 + '_tenpure').selectedIndex = 0;
	}
}

function Type_Calc(value1) {
	if (calcFlg == 0) return 0;
	if (kaizouSelect[nameCalc[value1]][0].length == 0) {
		var nameIndex = document.getElementById(nameValue[value1] + value1).value;
		var calcValue = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //27
		for (var i = 1; i < selectValue[nameCalc[value1]][nameIndex].length - 2; i++) {
			calcValue[i] = selectValue[nameCalc[value1]][nameIndex][i + 2];
		}
		for (var i = 0; i < typeSelect[nameCalc[value1]].length; i++) {
			document.getElementById(nameValue[value1] + "_" + typeValue[typeSelect[nameCalc[value1]][i]] + value1 + "_kaisv").value = calcValue[typeSelect[nameCalc[value1]][i]];
		}
	} else {
		for (var i = 1; i <= slotNum; i++) {
			for (var j = 1; j <= 3; j++) {
				document.getElementById(nameValue[value1] + value1 + "_slot" + i + "_" + j).value = "";
			}
		}
		var nameIndex = document.getElementById(nameValue[value1] + value1).value;
		var calcValueSv = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //27
		var calcValueSvInit = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //27
		for (var i = 1; i < selectValue[nameCalc[value1]][nameIndex].length - 2; i++) {
			calcValueSv[i] = selectValue[nameCalc[value1]][nameIndex][i + 2];
			calcValueSvInit[i] = selectValue[nameCalc[value1]][nameIndex][i + 2];
		}
		for (var i = 1; i <= slotNum; i++) {
			var slotIndex = document.getElementById(nameValue[value1] + value1 + '_slot' + i).value;
			if (slotIndex == -1) continue;
			var typeVal = document.getElementById(nameValue[value1] + value1 + '_type' + i).value;
			var lvVal = document.getElementById(nameValue[value1] + value1 + '_lv' + i).value;
			for (var j = 0; j < kaizouValue[nameCalc[value1]][slotIndex].length; j++) {
				var typeIndex = kaizouValue[nameCalc[value1]][slotIndex][j][7];
				var kaizouVal = 0.0;
				if (kaizouValue[nameCalc[value1]][slotIndex][j][6] == -1) {
					kaizouVal = Math.abs(selectValue[nameCalc[value1]][nameIndex][typeIndex + 2]) * kaizouValue[nameCalc[value1]][slotIndex][j][typeVal];
				} else {
					kaizouVal = kaizouValue[nameCalc[value1]][slotIndex][j][typeVal];
				}
				var kyoukaValSv = 0.0;
				if (kaizouValue[nameCalc[value1]][slotIndex][j][6] == -2) {
					kyoukaValSv = kaizouValue[nameCalc[value1]][slotIndex][j][5] * lvVal;
				} else {
					kyoukaValSv = Math.abs(calcValueSvInit[typeIndex]) * kaizouValue[nameCalc[value1]][slotIndex][j][5] * lvVal;
				}
				document.getElementById(nameValue[value1] + value1 + "_slot" + i + "_" + (j + 1)).value = kaizouVal + kyoukaValSv;
				calcValueSv[typeIndex] += kaizouVal + kyoukaValSv;
				if (calcValueSv[typeIndex] < 0 && typeIndex != 12) calcValueSv[typeIndex] = 0;
			}
		}
		if (value1 == 2) {
			var nikuVal = document.getElementById(nameValue[value1] + value1 + '_niku').selectedIndex;
			calcValueSv[5] -= nikuVal * document.getElementById(nameValue[value1] + "_" + typeValue[5] + value1).value * 0.02;
		}
		for (var i = 0; i < typeSelect[nameCalc[value1]].length; i++) {
			document.getElementById(nameValue[value1] + "_" + typeValue[typeSelect[nameCalc[value1]][i]] + value1 + "_kaisv").value = calcValueSv[typeSelect[nameCalc[value1]][i]];
		}
	}
	UrlCalc(value1);
	if (resultFlg == 0) return 0;
	Result_Calc();
	UrlView();
}

function Result_Calc() {
	var resultValue = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //27
	var resultValueKai = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //27
	var resultValueKaiSv = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); //27
	var disp1 = window.parent.results.document.getElementById('disp1').checked;
	for (var value0 = 0; value0 < nameValue.length; value0++) {
		var disp1Flg = 0;
		if (disp1) {
			if (value0 >= 27 && value0 <= 32) {
				if (window.parent.mains.document.getElementById(nameValue[value0] + value0).value == 0) disp1Flg = 1;
			}
		}
		for (var i = 0; i < typeSelect[nameCalc[value0]].length; i++) {
			if (disp1Flg == 1 && typeSelect[nameCalc[value0]][i] != 5) continue;
			resultValue[typeSelect[nameCalc[value0]][i]] += 1 * window.parent.mains.document.getElementById(nameValue[value0] + "_" + typeValue[typeSelect[nameCalc[value0]][i]] + value0).value;
			resultValueKaiSv[typeSelect[nameCalc[value0]][i]] += 1 * window.parent.mains.document.getElementById(nameValue[value0] + "_" + typeValue[typeSelect[nameCalc[value0]][i]] + value0 + "_kaisv").value;
		}
	}
	for (var i = 1; i < typeValue.length; i++) {
		window.parent.results.document.getElementById(typeValue[i]).value = resultValue[i];
		window.parent.results.document.getElementById(typeValue[i] + "_kaisv").value = resultValueKaiSv[i];
		if (resultValue[i] == 0) {
			window.parent.results.document.getElementById(typeValue[i] + "_rate").value = 0;
		} else {
			window.parent.results.document.getElementById(typeValue[i] + "_rate").value = resultValueKaiSv[i] / resultValue[i] * 100.0 - 100.0;
		}
	}
	Diagnosis_Calc(resultValueKaiSv);
}

var g_speedValue;
var g_acceleValue;
 
function Diagnosis_Calc(resultValueKai) {
	var shindantire = 1;
	var shindantirekei = 0;
	if (window.parent.diagnosis.document.getElementById('shindantire2').checked) {
		shindantire = 2;
		shindantirekei = window.parent.diagnosis.document.getElementById('shindantirekei').selectedIndex;
	}
	//ローラースラスト角
	//var rollerangleValue = Math.min(10, Math.max(0, resultValueKai[12]));
	var rollerangleValue = Math.max(0, resultValueKai[12]);
	window.parent.diagnosis.document.getElementById(diagnosisValue[10]).value = rollerangleValue;
	//重さ
	var weightValue = resultValueKai[5];
	window.parent.diagnosis.document.getElementById(diagnosisValue[11]).value = weightValue;
	//ブレーキ性能
	var brakeValue = resultValueKai[23] / 2000.0;
	//var bodyIndex = window.parent.mains.document.getElementById(nameValue[2] + "2").value;
	//var bodyOption = selectValue[2][bodyIndex][2];
	var bodyOption1 = window.parent.mains.document.getElementById(nameValue[2] + "2_bodytokusei1").selectedIndex;
	var bodyOption2 = window.parent.mains.document.getElementById(nameValue[2] + "2_bodytokusei2").selectedIndex;
	var bodyOption3 = window.parent.mains.document.getElementById(nameValue[2] + "2_bodytokusei3").selectedIndex;
	if (brakeValue != 0 && bodyOption1 == 6) brakeValue += 0.05;
	if (brakeValue != 0 && bodyOption1 == 26) brakeValue += 0.05;
	if (brakeValue != 0 && bodyOption2 == 6) brakeValue += 0.015;
	if (brakeValue != 0 && bodyOption3 == 6) brakeValue += 0.015;
	window.parent.diagnosis.document.getElementById(diagnosisValue[12]).value = brakeValue;
	//バッテリー消費量
	var setsudenUp = 1.0;
	var setsudenValue = resultValueKai[10];
	if (setsudenValue != 0 && bodyOption1 == 8) setsudenUp += 0.40;
	if (setsudenValue != 0 && bodyOption1 == 18) setsudenUp += 0.50;
	if (setsudenValue != 0 && bodyOption2 == 8) setsudenUp += 0.12;
	if (setsudenValue != 0 && bodyOption2 == 18) setsudenUp += 0.17;
	if (setsudenValue != 0 && bodyOption3 == 8) setsudenUp += 0.12;
	if (setsudenValue != 0 && bodyOption3 == 18) setsudenUp += 0.17;
	window.parent.diagnosis.document.getElementById(diagnosisValue[2]).value = resultValueKai[22] * Math.max(1 - setsudenValue * setsudenUp / 10000.0, 0.0);
	//加速度(毎秒)
	var ftirekeiValue = 1.0 * window.parent.mains.document.getElementById(nameValue[6] + "_" + typeValue[16] + "6_kaisv").value;
	var rtirekeiValue = 1.0 * window.parent.mains.document.getElementById(nameValue[7] + "_" + typeValue[16] + "7_kaisv").value;
	var mintiresenkai;
	var mintirespeedloss;
	if (ftirekeiValue <= rtirekeiValue) {
		mintiresenkai = 1.0 * window.parent.mains.document.getElementById(nameValue[6] + "_" + typeValue[14] + "6_kaisv").value;
		mintirespeedloss = 1.0 * window.parent.mains.document.getElementById(nameValue[6] + "_" + typeValue[8] + "6").value;
	} else {
		mintiresenkai = 1.0 * window.parent.mains.document.getElementById(nameValue[7] + "_" + typeValue[14] + "7_kaisv").value;
		mintirespeedloss = 1.0 * window.parent.mains.document.getElementById(nameValue[7] + "_" + typeValue[8] + "7").value;
	}
	var tiresenkaisa = Math.abs(ftirekeiValue - rtirekeiValue);
	if (shindantire == 2) {
		tiresenkaisa = shindantirekei;
	}
	var bodyPower = 1.0;
	if (bodyOption1 == 2) bodyPower += 0.02;
	if (bodyOption1 == 12) bodyPower += 0.03;
	if (bodyOption1 == 22) bodyPower += 0.05;
	if (bodyOption1 == 30) bodyPower += 0.05;
	if (bodyOption1 == 31) bodyPower += 0.05;
	if (bodyOption2 == 2) bodyPower += 0.006;
	if (bodyOption2 == 12) bodyPower += 0.015;
	if (bodyOption3 == 2) bodyPower += 0.006;
	if (bodyOption3 == 12) bodyPower += 0.015;
	var bodyPowerloss = 1.0;
	if (bodyOption1 == 22) bodyPowerloss -= 0.1;
	//var acceleValue = (10.0 * bodyPower * resultValueKai[2] * (1.0 - bodyPowerloss * resultValueKai[7] / 10000.0) * resultValueKai[21] - resultValueKai[6]) / (2.0 * rtirekeiValue * weightValue);
	//var acceleValue2;
	//if ((shindantire == 1 && Math.abs(ftirekeiValue - rtirekeiValue) == 1) || shindantire == 3) {
	//	acceleValue2 = acceleValue - Math.max(resultValueKai[8] - 5000.0, 0.0) / 40000.0;
	//} else if ((shindantire == 1 && ftirekeiValue != rtirekeiValue) || shindantire == 2) {
	//	acceleValue2 = acceleValue;
	//} else {
	//	acceleValue2 = acceleValue - resultValueKai[8] / 40000.0;
	//}
	var speedlossValue = 28.0 * tiresenkaisa * mintiresenkai * 1000.0 / mintirespeedloss;
	var acceleValue2 = ((10.0 * bodyPower * resultValueKai[2] * (1.0 - bodyPowerloss * resultValueKai[7] / 10000.0) * resultValueKai[21] - resultValueKai[6]) / (rtirekeiValue / 2000.0 * weightValue) - (resultValueKai[8] + speedlossValue) / 10.0) / 4000.0;
	window.parent.diagnosis.document.getElementById(diagnosisValue[3]).value = acceleValue2;
	//最高速度
	var bodySpeed = 1.0;
	if (bodyOption1 == 1) bodySpeed += 0.02;
	if (bodyOption1 == 11) bodySpeed += 0.03;
	if (bodyOption1 == 21) bodySpeed += 0.04;
	if (bodyOption1 == 23) bodySpeed += 0.03;
	if (bodyOption1 == 26) bodySpeed += 0.03;
	if (bodyOption1 == 29) bodySpeed += 0.03;
	if (bodyOption2 == 1) bodySpeed += 0.006;
	if (bodyOption2 == 11) bodySpeed += 0.015;
	if (bodyOption3 == 1) bodySpeed += 0.006;
	if (bodyOption3 == 11) bodySpeed += 0.015;
	//var spowerValue = (1.0 - resultValueKai[6] / (10.0 * bodyPower * resultValueKai[2] * resultValueKai[21])) - bodyPowerloss * resultValueKai[7] / 10000.0;
	//var speedValue = 3.14159265359 * rtirekeiValue * spowerValue * 10.0 * bodySpeed * resultValueKai[1] / (60000.0 * resultValueKai[21]) - 0.001 * resultValueKai[9];
	//var speedlossValue = weightValue * 3.14159265359 * 10.0 * bodySpeed * resultValueKai[1] * rtirekeiValue * rtirekeiValue / (10.0 * bodyPower * resultValueKai[2] * resultValueKai[21] * resultValueKai[21] * 300.0 * 2000.0 * 2000.0);
	//var speedValue2;
	//if ((shindantire == 1 && Math.abs(ftirekeiValue - rtirekeiValue) == 1) || shindantire == 3) {
	//	speedValue2 = speedValue - speedlossValue * Math.max(resultValueKai[8] - 5000.0, 0.0);
	//} else if ((shindantire == 1 && ftirekeiValue != rtirekeiValue) || shindantire == 2) {
	//	speedValue2 = speedValue;
	//} else {
	//	speedValue2 = speedValue - speedlossValue * resultValueKai[8];
	//}
	var spowerValue = (1.0 - (weightValue * rtirekeiValue / 2000.0 * (resultValueKai[8] + speedlossValue) / 10.0 + resultValueKai[6]) / (10.0 * bodyPower * resultValueKai[2] * resultValueKai[21]) - bodyPowerloss * resultValueKai[7] / 10000.0);
	var speedValue2 = (2.0 * Math.PI * rtirekeiValue / 2000.0) * (10.0 * bodySpeed * resultValueKai[1] / 60.0) / resultValueKai[21] * spowerValue - resultValueKai[9] / 1000.0;
	window.parent.diagnosis.document.getElementById(diagnosisValue[0]).value = speedValue2 * 3.6;
	window.parent.diagnosis.document.getElementById(diagnosisValue[1]).value = speedValue2;
	//ジャンプ飛距離
	var jumpValue = Math.sin(2.0 * 20.0 * (Math.PI / 180.0)) / 9.80665;
	window.parent.diagnosis.document.getElementById(diagnosisValue[7]).value = speedValue2 * speedValue2 * jumpValue;
	//前後の重心
	var chassisIndex = window.parent.mains.document.getElementById(nameValue[3] + "3").value;
	var gravityValue = 0.0;
	var baseGravityIndex = 0;
	//if (window.parent.mains.document.getElementById(nameValue[13] + "13").value != 0 || window.parent.mains.document.getElementById(nameValue[16] + "16").value != 0 || window.parent.mains.document.getElementById(nameValue[17] + "17").value != 0 || window.parent.mains.document.getElementById(nameValue[18] + "18").value != 0) {
	//	baseGravityIndex = 1;
	//}
	//if (window.parent.mains.document.getElementById(nameValue[10] + "10").value == 2 || window.parent.mains.document.getElementById(nameValue[10] + "10").value == 4) {
	//	baseGravityIndex += 2;
	//}
	for (var i = 0; i < nameValue.length; i++) {
		var weightpartsValue = 1.0 * window.parent.mains.document.getElementById(nameValue[i] + "_" + typeValue[5] + i + "_kaisv").value;
		if (i == 3) {
			gravityValue += baseGravity[baseGravityIndex][chassisIndex] * chassisGravity[chassisIndex] * weightpartsValue;
		} else {
			gravityValue += baseGravity[baseGravityIndex][chassisIndex] * partsGravity[i] * weightpartsValue;
		}
	}
	gravityValue = gravityValue / weightValue;
	window.parent.diagnosis.document.getElementById(diagnosisValue[9]).value = gravityValue;
	//最高速到達時間
	window.parent.diagnosis.document.getElementById(diagnosisValue[4]).value = Math.log(100.0 * speedValue2) / (4.0 * acceleValue2);
	//タイヤグリップ
	var ftiregripUp = 1.0;
	if (bodyOption1 == 22) ftiregripUp += 0.015;
	if (bodyOption1 == 23) ftiregripUp += 0.015;
	if (bodyOption1 == 24) ftiregripUp += 0.15;
	if (bodyOption1 == 26) ftiregripUp += 0.015;
	if (bodyOption1 == 29) ftiregripUp += 0.015;
	if (bodyOption1 == 30) ftiregripUp += 0.015;
	if (bodyOption1 == 31) ftiregripUp += 0.015;
	var ftiregripValue = 1.0 * window.parent.mains.document.getElementById(nameValue[6] + "_" + typeValue[13] + "6_kaisv").value;
	var rtiregripValue = 1.0 * window.parent.mains.document.getElementById(nameValue[7] + "_" + typeValue[13] + "7_kaisv").value;
	var tiregripValue = (ftiregripValue * (baseGravity[baseGravityIndex][chassisIndex] / 2.0 + gravityValue) + rtiregripValue * (baseGravity[baseGravityIndex][chassisIndex] / 2.0 - gravityValue)) / baseGravity[baseGravityIndex][chassisIndex];
	window.parent.diagnosis.document.getElementById(diagnosisValue[5]).value = tiregripValue * ftiregripUp / 100.0;
	//空転
	window.parent.diagnosis.document.getElementById(diagnosisValue[15]).value = (window.parent.diagnosis.document.getElementById(diagnosisValue[5]).value * 10.0 + 0.3) * 3.6;
	//耐水空転
	var taisuigripUp = 0.0;
	if (resultValueKai[27] != 0 && bodyOption1 == 30) taisuigripUp += 5100.0;
	window.parent.diagnosis.document.getElementById(diagnosisValue[19]).value = (window.parent.diagnosis.document.getElementById(diagnosisValue[5]).value * 10.0 * Math.min(resultValueKai[27] + 200.0 + taisuigripUp, 10000.0) / 10000.0 + 0.3) * 3.6;
	//耐風最高速
	window.parent.diagnosis.document.getElementById(diagnosisValue[16]).value = Math.max(speedValue2 * (1.0 - (1.0 - Math.min(resultValueKai[26], 10000.0) / 10000.0) * weightValue / acceleValue2 / 46.0), speedValue2 / 5.0) * 3.6;
	//芝最高速
	var bodyOffload = 0.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 9) bodyOffload += 50000.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 29) bodyOffload += 50000.0;
	if (resultValueKai[20] != 0 && bodyOption1 == 31) bodyOffload += 50000.0;
	if (resultValueKai[20] != 0 && bodyOption2 == 9) bodyOffload += 15000.0;
	if (resultValueKai[20] != 0 && bodyOption3 == 9) bodyOffload += 15000.0;
	window.parent.diagnosis.document.getElementById(diagnosisValue[17]).value = Math.max(speedValue2 * (1.0 - (1.0 - Math.min(bodyOffload + resultValueKai[20], 10000.0) / 10000.0) * weightValue / acceleValue2 / 58.0), speedValue2 / 5.0) * 3.6;
	//ダート最高速
	window.parent.diagnosis.document.getElementById(diagnosisValue[18]).value = Math.max(speedValue2 * (1.0 - (1.0 - Math.min(bodyOffload + resultValueKai[20], 10000.0) / 10000.0) * weightValue / acceleValue2 / 82.0), speedValue2 / 5.0) * 3.6;

	//コーナー安定速度
	var cornerspeedUp = 1.0;
	if (bodyOption1 == 3) cornerspeedUp += 0.1;
	if (bodyOption1 == 13) cornerspeedUp += 0.15;
	if (bodyOption1 == 23) cornerspeedUp += 0.1;
	if (bodyOption2 == 3) cornerspeedUp += 0.03;
	if (bodyOption2 == 13) cornerspeedUp += 0.075;
	if (bodyOption3 == 3) cornerspeedUp += 0.03;
	if (bodyOption3 == 13) cornerspeedUp += 0.075;
	var rollecornerValue1 = 1.0 * window.parent.mains.document.getElementById(nameValue[12] + "_" + typeValue[3] + "12_kaisv").value;
	var rollecornerValue2 = 1.0 * window.parent.mains.document.getElementById(nameValue[15] + "_" + typeValue[3] + "15_kaisv").value;
	window.parent.diagnosis.document.getElementById(diagnosisValue[20]).value = 0.385 * Math.sqrt((resultValueKai[3] - (rollecornerValue1 + rollecornerValue2) + (rollecornerValue1 + rollecornerValue2) * 0.2) * cornerspeedUp) * 3.6;
	window.parent.diagnosis.document.getElementById(diagnosisValue[21]).value = 0.385 * Math.sqrt((resultValueKai[3] - (rollecornerValue1 + rollecornerValue2) + (rollecornerValue1 + rollecornerValue2) * 0.2) * cornerspeedUp * 0.385) * 3.6;
	//window.parent.diagnosis.document.getElementById(diagnosisValue[16]).value = resultValueKai[3] - (rollecornerValue1 + rollecornerValue2) + (rollecornerValue1 + rollecornerValue2) * 0.2;
	
	//最高速95%到達時間
	window.parent.diagnosis.document.getElementById(diagnosisValue[22]).value = - speedValue2 / (4.0 * acceleValue2) * Math.log(0.05);
	//100m走
	window.parent.diagnosis.document.getElementById(diagnosisValue[23]).value = "";
	g_speedValue = speedValue2;
	g_acceleValue = acceleValue2;
	Time_Calc(0.0, 100.0, 100.0, 8);
	
	//コーナー減速率
	var bodyCornerdecele = 1.0;
	if (bodyOption1 == 4) bodyCornerdecele += 0.6;
	if (bodyOption1 == 14) bodyCornerdecele += 0.7;
	if (bodyOption1 == 24) bodyCornerdecele += 0.9;
	if (bodyOption2 == 4) bodyCornerdecele += 0.18;
	if (bodyOption2 == 14) bodyCornerdecele += 0.21;
	if (bodyOption3 == 4) bodyCornerdecele += 0.18;
	if (bodyOption3 == 14) bodyCornerdecele += 0.21;
	var acceleValue3 = acceleValue2 * bodyCornerdecele;
	var rollermasatsuValue = 30.0;
	if (window.parent.mains.document.getElementById(nameValue[15] + "15").selectedIndex != 0) {
		rollermasatsuValue = 1.0 * window.parent.mains.document.getElementById(nameValue[15] + "_" + typeValue[17] + "15_kaisv").value;
	}
	if (window.parent.mains.document.getElementById(nameValue[12] + "12").selectedIndex != 0) {
		rollermasatsuValue = 1.0 * window.parent.mains.document.getElementById(nameValue[12] + "_" + typeValue[17] + "12_kaisv").value;
	}
	if (window.parent.mains.document.getElementById(nameValue[16] + "16").selectedIndex != 0) {
		rollermasatsuValue = 1.0 * window.parent.mains.document.getElementById(nameValue[16] + "_" + typeValue[17] + "16_kaisv").value;
	}
	if (window.parent.mains.document.getElementById(nameValue[13] + "13").selectedIndex != 0) {
		rollermasatsuValue = 1.0 * window.parent.mains.document.getElementById(nameValue[13] + "_" + typeValue[17] + "13_kaisv").value;
	}
	if (window.parent.mains.document.getElementById(nameValue[17] + "17").selectedIndex != 0) {
		rollermasatsuValue = 1.0 * window.parent.mains.document.getElementById(nameValue[17] + "_" + typeValue[17] + "17_kaisv").value;
	}
	if (window.parent.mains.document.getElementById(nameValue[18] + "18").selectedIndex != 0) {
		rollermasatsuValue = 1.0 * window.parent.mains.document.getElementById(nameValue[18] + "_" + typeValue[17] + "18_kaisv").value;
	}
	var rollerteikouValue = 0.0;
	rollerteikouValue = Math.max(rollerteikouValue, window.parent.mains.document.getElementById(nameValue[14] + "_" + typeValue[18] + "14_kaisv").value);
	rollerteikouValue = Math.max(rollerteikouValue, window.parent.mains.document.getElementById(nameValue[11] + "_" + typeValue[18] + "11_kaisv").value);
	rollerteikouValue = Math.max(rollerteikouValue, window.parent.mains.document.getElementById(nameValue[16] + "_" + typeValue[18] + "16_kaisv").value);
	rollerteikouValue = Math.max(rollerteikouValue, window.parent.mains.document.getElementById(nameValue[13] + "_" + typeValue[18] + "13_kaisv").value);
	rollerteikouValue = Math.max(rollerteikouValue, window.parent.mains.document.getElementById(nameValue[17] + "_" + typeValue[18] + "17_kaisv").value);
	rollerteikouValue = Math.max(rollerteikouValue, window.parent.mains.document.getElementById(nameValue[18] + "_" + typeValue[18] + "18_kaisv").value);
	if (window.parent.mains.document.getElementById(nameValue[14] + "14").selectedIndex == 0 && window.parent.mains.document.getElementById(nameValue[11] + "11").selectedIndex == 0 && window.parent.mains.document.getElementById(nameValue[16] + "16").selectedIndex == 0 && window.parent.mains.document.getElementById(nameValue[13] + "13").selectedIndex == 0 && window.parent.mains.document.getElementById(nameValue[17] + "17").selectedIndex == 0 && window.parent.mains.document.getElementById(nameValue[18] + "18").selectedIndex == 0) {
		rollerteikouValue = 400.0;
	}
	window.parent.diagnosis.document.getElementById(diagnosisValue[13]).value = rollermasatsuValue;
	window.parent.diagnosis.document.getElementById(diagnosisValue[14]).value = rollerteikouValue;
	var masatsuValue = rollerangleValue * rollermasatsuValue;
	var ftiresenkaiValue = 1.0 * window.parent.mains.document.getElementById(nameValue[6] + "_" + typeValue[14] + "6_kaisv").value;
	var rtiresenkaiValue = 1.0 * window.parent.mains.document.getElementById(nameValue[7] + "_" + typeValue[14] + "7_kaisv").value;
	var tiresenkaiValue = (ftiresenkaiValue * (baseGravity[baseGravityIndex][chassisIndex] / 2.0 - gravityValue)+rtiresenkaiValue * (baseGravity[baseGravityIndex][chassisIndex] / 2.0 + gravityValue)) / baseGravity[baseGravityIndex][chassisIndex];
	var x1 = -35.34037919;
	var x2 = -0.181476994;
	var x3 = 0.166922546;
	var x4 = -0.00388356;
	var x5 = -0.008588292;
	var x6 = 1.727607286;
	var x7 = 0.01867255;
	var x8 = -0.022662623;
	var x9 = 0.0000207796;
	var x10 = 0.0000372836;
	var x11 = -0.026814002;
	var x12 = -0.000672941;
	var x13 = 0.001125533;
	var x14 = -0.0000000470017;
	var x15 = -0.000000052914;
	var x16 = 0.000138309;
	window.parent.diagnosis.document.getElementById(diagnosisValue[6]).value = x1 + x2 * speedValue2 + x3 * acceleValue3 + x4 * masatsuValue + x5 * rollerteikouValue + x6 * tiresenkaiValue + x7 * speedValue2 * speedValue2 + x8 * acceleValue3 * acceleValue3 + x9 * masatsuValue * masatsuValue + x10 * rollerteikouValue * rollerteikouValue + x11 * tiresenkaiValue * tiresenkaiValue + x12 * speedValue2 * speedValue2 * speedValue2 + x13 * acceleValue3 * acceleValue3 * acceleValue3 + x14 * masatsuValue * masatsuValue * masatsuValue + x15 * rollerteikouValue * rollerteikouValue * rollerteikouValue + x16 * tiresenkaiValue * tiresenkaiValue * tiresenkaiValue;
	//バウンド時間
	var bodyBoundtime = 1.0;
	if (bodyOption1 == 7) bodyBoundtime -= 0.06;
	if (bodyOption1 == 17) bodyBoundtime -= 0.12;
	if (bodyOption2 == 7) bodyBoundtime -= 0.018;
	if (bodyOption2 == 17) bodyBoundtime -= 0.036;
	if (bodyOption3 == 7) bodyBoundtime -= 0.018;
	if (bodyOption3 == 17) bodyBoundtime -= 0.036;
	var seishinValue = 10.0 * resultValueKai[11];
	var ftirehanpatsuValue = 1.0 * window.parent.mains.document.getElementById(nameValue[6] + "_" + typeValue[15] + "6_kaisv").value;
	var rtirehanpatsuValue = 1.0 * window.parent.mains.document.getElementById(nameValue[7] + "_" + typeValue[15] + "7_kaisv").value;
	var tirehanpatsuValue = ftirehanpatsuValue + rtirehanpatsuValue;
	var speedValue3 = speedValue2 * 2 * Math.sin(10.0 * (Math.PI / 180.0)) * tirehanpatsuValue / 1000.0 / 9.80665 / (1.0 - tirehanpatsuValue / 1000.0) * bodyBoundtime;
	x1 = -1.5443132709;
	x2 = 1.3447137591;
	x3 = 0.0000991347;
	x4 = -0.0001170222;
	x5 = 0.0406394882;
	x6 = -0.0000592731;
	x7 = -7.6667056513;
	x8 = -0.0000008081;
	x9 = 0.0000055815;
	x10 = -0.0003551276;
	x11 = 0.0000001126;
	x12 = 35.2842613108;
	x13 = 0.0000000017;
	x14 = 0.0000011013;
	x15 = 0.0000010302;
	x16 = -0.0000000001;
	window.parent.diagnosis.document.getElementById(diagnosisValue[8]).value = x1 + x2 * speedValue3 + x3 * tirehanpatsuValue + x4 * gravityValue + x5 * weightValue + x6 * seishinValue + x7 * speedValue3 * speedValue3 + x8 * tirehanpatsuValue * tirehanpatsuValue + x9 * gravityValue * gravityValue + x10 * weightValue * weightValue + x11 * seishinValue * seishinValue + x12 * speedValue3 * speedValue3 * speedValue3 + x13 * tirehanpatsuValue * tirehanpatsuValue * tirehanpatsuValue + x14 * gravityValue * gravityValue * gravityValue + x15 * weightValue * weightValue * weightValue + x16 * seishinValue * seishinValue * seishinValue;

}

function Time_Calc(time1, time2, step, num) {
	if ((g_speedValue * (time1 + step * 0.5) + g_speedValue * g_speedValue / (4.0 * g_acceleValue) * (Math.exp(- 4.0 * g_acceleValue / g_speedValue * (time1 + step * 0.5)) - 1.0)) > 100.0) {
		if (num == 1) {
			for (var t = time1; t <= (time1 + step * 0.5); t += 0.01) {
				if ((g_speedValue * t + g_speedValue * g_speedValue / (4.0 * g_acceleValue) * (Math.exp(- 4.0 * g_acceleValue / g_speedValue * t) - 1.0)) >= 100.0) {
					window.parent.diagnosis.document.getElementById(diagnosisValue[23]).value = t;
					break;
				}
			}
		} else {
			Time_Calc(time1, time1 + step * 0.5, step * 0.5, num - 1);
		}
	} else {
		if (num == 1) {
			for (var t = (time1 + step * 0.5); t <= time2; t += 0.01) {
				if ((g_speedValue * t + g_speedValue * g_speedValue / (4.0 * g_acceleValue) * (Math.exp(- 4.0 * g_acceleValue / g_speedValue * t) - 1.0)) >= 100.0) {
					window.parent.diagnosis.document.getElementById(diagnosisValue[23]).value = t;
					break;
				}
			}
		} else {
			Time_Calc(time1 + step * 0.5, time2, step * 0.5, num - 1);
		}
	}
}

function View_Result() {
	document.write("<table class='cstable'><tr>");
	document.write("<td><input class='csinput1' type='radio' id='disp1' name='disp' onchange='Result_Calc()'>旧アプリ表示　");
	document.write("<input class='csinput1' type='radio' id='disp2' name='disp' onchange='Result_Calc()' checked>標準アクセサリー適用表示　</td>");
	document.write("</tr></table><table class='cstable'><tr><td class='cstd'>　</td>");
	for (var i = 1; i < typeValue.length; i++) {
		if (i > 1 && (i - 1) % 5 == 0) {
			document.write("</tr>");
			document.write("<tr><td class='cstd'>　</td>");
		}
		document.write("<td>" + typeView[i] + "<input class='csinput' type='text' id='" + typeValue[i] + "' value=''><br>改造後 <input class='csinput' type='text' id='" + typeValue[i] + "_kaisv' value=''><br>改造比率[%] <input class='csinput' type='text' id='" + typeValue[i] + "_rate' value=''></td>");
	}
	document.write("</tr></table>");
	document.write("<br><a href='' id='linkurl' target='_blank' rel='noopener'>プリセットURL</a>");
	document.write("<table class='cstable'><tr><td class='cstd'>　</td><td><input class='csinput2' type='text' id='dispurl' value=''></td></tr></table>");
}

function View_Diagnosis() {
	document.write("<table class='cstable'><tr>");
	document.write("<td><input class='csinput1' type='radio' id='shindantire1' name='shindantire' onchange='Result_Calc()' checked>マシン診断　");
	document.write("<input class='csinput1' type='radio' id='shindantire2' name='shindantire' onchange='Result_Calc()'>タイヤ径差表示　");
	var writeValue = "";
	writeValue += "<select id='shindantirekei' onchange='Result_Calc()'>";
	for (var j = 0; j <= 7; j++) {
		writeValue += "<option value=" + j + ">" + j + "</option>";
	}
	writeValue += "</select></td>";
	document.write(writeValue);
	document.write("</tr></table><table class='cstable'><tr><td class='cstd'>　</td>");
	for (var i = 0; i < diagnosisValue.length; i++) {
		if (i > 0 && i % 4 == 0) {
			document.write("</tr>");
			document.write("<tr><td class='cstd'>　</td>");
		}
		document.write("<td>" + diagnosisView[i] + "<input class='csinput' type='text' id='" + diagnosisValue[i] + "' value=''></td>");
	}
	document.write("</tr></table>");
	document.write("<br><font color='#FFA500'>※1 対応済(ご協力感謝します)</font>");
	document.write("<br><font color='#FFA500'>※2 参考値です(ブレーキは考慮せず、速いマシンの場合は表示より少し大きくなり、遅い場合は少し小さくなります)</font>");
	document.write("<br><font color='#FFA500'>※3 対応済(FM強化シャーシは要確認)</font>");
	document.write("<br><font color='#FFA500'>※4 参考値です(前後ローラーなしは考慮せず、3次多項式の重回帰分析による近似式)</font>");
	document.write("<br><font color='#FFA500'>※5 参考値です(3次多項式の重回帰分析による近似式)</font>");
	document.write("<br><font color='#FFA500'>※6 情報提供感謝します</font>");
}

function UrlCalc(value1) {
	var urlValue = NumToUrl(document.getElementById(nameValue[value1] + value1).selectedIndex);
	if (kaizouSelect[nameCalc[value1]][0].length != 0) {
		for (var i = 1; i <= slotNum; i++) {
			urlValue += NumToUrl(document.getElementById(nameValue[value1] + value1 + '_slot' + i).selectedIndex);
			urlValue += NumToUrl(document.getElementById(nameValue[value1] + value1 + '_type' + i).selectedIndex);
			urlValue += NumToUrl(document.getElementById(nameValue[value1] + value1 + '_lv' + i).selectedIndex);
		}
		if (value1 == 2) {
			urlValue += NumToUrl(document.getElementById(nameValue[value1] + value1 + '_niku').selectedIndex);
			urlValue += NumToUrl(document.getElementById(nameValue[value1] + value1 + '_bodytokusei1').selectedIndex);
			urlValue += NumToUrl(document.getElementById(nameValue[value1] + value1 + '_bodytokusei2').selectedIndex);
			urlValue += NumToUrl(document.getElementById(nameValue[value1] + value1 + '_bodytokusei3').selectedIndex);
		}
		document.getElementById(nameValue[value1] + value1 + "_pres").value = urlValue;
	}
	document.getElementById(nameValue[value1] + value1 + "_url").value = urlValue;
}

function UrlView() {
	var urlValue = "";
	for (var value0 = 0; value0 < nameValue.length; value0++) {
		urlValue += document.getElementById(nameValue[value0] + value0 + "_url").value;
	}
	var url = window.parent.document.location.href;
	var start = url.indexOf("?", 0);
	var urlInit = url;
	if (start != -1) urlInit = url.substring(0, start);
	window.parent.results.document.getElementById('linkurl').href = urlInit + "?" + urlValue;
	window.parent.results.document.getElementById('dispurl').value = urlInit + "?" + urlValue;
}

function UrlSet() {
	var url = window.parent.document.location.href;
	var start = url.indexOf("?", 0);
	if (start != -1) {
		var presetText = url.substring(start + 1);
		var index = 0;
		var pos = 0;
		if (presetText.length >= ((1 + 3 * 6) * (nameValue.length - 5) + 5 + 3)) { //19x29+5+3=559 19x30+4+3=577 19x30+4+4=578 22x30+4+4=668
			for (var value1 = 0; value1 < nameValue.length; value1++) {
				var str = presetText.charAt(pos++);
				var charLenTmp = 0;
				if (str == "0") {
					str += presetText.charAt(pos++);
					charLenTmp++;
				}
				index = UrlToNum(str);
				document.getElementById(nameValue[value1] + value1).selectedIndex = index;
				Type_Set(value1, nameUpdate[nameCalc[value1]]);
				if (kaizouSelect[nameCalc[value1]][0].length != 0) {
					var slotNumTmp = slotNum;
					if (presetText.length <= (578 + charLenTmp)) slotNumTmp = 6;
					for (var i = 1; i <= slotNumTmp; i++) {
						index = UrlToNum(presetText.charAt(pos++));
						document.getElementById(nameValue[value1] + value1 + '_slot' + i).selectedIndex = index;
						index = UrlToNum(presetText.charAt(pos++));
						document.getElementById(nameValue[value1] + value1 + '_type' + i).selectedIndex = index;
						index = UrlToNum(presetText.charAt(pos++));
						document.getElementById(nameValue[value1] + value1 + '_lv' + i).selectedIndex = index;
						Type_Slot_Set(value1, i - 1);
					}
					if (value1 == 2) {
						index = UrlToNum(presetText.charAt(pos++));
						document.getElementById(nameValue[value1] + value1 + '_niku').selectedIndex = index;
						if (presetText.length != (559 + charLenTmp) && presetText.length != (577 + charLenTmp)) {
							index = UrlToNum(presetText.charAt(pos++));
							document.getElementById(nameValue[value1] + value1 + '_bodytokusei1').selectedIndex = index;
						}
						index = UrlToNum(presetText.charAt(pos++));
						document.getElementById(nameValue[value1] + value1 + '_bodytokusei2').selectedIndex = index;
						index = UrlToNum(presetText.charAt(pos++));
						document.getElementById(nameValue[value1] + value1 + '_bodytokusei3').selectedIndex = index;
					}
				}
			}
		}
	}
}

function Preset_Set(value1) {
	var presetText = document.getElementById(nameValue[value1] + value1 + "_pres").value;
	var index = 0;
	var pos = 0;
	if ((value1 != 2 && presetText.length >= 19) || (value1 == 2 && presetText.length >= 22)) {
		calcFlg = 0;
		var str = presetText.charAt(pos++);
		var charLenTmp = 0;
		if (str == "0") {
			str += presetText.charAt(pos++);
			charLenTmp++;
		}
		index = UrlToNum(str);
		document.getElementById(nameValue[value1] + value1).selectedIndex = index;
		Type_Set(value1, nameUpdate[nameCalc[value1]]);
		var slotNumTmp = slotNum;
		if (presetText.length <= (23 + charLenTmp)) slotNumTmp = 6;
		for (var i = 1; i <= slotNumTmp; i++) {
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + value1 + '_slot' + i).selectedIndex = index;
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + value1 + '_type' + i).selectedIndex = index;
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + value1 + '_lv' + i).selectedIndex = index;
			Type_Slot_Set(value1, i - 1);
		}
		if (value1 == 2) {
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + value1 + '_niku').selectedIndex = index;
			if (presetText.length >= (23 + charLenTmp)) {
				index = UrlToNum(presetText.charAt(pos++));
				document.getElementById(nameValue[value1] + value1 + '_bodytokusei1').selectedIndex = index;
			}
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + value1 + '_bodytokusei2').selectedIndex = index;
			index = UrlToNum(presetText.charAt(pos++));
			document.getElementById(nameValue[value1] + value1 + '_bodytokusei3').selectedIndex = index;
		}
		calcFlg = 1;
		//Type_Set(value1, nameUpdate[nameCalc[value1]]);
		Type_Calc(value1);
	} else {
		for (var i = 1; i <= slotNum; i++) {
			document.getElementById(nameValue[value1] + value1 + '_slot' + i).selectedIndex = 0;
			Type_Slot_Set(value1, i - 1);
		}
	}
}

function Lv_Set(value1) {
	var index = document.getElementById(nameValue[value1] + value1 + '_lv' + 1).selectedIndex;
	for (var i = 2; i <= slotNum; i++) {
		document.getElementById(nameValue[value1] + value1 + '_lv' + i).selectedIndex = index;
		Type_Slot_Set(value1, i - 1);
	}
}

function Shokika_Set(value1) {
	for (var i = 1; i <= slotNum; i++) {
		document.getElementById(nameValue[value1] + value1 + '_slot' + i).selectedIndex = 0;
		Type_Slot_Set(value1, i - 1);
	}
}

function Shikou_Set(value0) {
	calcFlg = 0;
	resultFlg = 0;
	for (var i = 0; i < nameValue.length; i++) {
		if (kaizouSelect[nameCalc[i]][0].length != 0) {
			for (var j = 1; j <= slotNum; j++) {
				document.getElementById(nameValue[i] + i + '_type' + j).selectedIndex = value0;
			}
		}
	}
	calcFlg = 1;
	for (var i = 0; i < nameValue.length; i++) {
		Type_Calc(i);
	}
	resultFlg = 1;
	Type_Calc(0);
}

function UrlToNum(value) {
	if (value == "a") return 0;
	if (value == "b") return 1;
	if (value == "c") return 2;
	if (value == "d") return 3;
	if (value == "e") return 4;
	if (value == "f") return 5;
	if (value == "g") return 6;
	if (value == "h") return 7;
	if (value == "i") return 8;
	if (value == "j") return 9;
	if (value == "k") return 10;
	if (value == "l") return 11;
	if (value == "m") return 12;
	if (value == "n") return 13;
	if (value == "o") return 14;
	if (value == "p") return 15;
	if (value == "q") return 16;
	if (value == "r") return 17;
	if (value == "s") return 18;
	if (value == "t") return 19;
	if (value == "u") return 20;
	if (value == "v") return 21;
	if (value == "w") return 22;
	if (value == "x") return 23;
	if (value == "y") return 24;
	if (value == "z") return 25;
	if (value == "A") return 26;
	if (value == "B") return 27;
	if (value == "C") return 28;
	if (value == "D") return 29;
	if (value == "E") return 30;
	if (value == "F") return 31;
	if (value == "G") return 32;
	if (value == "H") return 33;
	if (value == "I") return 34;
	if (value == "J") return 35;
	if (value == "K") return 36;
	if (value == "L") return 37;
	if (value == "M") return 38;
	if (value == "N") return 39;
	if (value == "O") return 40;
	if (value == "P") return 41;
	if (value == "Q") return 42;
	if (value == "R") return 43;
	if (value == "S") return 44;
	if (value == "T") return 45;
	if (value == "U") return 46;
	if (value == "V") return 47;
	if (value == "W") return 48;
	if (value == "X") return 49;
	if (value == "Y") return 50;
	if (value == "Z") return 51;
	if (value == "1") return 52;
	if (value == "2") return 53;
	if (value == "3") return 54;
	if (value == "4") return 55;
	if (value == "5") return 56;
	if (value == "6") return 57;
	if (value == "7") return 58;
	if (value == "8") return 59;
	if (value == "9") return 60;
	if (value == "0a") return 61;
	if (value == "0b") return 62;
	if (value == "0c") return 63;
	if (value == "0d") return 64;
	if (value == "0e") return 65;
	if (value == "0f") return 66;
	if (value == "0g") return 67;
	if (value == "0h") return 68;
	if (value == "0i") return 69;
	if (value == "0j") return 70;
	if (value == "0k") return 71;
	if (value == "0l") return 72;
	if (value == "0m") return 73;
	if (value == "0n") return 74;
	if (value == "0o") return 75;
	if (value == "0p") return 76;
	if (value == "0q") return 77;
	if (value == "0r") return 78;
	if (value == "0s") return 79;
	if (value == "0t") return 80;
	if (value == "0u") return 81;
	if (value == "0v") return 82;
	if (value == "0w") return 83;
	if (value == "0x") return 84;
	if (value == "0y") return 85;
	if (value == "0z") return 86;
	if (value == "0A") return 87;
	if (value == "0B") return 88;
	if (value == "0C") return 89;
	if (value == "0D") return 90;
	if (value == "0E") return 91;
	if (value == "0F") return 92;
	if (value == "0G") return 93;
	if (value == "0H") return 94;
	if (value == "0I") return 95;
	if (value == "0J") return 96;
	if (value == "0K") return 97;
	if (value == "0L") return 98;
	if (value == "0M") return 99;
	if (value == "0N") return 100;
	if (value == "0O") return 101;
	if (value == "0P") return 102;
	if (value == "0Q") return 103;
	if (value == "0R") return 104;
	if (value == "0S") return 105;
	if (value == "0T") return 106;
	if (value == "0U") return 107;
	if (value == "0V") return 108;
	if (value == "0W") return 109;
	if (value == "0X") return 110;
	if (value == "0Y") return 111;
	if (value == "0Z") return 112;
    return 0;
}

function NumToUrl(value) {
	if (value == 0) return "a";
	if (value == 1) return "b";
	if (value == 2) return "c";
	if (value == 3) return "d";
	if (value == 4) return "e";
	if (value == 5) return "f";
	if (value == 6) return "g";
	if (value == 7) return "h";
	if (value == 8) return "i";
	if (value == 9) return "j";
	if (value == 10) return "k";
	if (value == 11) return "l";
	if (value == 12) return "m";
	if (value == 13) return "n";
	if (value == 14) return "o";
	if (value == 15) return "p";
	if (value == 16) return "q";
	if (value == 17) return "r";
	if (value == 18) return "s";
	if (value == 19) return "t";
	if (value == 20) return "u";
	if (value == 21) return "v";
	if (value == 22) return "w";
	if (value == 23) return "x";
	if (value == 24) return "y";
	if (value == 25) return "z";
	if (value == 26) return "A";
	if (value == 27) return "B";
	if (value == 28) return "C";
	if (value == 29) return "D";
	if (value == 30) return "E";
	if (value == 31) return "F";
	if (value == 32) return "G";
	if (value == 33) return "H";
	if (value == 34) return "I";
	if (value == 35) return "J";
	if (value == 36) return "K";
	if (value == 37) return "L";
	if (value == 38) return "M";
	if (value == 39) return "N";
	if (value == 40) return "O";
	if (value == 41) return "P";
	if (value == 42) return "Q";
	if (value == 43) return "R";
	if (value == 44) return "S";
	if (value == 45) return "T";
	if (value == 46) return "U";
	if (value == 47) return "V";
	if (value == 48) return "W";
	if (value == 49) return "X";
	if (value == 50) return "Y";
	if (value == 51) return "Z";
	if (value == 52) return "1";
	if (value == 53) return "2";
	if (value == 54) return "3";
	if (value == 55) return "4";
	if (value == 56) return "5";
	if (value == 57) return "6";
	if (value == 58) return "7";
	if (value == 59) return "8";
	if (value == 60) return "9";
	if (value == 61) return "0a";
	if (value == 62) return "0b";
	if (value == 63) return "0c";
	if (value == 64) return "0d";
	if (value == 65) return "0e";
	if (value == 66) return "0f";
	if (value == 67) return "0g";
	if (value == 68) return "0h";
	if (value == 69) return "0i";
	if (value == 70) return "0j";
	if (value == 71) return "0k";
	if (value == 72) return "0l";
	if (value == 73) return "0m";
	if (value == 74) return "0n";
	if (value == 75) return "0o";
	if (value == 76) return "0p";
	if (value == 77) return "0q";
	if (value == 78) return "0r";
	if (value == 79) return "0s";
	if (value == 80) return "0t";
	if (value == 81) return "0u";
	if (value == 82) return "0v";
	if (value == 83) return "0w";
	if (value == 84) return "0x";
	if (value == 85) return "0y";
	if (value == 86) return "0z";
	if (value == 87) return "0A";
	if (value == 88) return "0B";
	if (value == 89) return "0C";
	if (value == 90) return "0D";
	if (value == 91) return "0E";
	if (value == 92) return "0F";
	if (value == 93) return "0G";
	if (value == 94) return "0H";
	if (value == 95) return "0I";
	if (value == 96) return "0J";
	if (value == 97) return "0K";
	if (value == 98) return "0L";
	if (value == 99) return "0M";
	if (value == 100) return "0N";
	if (value == 101) return "0O";
	if (value == 102) return "0P";
	if (value == 103) return "0Q";
	if (value == 104) return "0R";
	if (value == 105) return "0S";
	if (value == 106) return "0T";
	if (value == 107) return "0U";
	if (value == 108) return "0V";
	if (value == 109) return "0W";
	if (value == 110) return "0X";
	if (value == 111) return "0Y";
	if (value == 112) return "0Z";
	return "a";
}

