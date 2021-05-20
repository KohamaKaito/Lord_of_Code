// canvasの設定
/*
let canvas = document.getElementById( 'canvas' );
canvas.width = window.innerWidth/2;	    // canvasの横幅
canvas.height = window.innerHeight;	    // canvasの縦幅
*/

const app = new PIXI.Application({
    width: window.innerWidth/2, height: window.innerHeight, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);


// プレイヤー(Model)のインスタンス生成
let playerModel = new Player(3,4,0);
// マップ(Model)のインスタンス生成
let mapState = new MapState();
let mapModel = new Map(mapState);

// マップ(View)のインスタンス生成
let mapView = new MapView('images/map1.png', window.innerWidth/2, window.innerHeight);
container.addChild(mapView.map);

// プレイヤー(View)インスタンス生成
let playerView = new PlayerView('images/player_north.png', window.innerWidth/2, window.innerHeight);
container.addChild(playerView.player);


// (Controller)のインスタンス生成
let gameController = new GameController(playerView,playerModel,mapView,mapModel);
gameController.setStageInfo(1, 1) //ステージ１、必要取得アイテム数１

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
/*
function main() {
    gameController.drawAll();
    requestAnimationFrame( main );
}
 */

function onClick(workspace){
    gameController.doCode(workspace);
}

// ページと依存している全てのデータが読み込まれたら、メインループ開始
//addEventListener('load', main(), false);
