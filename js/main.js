// canvasの設定
var canvas = document.getElementById( 'canvas' );
canvas.width = window.innerWidth/2;	    // canvasの横幅
canvas.height = window.innerHeight;	    // canvasの縦幅

// コンテキストを取得
// var ctx = canvas.getContext( '2d' );

// プレイヤービューのオブジェクトを作成
var pv = new PlayerView(canvas,'images/player_north.png');
// プレイヤーモデルのオブジェクトを生成
var pm = new Player(4,5,0);
// マップビューのオブジェクトを作成
var mv = new MapView(canvas,'images/map1.png');
// マップモデルのオブジェクトを作成
// var mm = new Map();
// コントローラーのオブジェクトを作成
var gc = new GameController(pv,pm,mv);


// メインループ
function main() {

    gc.draw_all();
    requestAnimationFrame( main );
}


// ページと依存している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);