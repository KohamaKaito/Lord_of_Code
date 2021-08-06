// ランキング画面の設定
const rankingScene = new PIXI.Container();

let textStyle01 = new PIXI.TextStyle({
    breakWords: true,
    fill: "black",
    fontFamily: "Press Start 2P",
    // fontSize: this.itemCountView.width/12,
    lineHeight: 20,
});



WebFont.load(
    {
        custom: {families: ['Press Start 2P']},
        // 全てのWebフォントのロードが完了した時
        active: function() {
            let backButton = new PIXI.Text("X", textStyle01);
            backButton.interactive = true;
            backButton.buttonMode = true;
            backButton.x = GameWindowWidth * 0.9;
            backButton.y = GameWindowHeight * 0.03;
            backButton.on('pointertap', toClearScene);
            rankingScene.addChild(backButton);

            let rankingText = new PIXI.Text("Ranking",textStyle01);
            rankingText.x = GameWindowWidth * 0.5 - (rankingText.width/2);
            rankingText.y = GameWindowHeight * 0.17;
            rankingScene.addChild(rankingText);

            let gold = new PIXI.Sprite(new PIXI.Texture.from("images/first.png"));
            gold.x = GameWindowWidth * 0.25;
            gold.y = GameWindowHeight * 0.3;
            gold.height = GameWindowHeight * 0.08;
            gold.width = GameWindowWidth * 0.1;
            rankingScene.addChild(gold);

            let silver = new PIXI.Sprite(new PIXI.Texture.from("images/second.png"));
            silver.x = GameWindowWidth * 0.25;
            silver.y = GameWindowHeight * 0.45;
            silver.height = GameWindowHeight * 0.08;
            silver.width = GameWindowWidth * 0.1;
            rankingScene.addChild(silver);

            let bronze = new PIXI.Sprite(new PIXI.Texture.from("images/third.png"));
            bronze.x = GameWindowWidth * 0.25;
            bronze.y = GameWindowHeight * 0.6;
            bronze.height = GameWindowHeight * 0.08;
            bronze.width = GameWindowWidth * 0.1;
            rankingScene.addChild(bronze);

            let BlocksText01 = new PIXI.Text("Blocks",textStyle01);
            BlocksText01.x = GameWindowWidth * 0.6;
            BlocksText01.y = GameWindowHeight * 0.33;
            BlocksText01.height = GameWindowHeight * 0.04;
            BlocksText01.width = GameWindowWidth * 0.12;
            rankingScene.addChild(BlocksText01);

            let BlocksText02 = new PIXI.Text("Blocks",textStyle01);
            BlocksText02.x = GameWindowWidth * 0.6;
            BlocksText02.y = GameWindowHeight * 0.48;
            BlocksText02.height = GameWindowHeight * 0.04;
            BlocksText02.width = GameWindowWidth * 0.12;
            rankingScene.addChild(BlocksText02);

            let BlocksText03 = new PIXI.Text("Blocks",textStyle01);
            BlocksText03.x = GameWindowWidth * 0.6;
            BlocksText03.y = GameWindowHeight * 0.63;
            BlocksText03.height = GameWindowHeight * 0.04;
            BlocksText03.width = GameWindowWidth * 0.12;
            rankingScene.addChild(BlocksText03);


        }
    });




function toClearScene(){
    app.stage.removeChild(rankingScene);
    app.stage.addChild(clearScene);
    //initializeStage(stageList[stageNum - 1].stageContainer, gameControllerList[stageNum - 1]);
}

function setNum(stageNum){


    let body = {
        "user_id": "sample",
        "stage": stageNum,
        "map_info": gameControllerList[stageNum-1].mapModel.map,
        "spown_point": [gameControllerList[stageNum-1].x0, gameControllerList[stageNum-1].y0],
        "item_want_number": gameControllerList[stageNum-1].itemCount.needed,
        "block_info": gameControllerList[stageNum-1].blockList,
        "num_block": countBlock
    }
    //console.log(body)


    /**
    // json受け取る
    let get;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://140.83.63.143/api/ranking');
    xhr.send({"user_id":"sample", "stage":1});
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            //データを取得後の処理を書く
            get = xhr.responseText;
        }
    }
    console.log("getテスト↓");
    console.log(get);
     **/



    /**
    xhr.open('POST', 'https://140.83.63.143/api');
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    let body = {
        "user_id": "sample",
        "stage":   1,
        "map_info": stage01.gameController.mapModel.map,
        "spown_point": [stage01.gameController.x0, stage01.gameController.y0],
        "item_want_number": stage01.gameController.itemCount.needed,
        "block_info": stage01.gameController.blockList
    }
    xhr.send( body );
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            //データを取得後の処理を書く
            let post = xhr.responseText;
        }
    }
     **/


    // json受け取ったとする
    let post = {"status":"ok", "your_block":6, "your_rank":4}
    let get = {"status":"ok", "number_of_block":[3,4,5]}


    let blocks01 = new PIXI.Text(get.number_of_block[0],textStyle01);
    blocks01.x = GameWindowWidth * 0.45;
    blocks01.y = GameWindowHeight * 0.32;
    blocks01.height = GameWindowHeight * 0.05;
    blocks01.width = GameWindowWidth * 0.05;
    rankingScene.removeChild(blocks01);
    rankingScene.addChild(blocks01);

    let blocks02 = new PIXI.Text(get.number_of_block[1],textStyle01);
    blocks02.x = GameWindowWidth * 0.45;
    blocks02.y = GameWindowHeight * 0.47;
    blocks02.height = GameWindowHeight * 0.05;
    blocks02.width = GameWindowWidth * 0.05;
    rankingScene.removeChild(blocks02);
    rankingScene.addChild(blocks02);

    let blocks03 = new PIXI.Text(get.number_of_block[2],textStyle01);
    blocks03.x = GameWindowWidth * 0.45;
    blocks03.y = GameWindowHeight * 0.62;
    blocks03.height = GameWindowHeight * 0.05;
    blocks03.width = GameWindowWidth * 0.05;
    rankingScene.removeChild(blocks03);
    rankingScene.addChild(blocks03);

    let youText = new PIXI.Text("← You",textStyle01);
    youText.height = GameWindowHeight * 0.04;
    youText.width = GameWindowWidth * 0.14;
    switch (post.your_rank){
        case 1:
            youText.x = GameWindowWidth * 0.75;
            youText.y = GameWindowHeight * 0.33;
            break
        case 2:
            youText.x = GameWindowWidth * 0.75;
            youText.y = GameWindowHeight * 0.48;
            break
        case 3:
            youText.x = GameWindowWidth * 0.75;
            youText.y = GameWindowHeight * 0.63;
            break
        default:
            let myRank = new PIXI.Text(post.your_rank+"th",textStyle01);
            myRank.x = GameWindowWidth * 0.25;
            myRank.y = GameWindowHeight * 0.8;
            myRank.height = GameWindowHeight * 0.05;
            myRank.width = GameWindowWidth * 0.1;
            rankingScene.addChild(myRank);

            let blocks04 = new PIXI.Text(post.your_block,textStyle01);
            blocks04.x = GameWindowWidth * 0.45;
            blocks04.y = GameWindowHeight * 0.8;
            blocks04.height = GameWindowHeight * 0.05;
            blocks04.width = GameWindowWidth * 0.05;
            rankingScene.removeChild(blocks04);
            rankingScene.addChild(blocks04);

            let BlocksText04 = new PIXI.Text("Blocks",textStyle01);
            BlocksText04.x = GameWindowWidth * 0.6;
            BlocksText04.y = GameWindowHeight * 0.81;
            BlocksText04.height = GameWindowHeight * 0.04;
            BlocksText04.width = GameWindowWidth * 0.12;
            rankingScene.addChild(BlocksText04);

            youText.x = GameWindowWidth * 0.75;
            youText.y = GameWindowHeight * 0.81;


            break
    }
    rankingScene.addChild(youText);

}