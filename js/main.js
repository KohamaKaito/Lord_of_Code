// canvasの設定
var canvas = document.getElementById( 'canvas' );
canvas.width = window.innerWidth/2;	    // canvasの横幅
canvas.height = window.innerHeight;	    // canvasの縦幅

// プレイヤー(Model)のインスタンス生成
var playerModel = new Player(3,4,0);
// マップ(Model)のインスタンス生成
var mapState = new MapState();
var mapModel = new Map(mapState);
// プレイヤー(View)インスタンス生成
var playerView = new PlayerView(canvas,'images/player_north.png');
// マップ(View)のインスタンス生成
var mapView = new MapView(canvas,'images/map1.png');
// (Controller)のインスタンス生成
var gameController = new GameController(playerView,playerModel,mapView,mapModel);

// ステージ１の生成
mapModel.map =  [
    [mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE],
    [mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE],
    [mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.GOAL,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE],
    [mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE],
    [mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE],
    [mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE],
    [mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE,mapState.state.CAN_NOT_MOVE],
    ]


// メインループ
function main() {
    gameController.drawAll();
    requestAnimationFrame( main );
}

function onClick(workspace){
    gameController.doCode(workspace);
}

// ページと依存している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);