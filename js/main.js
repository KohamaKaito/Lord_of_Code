// window の設定
let game_window = document.getElementById("game_window");

let GameWindowHeight = window.innerHeight;
let GameWindowWidth = window.innerWidth/2;

let app = new PIXI.Application({
    width: GameWindowWidth,     // スクリーン(ビュー)横幅
    height: GameWindowHeight,    // スクリーン(ビュー)縦幅
    backgroundColor: 0x1099bb,  // 背景色 16進 0xRRGGBB);
});
game_window.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);


// プレイヤー(Model)のインスタンス生成
let playerModel = new Player(3,4,0);
// マップ(Model)のインスタンス生成
let mapState = new MapState();
let mapModel = new Map(mapState);

// マップ(View)のインスタンス生成
let mapView = new MapView('images/map1.png', GameWindowWidth, GameWindowHeight);
container.addChild(mapView.map);

// プレイヤー(View)インスタンス生成
let playerView = new PlayerView('images/player_north.png', GameWindowWidth/7, GameWindowWidth/7);
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

function onClick(workspace){
    gameController.doCode(workspace);
}
