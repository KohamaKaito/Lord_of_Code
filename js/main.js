// window の設定
let gameWindow = document.getElementById("game_window");
let GameWindowHeight
let GameWindowWidth
// 縦長と横長で画面比を変える
if(window.innerWidth > window.innerHeight){
    GameWindowHeight = window.innerHeight;
    GameWindowWidth = window.innerWidth /2;
}else {
    GameWindowHeight = window.innerHeight/2;
    GameWindowWidth = window.innerWidth * 0.7865;
}
let app = new PIXI.Application({
    width: GameWindowWidth,
    height: GameWindowHeight,
    backgroundColor: 0xFFFFFF,});
gameWindow.appendChild(app.view);


// ステージ１の設定
let map01 =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM,        MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_MOVE,MAP_CAN_MOVE,MAP_CAN_MOVE,MAP_CAN_MOVE,    MAP_CAN_MOVE,MAP_CAN_MOVE,MAP_ITEM],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]
let mapModel01 = new Map(map01);
let stage01 = new Stage(1, 0, 1, 3, 4, 0, mapModel01)

// ステージ２の設定
let map02 =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]
let mapModel02 = new Map(map02);
let stage02 = new Stage(2, 0, 1, 2, 4, 0, mapModel02)


// ステージ3の設定
let map03 =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]
let mapModel03 = new Map(map03);
let stage03 = new Stage(3, 0, 1, 3, 5, 0, mapModel03)


// ステージ4の設定
let map04 =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_ITEM,        MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]
let mapModel04 = new Map(map04);
let stage04 = new Stage(4, 0, 1, 2, 4, 0, mapModel04)


// ステージ5の設定
let map05 =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM,        MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]
let mapModel05 = new Map(map05);
let stage05 = new Stage(5, 0, 1, 2, 4, 0, mapModel05)


// ステージ6の設定
let map06 =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]
let mapModel06 = new Map(map06);
let stage06 = new Stage(5, 0, 2, 3, 5, 0, mapModel06)


// ステージ7の設定
let map07 =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]
let mapModel07 = new Map(map07);
let stage07 = new Stage(5, 0, 3, 3, 5, 0, mapModel07)


// ステージ8の設定
let map08 =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]
let mapModel08 = new Map(map08);
let stage08 = new Stage(5, 0, 1, 1, 5, 0, mapModel08)


// ステージ9の設定
let map09 =  [
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_ITEM        ,MAP_CAN_MOVE    ,MAP_ITEM        ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
    [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
]
let mapModel09 = new Map(map09);
let stage09 = new Stage(5, 0, 24, 3, 3, 0, mapModel09)


let stageList = [stage01, stage02, stage03, stage04, stage05, stage06, stage07, stage08, stage09]
let gameControllerList = [stage01.gameController, stage02.gameController, stage03.gameController,
    stage04.gameController, stage05.gameController, stage06.gameController, stage07.gameController,
    stage08.gameController, stage09.gameController]
let stageNum = 1;


//　画面の記述
// タイトル画面の設定
const titleScene = new PIXI.Container();

let startText = new PIXI.Sprite(new PIXI.Texture.from("images/menu/start.PNG"));
startText.interactive = true;
startText.buttonMode = true;
startText.width = GameWindowWidth/4;
startText.height = startText.width*0.240468227;
startText.on('pointertap', toGame);
startText.x = GameWindowWidth/2 - startText.width/2;
startText.y = GameWindowWidth/2 - startText.height/2;

//タイトルロゴ
let titleLogo = new PIXI.Sprite(new PIXI.Texture.from("images/logo/title_logo.PNG"));
titleLogo.width = GameWindowWidth/1.1;
titleLogo.height = titleLogo.width*0.208007812;
titleLogo.x = GameWindowWidth/2 - titleLogo.width/2;


let toStageSelect = new PIXI.Sprite(new PIXI.Texture.from("images/menu/stage_select.png"));
toStageSelect.interactive = true;
toStageSelect.buttonMode = true;
toStageSelect.height = startText.height * 0.85;
toStageSelect.width = toStageSelect.height * 10.50165016;
toStageSelect.on('pointertap', titleToStageSelect);
toStageSelect.x = GameWindowWidth/2 - toStageSelect.width/2;;
toStageSelect.y = startText.y + 75;


//タイトル画面に移る前のワンクッション画面用(俺は勝手に「プレタイトル」って呼んだりする)
const preTitleScene = new PIXI.Container();
let cautionPreTitleVolume = new PIXI.Text("音声が流れます！　\n 端末の音量に注意してください", {fill: 0xFF0000,  align : 'center'});
cautionPreTitleVolume.style.fontSize = GameWindowWidth/17;
cautionPreTitleVolume.x = GameWindowWidth/2 - cautionPreTitleVolume.width/2;
cautionPreTitleVolume.y = GameWindowHeight/2 - cautionPreTitleVolume.height/2;
preTitleScene.addChild(cautionPreTitleVolume);

let gameStartPreTitle = new PIXI.Text("ゲーム スタート", {fontSize : 30, fontWeight: "bold"});
gameStartPreTitle.interactive = true;
gameStartPreTitle.buttonMode = true;
gameStartPreTitle.style.fontSize = GameWindowWidth/10;
gameStartPreTitle.x = GameWindowWidth/2 - gameStartPreTitle.width/2;
gameStartPreTitle.y = cautionPreTitleVolume.y - GameWindowHeight/7;
gameStartPreTitle.on('pointertap', startTitle);
preTitleScene.addChild(gameStartPreTitle);    

let cautionPreTitleAdviseDoHorizontal = new PIXI.Text("スマートフォンでプレイする場合、\n 横持ちにしてブラウザを更新することで \n 快適にプレイできます。", {align : 'center'});
cautionPreTitleAdviseDoHorizontal.style.fontSize = GameWindowWidth/20;
cautionPreTitleAdviseDoHorizontal.x = GameWindowWidth/2 - cautionPreTitleAdviseDoHorizontal.width/2;
cautionPreTitleAdviseDoHorizontal.y = cautionPreTitleVolume.y + GameWindowHeight/6;
preTitleScene.addChild(cautionPreTitleAdviseDoHorizontal);

app.stage.addChild(preTitleScene);

//タイトルBGM
let titleBGM = new Audio("music/title.mp3");

//タイトル画面が開かれた時の動作関数
function startTitle(){
    //初期化
    titleLogo.y = 0;
    app.stage.removeChild(preTitleScene); 
    app.stage.addChild(titleScene); 
    //アニメーションとBGMの再生
    titleScene.addChild(titleLogo);
    titleBGM.play();
    app.ticker.add(titleLogoFallenAnime);
}

//タイトルロゴが下に下がっていくアニメーション関数
function titleLogoFallenAnime(){
    titleLogo.y += GameWindowHeight/700;
    if(titleLogo.y >= GameWindowHeight/7){
        app.ticker.remove(titleLogoFallenAnime);
        titleScene.addChild(startText);
        titleScene.addChild(toStageSelect);
    }
}

function toGame(){
    stageNum = 1;
    app.stage.removeChild(titleScene);
    app.stage.addChild(stage01.stageContainer);
    //ランキング機能テスト楽にするため（あとで消す）
    //app.stage.addChild(rankingScene)
    titleBGM.pause();
    titleBGM.currentTime=0;
}

function titleToStageSelect(){
    app.stage.removeChild(titleScene);
    app.stage.addChild(stageSelectScene);
}

//ステージセレクト画面の設定
const stageSelectScene = new PIXI.Container();
let textStageList = [];
for(let i = 1; i <= stageList.length; i++){
    switch(i){
        case 1:
            textStageList[i-1] = new PIXI.Sprite(new PIXI.Texture.from("images/menu/stage1.PNG"));
            textStageList[i-1].on('pointertap', toStage1);
            break
        case 2:
            textStageList[i-1] = new PIXI.Sprite(new PIXI.Texture.from("images/menu/stage2.PNG"));
            textStageList[i-1].on('pointertap', toStage2);
            break
        case 3:
            textStageList[i-1] = new PIXI.Sprite(new PIXI.Texture.from("images/menu/stage3.PNG"));
            textStageList[i-1].on('pointertap', toStage3);
            break
        case 4:
            textStageList[i-1] = new PIXI.Sprite(new PIXI.Texture.from("images/menu/stage4.PNG"));
            textStageList[i-1].on('pointertap', toStage4);
            break
        case 5:
            textStageList[i-1] = new PIXI.Sprite(new PIXI.Texture.from("images/menu/stage5.PNG"));
            textStageList[i-1].on('pointertap', toStage5);
            break
        case 6:
            textStageList[i-1] = new PIXI.Sprite(new PIXI.Texture.from("images/menu/stage6.PNG"));
            textStageList[i-1].on('pointertap', toStage6);
            break
        case 7:
            textStageList[i-1] = new PIXI.Sprite(new PIXI.Texture.from("images/menu/stage7.PNG"));
            textStageList[i-1].on('pointertap', toStage7);
            break
        case 8:
            textStageList[i-1] = new PIXI.Sprite(new PIXI.Texture.from("images/menu/stage8.PNG"));
            textStageList[i-1].on('pointertap', toStage8);
            break
        case 9:
            textStageList[i-1] = new PIXI.Sprite(new PIXI.Texture.from("images/menu/stage9.PNG"));
            textStageList[i-1].on('pointertap', toStage9);
            break
    }
    textStageList[i-1].interactive = true;
    textStageList[i-1].buttonMode = true;
    textStageList[i-1].height = startText.height * 0.5;
    textStageList[i-1].width = textStageList[i-1].height * 5.73333;
    if(i == 1){
        //ステージ選択の座標制御　並び順の真ん中に位置するステージの表示をウィンドウの真ん中にできるとより良いかも
        textStageList[i-1].x = GameWindowWidth/4 - textStageList[i-1].width/2;
        textStageList[i-1].y = GameWindowHeight/2 - textStageList[i-1].height * 10;
    }else if(i >= stageList.length/2 + 1 && i < (stageList.length/2 + 2)){
        textStageList[i-1].x = GameWindowWidth * 3/4 - textStageList[i-1].width/2;
        textStageList[i-1].y = textStageList[0].y;
    }else{
        textStageList[i-1].x = textStageList[i-2].x;
        textStageList[i-1].y = textStageList[i-2].y + GameWindowHeight/10;
    }
    stageSelectScene.addChild(textStageList[i-1]);
}

function toStage1(){
    selectStage(1)
}
function toStage2(){
    selectStage(2)
}
function toStage3(){
    selectStage(3)
}
function toStage4(){
    selectStage(4)
}
function toStage5(){
    selectStage(5)
}
function toStage6(){
    selectStage(6)
}
function toStage7(){
    selectStage(7)
}
function toStage8(){
    selectStage(8)
}
function toStage9(){
    selectStage(9)
}

//引数にあたえた番号のステージに遷移する関数
function selectStage(destNum){
    stageNum = destNum;
    app.stage.removeChild(stageSelectScene);
    app.stage.addChild(stageList[stageNum - 1].stageContainer);
    titleBGM.pause();
    titleBGM.currentTime=0;
    initializeStage(stageList[stageNum - 1].stageContainer, gameControllerList[stageNum - 1]);
}

// クリア画面の設定
const clearScene = new PIXI.Container();
//「クリア！」の表示
let gratzText = new PIXI.Sprite(new PIXI.Texture.from("images/logo/stage_clear.PNG")); //gratz→congratulationの略らしい
gratzText.width = GameWindowWidth / 3;
gratzText.height = gratzText.width * 0.407022106;
gratzText.x = GameWindowWidth/2 - gratzText.width/2;
gratzText.y = GameWindowHeight/2 - gratzText.height/2 - 80;
clearScene.addChild(gratzText);

// 「ranking（文字）」の表示
let font = new PIXI.TextStyle({fill: "black", fontFamily: "Press Start 2P",});
let toRankingText = new PIXI.Text("Ranking", font);
toRankingText.interactive = true;
toRankingText.buttonMode = true;
toRankingText.x = GameWindowWidth * 0.65;
toRankingText.y = GameWindowHeight * 0.08;
toRankingText.on('pointertap', toRanking);
clearScene.addChild(toRankingText);
// 「ranking（アイコン）」の表示
let rankingIcon = new PIXI.Sprite(new PIXI.Texture.from("images/gold.png"));
rankingIcon.x = GameWindowWidth * 0.555;
rankingIcon.y = GameWindowHeight * 0.072;
rankingIcon.height = GameWindowWidth * 0.05;
rankingIcon.width = GameWindowHeight * 0.065;
clearScene.addChild(rankingIcon);

//「Next Stage」の表示
let nextStageText = new PIXI.Sprite(new PIXI.Texture.from("images/menu/nextstage.png"));
nextStageText.interactive = true;
nextStageText.buttonMode = true;
nextStageText.height = toStageSelect.height;
nextStageText.width = nextStageText.height * 8.679153094;
nextStageText.x = GameWindowWidth/2 - nextStageText.width/2;
nextStageText.y = gratzText.y + 150;
nextStageText.on('pointertap', toNext);
clearScene.addChild(nextStageText);
//「Return to Title」の表示
let toTitleText = new PIXI.Sprite(new PIXI.Texture.from("images/menu/backtotitle.png"));
toTitleText.interactive = true;
toTitleText.buttonMode = true;
toTitleText.height = toStageSelect.height;
toTitleText.width = toTitleText.height * 11.26575809;
toTitleText.x = GameWindowWidth/2 - toTitleText.width/2;
toTitleText.y = nextStageText.y + 80;
toTitleText.on('pointertap', toTitle);
clearScene.addChild(toTitleText);
//「Stage Select」の表示
let returnToStageSelectText = new PIXI.Sprite(new PIXI.Texture.from("images/menu/stage_select.png"));
returnToStageSelectText.interactive = true;
returnToStageSelectText.buttonMode = true;
returnToStageSelectText.height = toStageSelect.height;
returnToStageSelectText.width = toStageSelect.width;
returnToStageSelectText.x = GameWindowWidth/2 - returnToStageSelectText.width/2;
returnToStageSelectText.y = toTitleText.y + 80;
returnToStageSelectText.on('pointertap', clearSceneToStageSelect);
clearScene.addChild(returnToStageSelectText);

function toNext(){
    app.stage.removeChild(clearScene);
    stageNum += 1;
    app.stage.addChild(stageList[stageNum - 1].stageContainer);
    initializeStage(stageList[stageNum - 1].stageContainer, gameControllerList[stageNum - 1]);
}

function toRanking(){
    app.stage.removeChild(clearScene);
    allInitialize()
    // ranking_scene.setNum()
    httpRequest(stageNum)
    app.stage.addChild(rankingScene);
    //initializeStage(stageList[stageNum - 1].stageContainer, gameControllerList[stageNum - 1]);
}

function toTitle(){
    app.stage.removeChild(clearScene);
    stageNum = 1;
    allInitialize()
    app.stage.addChild(titleScene);
    startTitle()
}

function clearSceneToStageSelect(){
    app.stage.removeChild(clearScene);
    stageNum = 1;
    allInitialize()
    app.stage.addChild(stageSelectScene);
}



let direction = 0;

app.ticker.add(main);

function main(delta){
    let gc = gameControllerList[stageNum-1];
    let stage = stageList[stageNum-1].stageContainer;

    if(gc.actionFlag){

        // アイテム数が満たしてたらクリア遷移
        gc.checkClear(stage);

        // ブロックリストを1つずつ実行
        switch (gc.blockList[gc.listNum]){

            case "go_ahead":
                gc.goPlayer(stage);
                break

            case "turn_right":
                gc.turnPlayer(stage);
                break

            case "pick_up":
                gc.pickUpPlayer(stage);
                break

            case "ifCanGo":
                // もし前に進めるなら...
                gc.ifCanGo();
                break

            case "ifOnItem":
                // もし足元に宝箱があるなら...
                gc.ifOnItem();
                break

            case "jump":
                // ifが実行した際にelse文の中身をスキップ
                gc.listNum += Number(gc.blockList[gc.listNum+1])+2;
                break

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
    stage.removeChild(gameController.playerView.anim0, gameController.itemCountView.owned_text)

    //gameControllerの中で、初期化が必要なものを初期化
    //ここの初期化値にステージ毎の違いがある場合は引数を増やすのもありかも
    gameController.playerModel = new Player(gameController.x0,gameController.y0,0);
    gameController.playerView = new PlayerView(GameWindowWidth, GameWindowHeight,gameController.playerModel.x ,gameController.playerModel.y);
    gameController.itemCount = new ItemCount(0,gameController.itemCount.needed)
    gameController.itemCountView = new ItemCountView(0,gameController.itemCount.needed, GameWindowWidth, GameWindowHeight);

    // ステージの更新
    for(let i=0;i<7;i++) {
        for (let j = 0; j < 7; j++) {
            stage.removeChild(gameController.mapView.map[i][j]);
        }
    }
    let mapView;
    switch (stageNum){
        case 1:
            let map01 =  [
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM,        MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
            ]
            gameController.mapModel = new Map(map01);
            gameController.mapView = new MapView(GameWindowWidth,GameWindowHeight,gameController.mapModel.map,
                "images/materials/material01.png","images/materials/material13.png");
            break
        case 2:
            let map02 =  [
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
            ]
            gameController.mapModel = new Map(map02);
            gameController.mapView = new MapView(GameWindowWidth,GameWindowHeight,gameController.mapModel.map,
                "images/materials/material05.png","images/materials/material15.png");
            break
        case 3:
            let map03 =  [
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
            ]
            gameController.mapModel = new Map(map03);
            gameController.mapView = new MapView(GameWindowWidth,GameWindowHeight,gameController.mapModel.map,
                "images/materials/material20.png","images/materials/material21.png");
            break
        case 4:
            let map04 =  [
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_ITEM,        MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
            ]
            gameController.mapModel = new Map(map04);
            gameController.mapView = new MapView(GameWindowWidth,GameWindowHeight,gameController.mapModel.map,
                "images/materials/material05.png","images/materials/material22.png");
            break
        case 5:
            let map05 =  [
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM,        MAP_CAN_MOVE,    MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
            ]
            gameController.mapModel = new Map(map05);
            gameController.mapView = new MapView(GameWindowWidth,GameWindowHeight,gameController.mapModel.map,
                "images/materials/material03.png","images/materials/material14.png");
            break
        case 6:
            let map06 =  [
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
            ]
            gameController.mapModel = new Map(map06);
            gameController.mapView = new MapView(GameWindowWidth,GameWindowHeight,gameController.mapModel.map,
                "images/materials/material04.png","images/materials/material16.png");
            break
        case 7:
            let map07 =  [
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
            ]
            gameController.mapModel = new Map(map07);
            gameController.mapView = new MapView(GameWindowWidth,GameWindowHeight,gameController.mapModel.map,
                "images/materials/material02.png","images/materials/material23.png");
            break
        case 8:
            let map08 =  [
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_MOVE    ,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
            ]
            gameController.mapModel = new Map(map08);
            gameController.mapView = new MapView(GameWindowWidth,GameWindowHeight,gameController.mapModel.map,
                "images/materials/material06.png","images/materials/material10.png");
            break
        case 9:
            let map09 =  [
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_ITEM        ,MAP_CAN_MOVE    ,MAP_ITEM        ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_ITEM        ,MAP_CAN_NOT_MOVE],
                [MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE,MAP_CAN_NOT_MOVE],
            ]
            gameController.mapModel = new Map(map09);
            gameController.mapView = new MapView(GameWindowWidth,GameWindowHeight,gameController.mapModel.map,
                "images/materials/material06.png","images/materials/material12.png");
            break
    }
    for(let i=0;i<7;i++){
        for(let j=0;j<7;j++){
            stage.addChild(gameController.mapView.map[i][j]);
        }
    }


    //上で取り除いた、立ち止まってる騎士くん、所持アイテム数表示、アイテムなどを改めて描画
    //gameControllerを初期化した後のタイミングでこれをしないと、初期化前の座標でまた描画してしまう
    stage.addChild(gameController.itemCountView.owned_text,gameController.itemCountView.needed_text, gameController.playerView.anim0);
    stage.addChild(gameController.itemCountView.itemCountView);
    stage.addChild(gameController.itemCountView.needed_text);
    stage.addChild(gameController.itemCountView.owned_text);
    //アニメーション処理に用いるlistNumとactionFlagを初期化
    gameController.listNum = 0;
    gameController.actionFlag = false;
}

//title画面に戻る時に用いる、全てのステージの進行状況をリセットする関数
//要は全ステージでリセットボタン押すのと同じ
//これがないと、再度ゲームを開始した際に、クリア時の進行状況のままになる
function allInitialize(){
    for(let num = 0; num < stageList.length; num++){
        initializeStage(stageList[num].stageContainer, gameControllerList[num])
    }
}


//リセットボタンを押した時の挙動
function onClickReset(){
    initializeStage(stageList[stageNum - 1].stageContainer, gameControllerList[stageNum - 1])
}


//実行ボタンを押した時の挙動
function onClickRun(workspace){
    countBlock = 0
    gameControllerList[stageNum - 1].doCode(workspace,stageList[stageNum - 1].stageContainer);
}
