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
titleText.on('touchstart', toGame);
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
clearText.on('touchstart', toNext);
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
                const test_int = 0;
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

//現在実行中のアニメーションをコンテナから取り除く関数
function resetAnimChild(stage, playerView) {
    if(stage.children.includes(playerView.anim0)) {
        stage.removeChild(playerView.anim0)
    } else if(stage.children.includes(playerView.anim1)){
        stage.removeChild(playerView.anim1) 
    } else if(stage.children.includes(playerView.anim2)){
        stage.removeChild(playerView.anim2) 
    } else if(stage.children.includes(playerView.anim3)){
        stage.removeChild(playerView.anim3) 
    }    
}

/*
全ステージで共通のリセットする関数
goal（宝箱）はgameControllerの中に入れてすっきりさせたい

ステージ毎の違いがある場合は引数を増やして対応
*/
function initializeStage(stage, gameController, goal){

    //アニメーション中の騎士くんをコンテナ（stage）から取り除く
    this.resetAnimChild(stage,gameController.playerView)

    //ほか、立ち止まってる騎士くん、所持アイテム数表示、アイテムなどをコンテナから取り除く
    stage.removeChild(gameController.playerView.player, gameController.itemView.owned_text, goal) 


    //gameControllerの中で、初期化が必要なものを初期化
    //ここの初期化値にステージ毎の違いがある場合は引数を増やすのもありかも
    gameController.playerModel = new Player(3,4,0);
    gameController.playerView = new PlayerView('images/player0_0.png', GameWindowWidth, GameWindowHeight);
    gameController.item = new Item(0,1)


    //上で取り除いた、立ち止まってる騎士くん、所持アイテム数表示、アイテムなどを改めて描画
    //gameControllerを初期化した後のタイミングでこれをしないと、初期化前の座標でまた描画してしまう
    stage.addChild(gameController.playerView.player, gameController.itemView.owned_text, goal);

    //アニメーション処理に用いるlistNumとactionFlagを初期化
    gameController.listNum = 0
    gameController.actionFlag = 0
}

//リセットボタンを押した時の挙動
function onClickReset(){
    //k（アニメーション中か判断する変数？）とj（前進アニメーションの長さを制御する変数？）を初期化
    k = 0;
    j = 0;

    switch (stageNum){
        case 1:
            initializeStage(stage01, gameController01, goal01)
            break
            
        case 2:
            initializeStage(stage02, gameController02, goal02);
            break
    }
}

//実行ボタンを押した時の挙動
function onClickRun(workspace){
    switch (stageNum){
        case 1:
            gameController01.doCode(workspace);
            break
        case 2:
            gameController02.doCode(workspace);
            break
    }
}