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

const stage1 = new PIXI.Container();

const title = new PIXI.Container();

let hoge = new PIXI.Text("TITLE");
hoge.interactive = true;
hoge.buttonMode = true;
hoge.on('click', change);

function change(){
    app.stage.removeChild(title);
    app.stage.addChild(stage1);
}

title.addChild(hoge)

app.stage.addChild(title);


// プレイヤー(Model)のインスタンス生成
let playerModel = new Player(3,4,0);
// マップ(Model)のインスタンス生成
let mapModel = new Map();

// マップ(View)のインスタンス生成
let mapView = new MapView('images/map1.png', GameWindowWidth, GameWindowHeight);
stage1.addChild(mapView.map);

// プレイヤー(View)インスタンス生成
let playerView = new PlayerView('images/player_north.png', GameWindowWidth/7, GameWindowWidth/7);
stage1.addChild(playerView.player);

let item = new Item(0, 1);
let itemView = new ItemView(0,1);
stage1.addChild(itemView.needed_text)
stage1.addChild(itemView.owned_text)

// (Controller)のインスタンス生成
let gameController = new GameController(playerView, playerModel, mapView, mapModel, item, itemView);
gameController.setStageInfo(1, 1) //ステージ１、必要取得アイテム数１

// ステージ１の生成
mapModel.map =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    ]

function onClick(workspace){
    gameController.doCode(workspace);
}
