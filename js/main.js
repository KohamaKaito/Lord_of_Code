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
const title = new PIXI.Container();
let titleText = new PIXI.Text("TITLE");
titleText.interactive = true;
titleText.buttonMode = true;
titleText.on('click', change);
title.addChild(titleText);
app.stage.addChild(title);

let stageNum = 1;


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
// ステージ１の生成
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
// ステージ２の生成
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




const clearScene = new PIXI.Container();

let clearText = new PIXI.Text("Next Stage");
clearText.interactive = true;
clearText.buttonMode = true;
clearText.on('click', change1);
clearScene.addChild(clearText);


function change1(){
    app.stage.removeChild(clearScene);
    app.stage.addChild(stage02);
    stageNum += 1;
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
    if(gameController01.actionFlag == 1){

        // 歩行アニメーションの開始(一回のみ実行)
        if(k == 0){
            stage01.removeChild(playerView01.player);
            playerView01.anim0.play();
            playerView01.anim0.x = playerView01.playerX;
            playerView01.anim0.y = playerView01.playerY;
            stage01.addChild(playerView01.anim0);
            k += 1;
        }
        // 宝箱を最前面にするため
        stage01.removeChild(goal01);
        stage01.addChild(goal01);

        switch (gameController01.blockList[gameController01.listNum]){
            case "go_ahead":
                if(j < 150){
                    playerView01.goAhead();
                    j += 1;
                } else {
                    j = 0;
                    gameController01.listNum += 1;
                }
                break;

            case "turn_right":
                switch (playerView01.direction){
                    case 0:
                        playerView01.direction = 1;
                        stage01.removeChild(playerView01.anim0);
                        playerView01.anim1.x = playerView01.playerX
                        playerView01.anim1.y = playerView01.playerY
                        playerView01.anim1.play();
                        stage01.addChild(playerView01.anim1);
                        break;
                    case 1:
                        playerView01.direction = 2;
                        stage01.removeChild(playerView01.anim1);
                        playerView01.anim2.x = playerView01.playerX
                        playerView01.anim2.y = playerView01.playerY
                        playerView01.anim2.play();
                        stage01.addChild(playerView01.anim2);
                        break;
                    case 2:
                        playerView01.direction = 3;
                        stage01.removeChild(playerView01.anim2);
                        playerView01.anim3.x = playerView01.playerX
                        playerView01.anim3.y = playerView01.playerY
                        playerView01.anim3.play();
                        stage01.addChild(playerView01.anim3);
                        break;
                    case 3:
                        playerView01.direction = 0;
                        stage01.removeChild(playerView01.anim3);
                        playerView01.anim0.x = playerView01.playerX
                        playerView01.anim0.y = playerView01.playerY
                        playerView01.anim0.play();
                        stage01.addChild(playerView01.anim0);
                        break;
                }
                gameController01.listNum += 1;
                break;

            case "pick_up":
                if(mapModel01.getState(playerModel01.x,playerModel01.y) == 3){
                    //stage.removeChild(goal);
                    //stage.addChild(goalScene);
                    app.stage.removeChild(stage01);
                    app.stage.addChild(clearScene);
                    gameController01.actionFlag = 0;
                    k = 0;
                    i = 0;
                }
                gameController01.listNum += 1;
                break;
        }
    }

    if(gameController02.actionFlag == 1){

        // 歩行アニメーションの開始(一回のみ実行)
        if(k == 0){
            stage02.removeChild(playerView02.player);
            playerView02.anim0.play();
            playerView02.anim0.x = playerView02.playerX;
            playerView02.anim0.y = playerView02.playerY;
            stage02.addChild(playerView02.anim0);
            k += 1;
        }
        // 宝箱を最前面にするため
        stage02.removeChild(goal02);
        stage02.addChild(goal02);

        console.log(gameController02.blockList)
        console.log(gameController02.listNum)

        switch (gameController02.blockList[gameController02.listNum]){
            case "go_ahead":
                if(j < 150){
                    playerView02.goAhead();
                    j += 1;
                } else {
                    j = 0;
                    gameController02.listNum += 1;
                }
                break;

            case "turn_right":
                switch (playerView02.direction){
                    case 0:
                        playerView02.direction = 1;
                        stage02.removeChild(playerView02.anim0);
                        playerView02.anim1.x = playerView02.playerX
                        playerView02.anim1.y = playerView02.playerY
                        playerView02.anim1.play();
                        stage02.addChild(playerView02.anim1);
                        break;
                    case 1:
                        playerView02.direction = 2;
                        stage02.removeChild(playerView02.anim1);
                        playerView02.anim2.x = playerView02.playerX
                        playerView02.anim2.y = playerView02.playerY
                        playerView02.anim2.play();
                        stage02.addChild(playerView02.anim2);
                        break;
                    case 2:
                        playerView02.direction = 3;
                        stage02.removeChild(playerView02.anim2);
                        playerView02.anim3.x = playerView02.playerX
                        playerView02.anim3.y = playerView02.playerY
                        playerView02.anim3.play();
                        stage02.addChild(playerView02.anim3);
                        break;
                    case 3:
                        playerView02.direction = 0;
                        stage02.removeChild(playerView02.anim3);
                        playerView02.anim0.x = playerView02.playerX
                        playerView02.anim0.y = playerView02.playerY
                        playerView02.anim0.play();
                        stage02.addChild(playerView02.anim0);
                        break;
                }
                gameController02.listNum += 1;
                break;

            case "pick_up":
                if(mapModel02.getState(playerModel02.x,playerModel02.y) == 3){
                    //stage.removeChild(goal);
                    //stage.addChild(goalScene);
                    app.stage.removeChild(stage02);
                    app.stage.addChild(clearScene);
                }
                gameController02.listNum += 1;
                break;
        }
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

function change(){
    app.stage.removeChild(title);
    app.stage.addChild(stage01);
}