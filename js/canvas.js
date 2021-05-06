//canvasの設定
var canvas = document.getElementById( 'canvas' );
var width = window.innerWidth/2;
var height = window.innerHeight;
canvas.width = width;		//canvasの横幅
canvas.height = height;	//canvasの縦幅

//コンテキストを取得
var ctx = canvas.getContext( '2d' );
//ctx.scale(0.5, 0.5)

//プレイヤーのオブジェクトを作成
var player = new Object();
player.img = new Image();
player.img.src = 'images/player.png';
console.log(player.img.width)
console.log(player.img.height)
player.x = canvas.width/2 - 59;
player.y = canvas.height/2 - 61;
player.move = 0;



//キーボードのオブジェクトを作成
var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

//メインループ
function main() {
    //塗りつぶす色を指定（してい）
    ctx.fillStyle = "rgb( 0, 0, 0 )";
    //塗りつぶす
    ctx.fillRect(0, 0, width, height);

    //画像を表示
    ctx.drawImage( player.img, player.x, player.y );

    addEventListener("keydown", keydownfunc, false);
    addEventListener("keyup", keyupfunc, false);

    //方向キーが押されている場合は、プレイヤーが移動する
    if ( player.move === 0 ) {
        if ( key.left === true ) {
            player.move = 32;
            key.push = 'left';
        }
        if ( key.up === true ) {
            player.move = 32;
            key.push = 'up';
        }
        if ( key.right === true ) {
            player.move = 32;
            key.push = 'right';
        }
        if ( key.down === true ) {
            player.move = 32;
            key.push = 'down';
        }
    }
    //player.moveが0より大きい場合は、4pxずつ移動を続ける
    if (player.move > 0) {
        player.move -= 4;
        if ( key.push === 'left' ) player.x -= 4;
        if ( key.push === 'up' ) player.y -= 4;
        if ( key.push === 'right' ) player.x += 4;
        if ( key.push === 'down' ) player.y += 4;
    }

    requestAnimationFrame( main );
}
//ページと依存している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);

//キーボードが押されたときに呼び出される関数
function keydownfunc( event ) {
    var key_code = event.keyCode;
    if( key_code === 37 ) key.left = true;
    if( key_code === 38 ) key.up = true;
    if( key_code === 39 ) key.right = true;
    if( key_code === 40 ) key.down = true;
    event.preventDefault();
}

//キーボードが放されたときに呼び出される関数
function keyupfunc( event ) {
    var key_code = event.keyCode;
    if( key_code === 37 ) key.left = false;
    if( key_code === 38 ) key.up = false;
    if( key_code === 39 ) key.right = false;
    if( key_code === 40 ) key.down = false;
}