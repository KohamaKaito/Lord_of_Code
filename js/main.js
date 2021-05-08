// メインループ
function main() {
    gc.draw_all();
    requestAnimationFrame( main );
}

// canvasの設定
var canvas = document.getElementById( 'canvas' );
canvas.width = window.innerWidth/2;	    // canvasの横幅
canvas.height = window.innerHeight;	    // canvasの縦幅

// コンテキストを取得
// var ctx = canvas.getContext( '2d' );


// プレイヤー(Model)のインスタンス生成
var pm = new Player(4,5,0);
// マップ(Model)のインスタンス作成
// var mm = new Map();
// プレイヤー(View)インスタンス生成
var pv = new PlayerView(canvas,'images/player_north.png');
// マップ(View)のインスタンス作成
var mv = new MapView(canvas,'images/map1.png');
// (Controller)のインスタンス作成
var gc = new GameController(pv,pm,mv);

// ページと依存している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);
