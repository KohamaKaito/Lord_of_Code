// window の設定
let game_window = document.getElementById("game_window");

let GameWindowHeight = window.innerHeight;
let GameWindowWidth = window.innerWidth / 2;

let app = new PIXI.Application({
    width: GameWindowWidth,
    // スクリーン(ビュー)横幅
    height: GameWindowHeight,
    // スクリーン(ビュー)縦幅
    backgroundColor: 0x1099bb,
});
// 背景色 16進 0xRRGGBB);

game_window.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);

// プレイヤー(Model)のインスタンス生成
let playerModel = new Player(3, 4, 0);
// マップ(Model)のインスタンス生成
let mapState = new MapState();
let mapModel = new Map(mapState);

// マップ(View)のインスタンス生成
let mapView = new MapView('images/map01.png', GameWindowWidth, GameWindowHeight);
container.addChild(mapView.map);

// プレイヤー(View)インスタンス生成
let playerView = new PlayerView('images/player0_0.png', GameWindowWidth, GameWindowHeight);
container.addChild(playerView.player);

// (Controller)のインスタンス生成
let gameController = new GameController(playerView, playerModel, mapView, mapModel);
gameController.setStageInfo(1, 1) //ステージ１、必要取得アイテム数１

// ステージ１の生成
mapModel.map = [
    [mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE],
    [mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE],
    [mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.GOAL, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE],
    [mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE],
    [mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE],
    [mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE],
    [mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE, mapState.state.CAN_NOT_MOVE],
]



let goalImage = new PIXI.Texture.from("images/goal.png");
goal = new PIXI.Sprite(goalImage);
goal.x = GameWindowWidth / 2.85;
goal.y = GameWindowHeight / 1.75;
goal.width = GameWindowWidth / 8;
goal.height = GameWindowHeight / 8;
goal.zIndex = 100;
container.addChild(goal);

let goalSceneImage = new PIXI.Texture.from("images/goalScene.png");
goalScene = new PIXI.Sprite(goalSceneImage);
goalScene.x = 0;
goalScene.y = 0;
goalScene.width = GameWindowWidth;
goalScene.height = GameWindowHeight;




let playerX = GameWindowWidth / 2.5;
let playerY = GameWindowHeight / 3.1;

let anim0;
// アニメーションを作成してシーンに追加
anim0 = createAnim([
    "images/player0_0.png",
    "images/player0_1.png",
    "images/player0_0.png",
    "images/player0_2.png",
]);

//anim0.x = (gameScene.width / 2) - anim0.width;
anim0.x = playerX;
//anim0.y = (gameScene.height / 2) - (anim0.height / 2);
anim0.y = playerY;

anim0.width = GameWindowWidth / 3;
anim0.height = GameWindowHeight / 3;

//anim0.play();
//container.addChild(anim0);


let anim1;
anim1 = createAnim([
    "images/player1_0.png",
    "images/player1_1.png",
    "images/player1_0.png",
    "images/player1_2.png",
]);
anim1.x = playerX
anim1.y = playerY
anim1.width = GameWindowWidth / 3;
anim1.height = GameWindowHeight / 3;

let anim2;
anim2 = createAnim([
    "images/player2_0.png",
    "images/player2_1.png",
    "images/player2_0.png",
    "images/player2_2.png",
]);
anim2.x = playerX;
anim2.y = playerY;
anim2.width = GameWindowWidth / 3;
anim2.height = GameWindowHeight / 3;

let anim3;
anim3 = createAnim([
    "images/player3_0.png",
    "images/player3_1.png",
    "images/player3_0.png",
    "images/player3_2.png",
]);

anim3.x = playerX;
anim3.y = playerY;
anim3.width = GameWindowWidth / 3;
anim3.height = GameWindowHeight / 3;

// フレーム更新時の処理(≒ループ処理)を追加する
app.ticker.add(animate);
let amountTime = 0;

let j = 0;
let i = 0;
let direction = 0;

// 処理の定義
function animate(delta) {
    if (gameController.actionFlag == 1) {
        switch (gameController.blockList[i]) {
            case "go_ahead":
                container.removeChild(playerView.player);
                anim0.play();
                container.addChild(anim0);
                container.removeChild(goal);
                container.addChild(goal);
                if (j < 150) {
                    switch (direction) {
                        case 0:
                            anim0.x -= anim0.width / 14 * 0.02;
                            playerX -= anim0.width / 14 * 0.02;
                            anim0.y += anim0.height / 28 * 0.02;
                            playerY += anim0.height / 28 * 0.02;
                            break
                        case 1:
                            anim1.x -= anim0.width / 14 * 0.02;
                            playerX -= anim0.width / 14 * 0.02;
                            anim1.y -= anim0.height / 28 * 0.02;
                            playerY -= anim0.height / 28 * 0.02;
                            break
                        case 2:
                            anim2.x += anim0.width / 14 * 0.02;
                            playerX += anim0.width / 14 * 0.02;
                            anim2.y -= anim0.height / 28 * 0.02;
                            playerY -= anim0.height / 28 * 0.02;
                            break
                        case 3:
                            anim3.x += anim0.width / 14 * 0.02;
                            playerX += anim0.width / 14 * 0.02;
                            anim3.y += anim0.height / 28 * 0.02;
                            playerY += anim0.height / 28 * 0.02;
                            break
                    }
                    j += 1;
                } else {
                    j = 0;
                    i += 1;
                }
                break;
            case "turn_right":
                //「右を向く」のアクション
                switch (direction) {
                    case 0:
                        direction = 1;
                        container.removeChild(anim0);
                        anim1.x = playerX
                        anim1.y = playerY
                        anim1.play();
                        container.addChild(anim1);
                        break;
                    case 1:
                        direction = 2;
                        container.removeChild(anim1);
                        anim2.x = playerX
                        anim2.y = playerY
                        anim2.play();
                        container.addChild(anim2);
                        break;
                    case 2:
                        direction = 3;
                        container.removeChild(anim2);
                        anim3.x = playerX
                        anim3.y = playerY
                        anim3.play();
                        container.addChild(anim3);
                        break;
                    case 3:
                        direction = 0;
                        container.removeChild(anim3);
                        anim0.x = playerX
                        anim0.y = playerY
                        anim0.play();
                        container.addChild(anim0);
                        break;
                }
                i += 1;
                break;
            case "pick_up":
                //「ひろう」のアクション
                //this.pickUpPlayer();
                console.log("ひろう");
                console.log("x" + playerModel.x);
                console.log("y" + playerModel.y);
                console.log(mapModel.getState(3, 1));
                console.log(mapModel.getState(3, 2));
                console.log(mapModel.getState(3, 3));
                console.log(mapModel.getState(playerModel.x, playerModel.y));
                if (mapModel.getState(playerModel.x, playerModel.y) == 3) {
                    container.removeChild(goal);
                    container.addChild(goalScene);
                }
                i += 1;
                break;
        }




    }


}
//anim0.x -= anim0.width/14 * 0.01;
//anim0.y += anim0.height/28 * 0.01;
//anim0.x -= anim0.width/14 * 0.01;
//anim0.y += anim0.height/28 * 0.01;

function createAnim(imgs) {
    const textureArray = [];
    for (let i = 0; i < imgs.length; i++) {
        let texture = PIXI.Texture.from(imgs[i]);
        textureArray.push(texture);
    }
    ;
    const animatedSprite = new PIXI.AnimatedSprite(textureArray);
    animatedSprite.animationSpeed = 0.1;
    animatedSprite.height = 500;
    animatedSprite.width = 500;
    return animatedSprite;
}

/** anim1停止 */
function stop(e) {
    anim0.stop();
}

/** anim1再生 */
function play(e) {
    anim0.play();
}



function onClick(workspace) {
    gameController.doCode(workspace);
}
