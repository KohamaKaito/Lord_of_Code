// canvasの設定
var canvas = document.getElementById( 'canvas' );
canvas.width = window.innerWidth/2;	    // canvasの横幅
canvas.height = window.innerHeight;	    // canvasの縦幅

// プレイヤー(Model)のインスタンス生成
var pm = new Player(3,4,0);
// マップ(Model)のインスタンス生成
var ms = new MapState();
var mm = new Map(ms);
// プレイヤー(View)インスタンス生成
var pv = new PlayerView(canvas,'images/player_north.png');
// マップ(View)のインスタンス生成
var mv = new MapView(canvas,'images/map1.png');
// (Controller)のインスタンス生成
var gc = new GameController(pv,pm,mv,mm);

// ステージ１の生成
mm.map =  [
    [ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE],
    [ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE],
    [ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.GOAL,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE],
    [ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE],
    [ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE],
    [ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE],
    [ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE,ms.state.CAN_NOT_MOVE],
    ]


// メインループ
function main() {
    gc.draw_all();
    requestAnimationFrame( main );
}

// ページと依存している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);
