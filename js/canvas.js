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


// キーボードのオブジェクトを作成
var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';


// メインループ
function main() {

    // 画像を表示
    ctx.drawImage( mv.img, mv.x, mv.y, canvas.width, canvas.height);
    ctx.drawImage( pv.img, pv.x, pv.y, canvas.width/7, canvas.height/7);

    addEventListener("keydown", keydownfunc, false);
    addEventListener("keyup", keyupfunc, false);

    // 方向キーが押されている場合は、プレイヤーが移動する
    if ( pv.move === 0 ) {
        if ( key.left === true ) {
            pv.move = 32;
            key.push = 'left';
        }
        if ( key.up === true ) {
            pv.move = 32;
            key.push = 'up';
        }
        if ( key.right === true ) {
            pv.move = 32;
            key.push = 'right';
        }
        if ( key.down === true ) {
            pv.move = 32;
            key.push = 'down';
        }
    }
    // player.moveが0より大きい場合は、4pxずつ移動を続ける
    if (pv.move > 0) {
        pv.move -= 4;
        if ( key.push === 'left' ) pv.x -= 4;
        if ( key.push === 'up' ) pv.y -= 4;
        if ( key.push === 'right' ) pv.x += 4;
        if ( key.push === 'down' ) pv.y += 4;
    }

    requestAnimationFrame( main );
}
// ページと依存している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);

// キーボードが押されたときに呼び出される関数
function keydownfunc( event ) {
    var key_code = event.keyCode;
    if( key_code === 37 ) key.left = true;
    if( key_code === 38 ) key.up = true;
    if( key_code === 39 ) key.right = true;
    if( key_code === 40 ) key.down = true;
    event.preventDefault();
}

// キーボードが放されたときに呼び出される関数
function keyupfunc( event ) {
    var key_code = event.keyCode;
    if( key_code === 37 ) key.left = false;
    if( key_code === 38 ) key.up = false;
    if( key_code === 39 ) key.right = false;
    if( key_code === 40 ) key.down = false;
}
