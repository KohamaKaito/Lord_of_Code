// window の設定
let gameWindow = document.getElementById("game_window");
let GameWindowHeight = window.innerHeight;
let GameWindowWidth = window.innerWidth/2;
let app = new PIXI.Application({
    width: GameWindowWidth,
    height: GameWindowHeight,
    backgroundColor: 0x1099bb,
});
gameWindow.appendChild(app.view);
const stage = new PIXI.Container();
//app.stage.addChild(stage);


const title = new PIXI.Container();

let titleText = new PIXI.Text("TITLE");
titleText.interactive = true;
titleText.buttonMode = true;
titleText.on('click', change);
title.addChild(titleText);
app.stage.addChild(title);

function change(){
    app.stage.removeChild(title);
    app.stage.addChild(stage);
}


// プレイヤー(Model)のインスタンス生成
let playerModel = new Player(3,4,0);
// マップ(Model)のインスタンス生成
let mapModel = new Map();

// マップ(View)のインスタンス生成
let mapView = new MapView('images/map02.png', GameWindowWidth, GameWindowHeight);
stage.addChild(mapView.map);

// プレイヤー(View)インスタンス生成
let playerView = new PlayerView('images/player0_0.png', GameWindowWidth, GameWindowHeight);
stage.addChild(playerView.player);

let item = new Item(0, 1);
let itemView = new ItemView(0,1);
stage.addChild(itemView.needed_text)
stage.addChild(itemView.owned_text)

//(Controller)のインスタンス生成
let gameController = new GameController(playerView, playerModel, mapView, mapModel, item, itemView);
gameController.setStageInfo(1, 1) //ステージ１、必要取得アイテム数１



// ステージ１の生成
mapModel.map =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM,        MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]




let goalImage = new PIXI.Texture.from("images/goal.png");
goal = new PIXI.Sprite(goalImage);
goal.x = GameWindowWidth / 6.5;
goal.y = GameWindowHeight / 1.9;
goal.width = GameWindowWidth/8;
goal.height = GameWindowHeight/8;
stage.addChild(goal);


let goalSceneImage = new PIXI.Texture.from("images/goalScene.png");
goalScene = new PIXI.Sprite(goalSceneImage);
goalScene.x = 0;
goalScene.y = 0;
goalScene.width = GameWindowWidth;
goalScene.height = GameWindowHeight;


const clearScene = new PIXI.Container();

let clearText = new PIXI.Text("Next Stage");
clearText.interactive = true;
clearText.buttonMode = true;
clearText.on('click', change1);
clearScene.addChild(clearText);


function change1(){
    app.stage.removeChild(clearScene);
    playerView.reset(GameWindowWidth, GameWindowHeight);
    let image = new PIXI.Texture.from("images/map01.png");
    map = new PIXI.Sprite(image);
    map.x = 0;
    map.y = 0;
    map.width = GameWindowWidth;
    map.height = GameWindowHeight;
    app.stage.addChild(stage);
}



let k = 0;
let j = 0;
let i = 0;
let direction = 0;


// フレーム更新時の処理(ループ処理)を追加する
app.ticker.add(animate);
let amountTime = 0;

// 処理の定義
function animate(delta) {
    if(gameController.actionFlag == 1){

        // 歩行アニメーションの開始(一回のみ実行)
        if(k == 0){
            stage.removeChild(playerView.player);
            playerView.anim0.play();
            playerView.anim0.x = playerView.playerX;
            playerView.anim0.y = playerView.playerY;
            stage.addChild(playerView.anim0);
            k += 1;
        }
        // 宝箱を最前面にするため
        stage.removeChild(goal);
        stage.addChild(goal);

        switch (gameController.blockList[gameController.listNum]){
            case "go_ahead":
                if(j < 150){
                    playerView.goAhead();
                    j += 1;
                } else {
                    j = 0;
                    gameController.listNum += 1;
                }
                break;

            case "turn_right":
                playerView.turnRight();
                gameController.listNum += 1;
                break;

            case "pick_up":
                if(mapModel.getState(playerModel.x,playerModel.y) == 3){
                    //stage.removeChild(goal);
                    //stage.addChild(goalScene);
                    app.stage.removeChild(stage);
                    app.stage.addChild(clearScene);
                }
                gameController.listNum += 1;
                break;
        }
    }
}

function onClick(workspace){
    gameController.doCode(workspace);
}