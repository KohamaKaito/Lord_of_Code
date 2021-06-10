// window の設定
let gameWindow = document.getElementById("game_window");
let GameWindowHeight = window.innerHeight;
let GameWindowWidth = window.innerWidth/2;
let app = new PIXI.Application({
    width: GameWindowWidth,
    height: GameWindowHeight,
    backgroundColor: 0x1099bb,});
gameWindow.appendChild(app.view);



// タイトル画面の設定
const titleScene = new PIXI.Container();
let titleText = new PIXI.Text("タイトル \n \n START");
titleText.interactive = true;
titleText.buttonMode = true;
titleText.on('click', toGame);
titleText.x = GameWindowWidth/2 - titleText.width/2;
titleText.y = GameWindowWidth/2 - titleText.height/2;
titleScene.addChild(titleText);
app.stage.addChild(titleScene);
function toGame(){
    app.stage.removeChild(titleScene);
    app.stage.addChild(stage01);
}



// クリア画面の設定
const clearScene = new PIXI.Container();
let clearText = new PIXI.Text("クリア！！ \n Next Stage");
clearText.interactive = true;
clearText.buttonMode = true;
clearText.x = GameWindowWidth/2 - titleText.width/2;
clearText.y = GameWindowHeight/2 - titleText.height/2;
clearText.on('click', toNext);
clearScene.addChild(clearText);
function toNext(){
    app.stage.removeChild(clearScene);
    app.stage.addChild(stage02);
    stageNum += 1;
}



// ステージ１の設定
const stage01 = new PIXI.Container();
let playerModel01 = new Player(3,4,0);
let mapModel01 = new Map();
let mapView01 = new MapView('images/map01.png', GameWindowWidth, GameWindowHeight);
stage01.addChild(mapView01.map);
let playerView01 = new PlayerView('images/player0_0.png', GameWindowWidth, GameWindowHeight);
stage01.addChild(playerView01.player);
let item01 = new Item(0, 1);
let itemView01 = new ItemView(0,1);
stage01.addChild(itemView01.needed_text)
stage01.addChild(itemView01.owned_text)
let gameController01 = new GameController(playerView01, playerModel01, mapView01, mapModel01, item01, itemView01);
gameController01.setStageInfo(1, 1) //ステージ１、必要取得アイテム数１
mapModel01.map =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM,        MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]
let goalImage01 = new PIXI.Texture.from("images/goal.png");
goal01 = new PIXI.Sprite(goalImage01);
goal01.x = GameWindowWidth / 2.85;
goal01.y = GameWindowHeight / 1.75;
goal01.width = GameWindowWidth/8;
goal01.height = GameWindowHeight/8;
stage01.addChild(goal01);



// ステージ２の設定
const stage02 = new PIXI.Container();
let playerModel02 = new Player(3,4,0);
let mapModel02 = new Map();
let mapView02 = new MapView('images/map02.png', GameWindowWidth, GameWindowHeight);
stage02.addChild(mapView02.map);
let playerView02 = new PlayerView('images/player0_0.png', GameWindowWidth, GameWindowHeight);
stage02.addChild(playerView02.player);
let item02 = new Item(0, 1);
let itemView02 = new ItemView(0,1);
stage02.addChild(itemView02.needed_text)
stage02.addChild(itemView02.owned_text)
let gameController02 = new GameController(playerView02, playerModel02, mapView02, mapModel02, item02, itemView02);
gameController02.setStageInfo(1, 1) //ステージ１、必要取得アイテム数１
mapModel02.map =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM,        MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]
let goalImage02 = new PIXI.Texture.from("images/goal.png");
goal02 = new PIXI.Sprite(goalImage02);
goal02.x = GameWindowWidth / 6.5;
goal02.y = GameWindowHeight / 1.9;
goal02.width = GameWindowWidth/8;
goal02.height = GameWindowHeight/8;
stage02.addChild(goal02);




// メインループ
let stageNum = 1;
let k = 0;
let j = 0;
let i = 0;
let direction = 0;


app.ticker.add(animate);
let amountTime = 0;

function animate(delta) {
    if(gameController01.actionFlag == 1){
        gameControl(gameController01, stage01, goal01);
    }

    if(gameController02.actionFlag == 1){
        gameControl(gameController02, stage02, goal02);
    }
}

function gameControl(gameController,stage,goal){
    if(k == 0){
        // アニメーションをスタート(1回のみ実行)
        stage.removeChild(gameController.playerView.player);
        gameController.playerView.anim0.play();
        gameController.playerView.anim0.x = gameController.playerView.playerX;
        gameController.playerView.anim0.y = gameController.playerView.playerY;
        stage.addChild(gameController.playerView.anim0);
        k += 1;
    }
    // 宝箱を最前面にする
    stage.removeChild(goal);
    stage.addChild(goal);
    // ブロックリストを1つずつ実行
    switch (gameController.blockList[gameController.listNum]){
        case "go_ahead":
            if(j < 150){
                gameController.playerView.goAhead();
                j += 1;
            } else {
                j = 0;
                gameController.listNum += 1;
            }
            break;

        case "turn_right":
            //gameController.playerView.turn_right(stage);
            switch (gameController.playerView.direction){
                case 0:
                    gameController.playerView.direction = 1;
                    stage.removeChild(gameController.playerView.anim0);
                    gameController.playerView.anim1.x = gameController.playerView.playerX
                    gameController.playerView.anim1.y = gameController.playerView.playerY
                    gameController.playerView.anim1.play();
                    stage.addChild(gameController.playerView.anim1);
                    break;
                case 1:
                    gameController.playerView.direction = 2;
                    stage.removeChild(gameController.playerView.anim1);
                    gameController.playerView.anim2.x = gameController.playerView.playerX
                    gameController.playerView.anim2.y = gameController.playerView.playerY
                    gameController.playerView.anim2.play();
                    stage.addChild(gameController.playerView.anim2);
                    break;
                case 2:
                    gameController.playerView.direction = 3;
                    stage.removeChild(gameController.playerView.anim2);
                    gameController.playerView.anim3.x = gameController.playerView.playerX
                    gameController.playerView.anim3.y = gameController.playerView.playerY
                    gameController.playerView.anim3.play();
                    stage.addChild(gameController.playerView.anim3);
                    break;
                case 3:
                    gameController.playerView.direction = 0;
                    stage.removeChild(gameController.playerView.anim3);
                    gameController.playerView.anim0.x = gameController.playerView.playerX
                    gameController.playerView.anim0.y = gameController.playerView.playerY
                    gameController.playerView.anim0.play();
                    stage.addChild(gameController.playerView.anim0);
                    break;
            }
            gameController.listNum += 1;
            break;

        case "pick_up":
            if(gameController.mapModel.getState(gameController.playerModel.x,gameController.playerModel.y) == 3){
                //stage.removeChild(goal);
                //stage.addChild(goalScene);
                app.stage.removeChild(stage);
                app.stage.addChild(clearScene);
                gameController.actionFlag = 0;
                k = 0;
                i = 0;
            }
            gameController.listNum += 1;
            break;
    }
}



function onClick(workspace){
    switch (stageNum){
        case 1:
            gameController01.doCode(workspace);
            break
        case 2:
            gameController02.doCode(workspace);
            break
    }
}
