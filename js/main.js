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
titleText.on('pointertap', toGame);
titleText.x = GameWindowWidth/2 - titleText.width/2;
titleText.y = GameWindowWidth/2 - titleText.height/2;
titleScene.addChild(titleText);
// あとで消す----------✂︎
let to3 = new PIXI.Text("stage3");
to3.interactive = true;
to3.buttonMode = true;
to3.on('pointertap', toStage3);
to3.x = GameWindowWidth/1.3;
to3.y = GameWindowWidth/2 + GameWindowWidth/2;
titleScene.addChild(to3);
// -------------------
app.stage.addChild(titleScene);
function toGame(){
    app.stage.removeChild(titleScene);
    app.stage.addChild(stage01);
    //app.stage.addChild(stage03);
    //stageNum = 3;
}
// あとで消す----------✂︎
function toStage3(){
    stageNum = 3;
    app.stage.removeChild(titleScene);
    app.stage.addChild(stage03);
}
// -------------------

//ステージ３のショートカットの改善およびステージセレクト機能用の関数
function selectStage(destNum){
    stageNum = destNum;
    app.stage.removeChild(titleScene);
    app.stage.addChild(stageList[stageNum - 1]);
}



// クリア画面の設定
const clearScene = new PIXI.Container();
let clearText = new PIXI.Text("クリア！！ \n Next Stage");
clearText.interactive = true;
clearText.buttonMode = true;
clearText.x = GameWindowWidth/2 - titleText.width/2;
clearText.y = GameWindowHeight/2 - titleText.height/2;
clearText.on('pointertap', toNext);
clearScene.addChild(clearText);
function toNext(){
    app.stage.removeChild(clearScene);
    if(stageNum == stageList.length){
        //最後のステージならStageNumの初期化とゲーム進行状況をリセットし、タイトル画面に遷移
        stageNum = 1;
        allInitialize()
        app.stage.addChild(titleScene);
        //クリア画面用のテキストを初期化
        clearText.text = "クリア！！ \n Next Stage"
    } else {
        //次のステージへ遷移
        stageNum += 1;
        app.stage.addChild(stageList[stageNum - 1]);
        if(stageNum == stageList.length){
            //最終クリア画面用のテキストを設定
            clearText.text = "完全制覇！！ \n Return to Title"
        }
    }
}



// ステージ１の設定
const stage01 = new PIXI.Container();
let playerModel01 = new Player(3,4,0);
let mapModel01 = new Map();
let mapView01 = new MapView('images/map01.png', GameWindowWidth, GameWindowHeight);
stage01.addChild(mapView01.map);
let playerView01 = new PlayerView(GameWindowWidth, GameWindowHeight);
stage01.addChild(playerView01.anim0);
let itemCount01 = new ItemCount(0, 1);
let itemCountView01 = new ItemCountView(0,1, GameWindowWidth, GameWindowHeight);
stage01.addChild(itemCountView01.needed_text)
stage01.addChild(itemCountView01.owned_text)
let itemView01 = new ItemView("images/goal.png", GameWindowWidth, GameWindowHeight, 2.85, 1.75);
stage01.addChild(itemView01.item);
let gameController01 = new GameController(playerView01, playerModel01, mapView01, mapModel01, itemView01, itemCount01, itemCountView01);
mapModel01.map =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM,        MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]



// ステージ２の設定
const stage02 = new PIXI.Container();
let playerModel02 = new Player(3,4,0);
let mapModel02 = new Map();
let mapView02 = new MapView('images/map02.png', GameWindowWidth, GameWindowHeight);
stage02.addChild(mapView02.map);
let playerView02 = new PlayerView(GameWindowWidth, GameWindowHeight);
stage02.addChild(playerView02.anim0);
let itemCount02 = new ItemCount(0, 1);
let itemCountView02 = new ItemCountView(0,1, GameWindowWidth, GameWindowHeight);
stage02.addChild(itemCountView02.needed_text)
stage02.addChild(itemCountView02.owned_text)
let itemView02 = new ItemView('images/goal.png', GameWindowWidth, GameWindowHeight,6.5,1.9);
stage02.addChild(itemView02.item);
let gameController02 = new GameController(playerView02, playerModel02, mapView02, mapModel02, itemView02, itemCount02, itemCountView02);
mapModel02.map =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM,        MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]



// ステージ3の設定
const stage03 = new PIXI.Container();
let playerModel03 = new Player(3,4,0);
let mapModel03 = new Map();
let mapView03 = new MapView('images/map03.png', GameWindowWidth, GameWindowHeight);
stage03.addChild(mapView03.map);
let playerView03 = new PlayerView(GameWindowWidth, GameWindowHeight);
//stage03.addChild(playerView03.anim0);
let itemCount03 = new ItemCount(0, 1);
let itemCountView03 = new ItemCountView(0,1, GameWindowWidth, GameWindowHeight);
stage03.addChild(itemCountView03.needed_text)
stage03.addChild(itemCountView03.owned_text)
let itemView03 = new ItemView('images/goal.png', GameWindowWidth, GameWindowHeight,2.8,2.4);
stage03.addChild(itemView03.item);
stage03.addChild(playerView03.anim0);
let gameController03 = new GameController(playerView03, playerModel03, mapView03, mapModel03, itemView03, itemCount03, itemCountView03);
mapModel03.map =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_ITEM,        MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]




let stageList = [stage01, stage02, stage03]
let gameControllerList = [gameController01, gameController02, gameController03]
let stageNum = 1;
let direction = 0;

app.ticker.add(main);

function main(delta){
    let gc = gameControllerList[stageNum-1];
    let stage = stageList[stageNum-1];

    if(gc.actionFlag){

        // アイテム数が満たしてたらクリア遷移
        gc.checkClear(stage);

        // 宝箱を最前面にする
        if(stageNum == 1 || stageNum == 2){
            stage.removeChild(gc.itemView.item);
            stage.addChild(gc.itemView.item);
        }

        // ブロックリストを1つずつ実行
        switch (gc.blockList[gc.listNum]){

            case "go_ahead":
                gc.goPlayer(stage);
                break;

            case "turn_right":
                gc.turnPlayer(stage);
                break;

            case "pick_up":
                gc.pickUpPlayer(stage);
                break;
        }
    }
}



//現在実行中のアニメーションを停止する関数(未使用)
//modelとview統合後に使いたい
function stopAnimChild(stage, playerView) {
    if(stage.children.includes(playerView.anim0)) {
        playerView.anim0.stop();
    } else if(stage.children.includes(playerView.anim1)){
        playerView.anim1.stop();
    } else if(stage.children.includes(playerView.anim2)){
        playerView.anim2.stop();
    } else if(stage.children.includes(playerView.anim3)){
        playerView.anim3.stop();
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
ステージ毎の違いがある場合は引数を増やして対応できそう
*/
function initializeStage(stage, gameController){

    //アニメーション中の騎士くんをコンテナ（stage）から取り除く
    this.resetAnimChild(stage,gameController.playerView)

    //ほか、立ち止まってる騎士くん、所持アイテム数表示、アイテムなどをコンテナから取り除く
    stage.removeChild(gameController.playerView.anim0, gameController.itemCountView.owned_text, gameController.itemView.item)


    //gameControllerの中で、初期化が必要なものを初期化
    //ここの初期化値にステージ毎の違いがある場合は引数を増やすのもありかも
    gameController.playerModel = new Player(3,4,0);
    gameController.playerView = new PlayerView(GameWindowWidth, GameWindowHeight);
    gameController.itemCount = new ItemCount(0,1)
    gameController.itemCountView = new ItemCountView(0,1, GameWindowWidth, GameWindowHeight);


    //上で取り除いた、立ち止まってる騎士くん、所持アイテム数表示、アイテムなどを改めて描画
    //gameControllerを初期化した後のタイミングでこれをしないと、初期化前の座標でまた描画してしまう
    stage.addChild(gameController.playerView.anim0, gameController.itemCountView.owned_text, gameController.itemView.item);

    //アニメーション処理に用いるlistNumとactionFlagを初期化
    gameController.listNum = 0;
    gameController.actionFlag = false;
}

//title画面に戻る時に用いる、全てのステージの進行状況をリセットする関数
//要は全ステージでリセットボタン押すのと同じ
//これがないと、再度ゲームを開始した際に、クリア時の進行状況のままになる
function allInitialize(){
    for(let num = 0; num < stageList.length; num++){
        initializeStage(stageList[num], gameControllerList[num])
    }
}


//リセットボタンを押した時の挙動
function onClickReset(){
    initializeStage(stageList[stageNum - 1], gameControllerList[stageNum - 1])
}


//実行ボタンを押した時の挙動
function onClickRun(workspace){
    gameControllerList[stageNum - 1].doCode(workspace,stageList[stageNum - 1]);
}
