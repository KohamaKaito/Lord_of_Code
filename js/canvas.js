// canvasの設定
var canvas = document.getElementById( 'canvas' );

canvas.width = window.innerWidth/2;	    // canvasの横幅
canvas.height = window.innerHeight;	    // canvasの縦幅

// コンテキストを取得
var ctx = canvas.getContext( '2d' );

// プレイヤービューのオブジェクトを作成
var pv = new PlayerView('images/player_north.png')
pv.x = canvas.width/7 * 3;
pv.y = canvas.height/7 * 4;

// マップビューのオブジェクトを作成
var mv = new MapView('images/map1.png')




// メインループ
function main() {

    // 画像を表示
    ctx.drawImage( mv.img, mv.x, mv.y, canvas.width, canvas.height);
    ctx.drawImage( pv.img, pv.x, pv.y, canvas.width/7, canvas.height/7);


    requestAnimationFrame( main );
}
// ページと依存している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);





