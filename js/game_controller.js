class GameController{

    // コンストラクタ
    constructor(playerView, playerModel, mapView, mapModel, itemView, itemCount, itemCountView) {
        this.playerView = playerView;
        this.playerModel = playerModel;
        this.mapView = mapView;
        this.mapModel = mapModel;
        //this.item = item;
        this.itemView = itemView;
        this.itemCount = itemCount;
        this.itemCountView = itemCountView;

        this.actionFlag = 0;
        this.blockList;
        this.listNum = 0;

        this.finishFlag = 0;
    }

    doCode(workspace,stage){
        //blocklyからブロックリストを取得
        this.blockList = Blockly.JavaScript.workspaceToCode(workspace).split("\n");

        // アニメーションをスタート(1回のみ実行)
        stage.removeChild(this.playerView.player);
        this.playerView.anim0.play();
        this.playerView.anim0.x = this.playerView.playerX;
        this.playerView.anim0.y = this.playerView.playerY;
        stage.addChild(this.playerView.anim0);

        //let j = 0

        // メインループが実行
        app.ticker.add(delta => {

            // 宝箱を最前面にする
            stage.removeChild(this.itemView.item);
            stage.addChild(this.itemView.item);

            // ブロックリストを1つずつ実行
            switch (this.blockList[this.listNum]){
                case "go_ahead":
                    // playerView.goAhead が終了したら finishFlag に1が入る
                    this.finishFlag = this.playerView.goAhead();
                    if(this.finishFlag == 1){
                        this.listNum += 1;
                        this.playerModel.goAhead();
                        this.finishFlag = 0;
                    }
                    break;

                case "turn_right":
                    this.playerView.turnRight(stage);
                    this.listNum += 1;
                    this.playerModel.turnRight();
                    break;

                case "pick_up":
                    if(this.mapModel.getState(this.playerModel.x,this.playerModel.y) == 3){
                        app.stage.removeChild(stage);
                        app.stage.addChild(clearScene);
                    }
                    this.listNum += 1;
                    break;
            }
        })
    }

    // ModelとViewに前進を命令する関数
    goPlayer(){
        /**
        if(this.canMove()){
            this.playerModel.goAhead();
            this.playerView.goAhead(this.playerModel.getDirection());
        }else {
            console.log("その方向には進めません！！");
        }
        **/
    }

    // ModelとViewに右折を命令する関数
    turnPlayer(){
        /**
        this.playerModel.turnRight();
        this.playerView.turnRight(this.playerModel.getDirection());
         **/
    }


    pickUpPlayer(){
        /**
        if(this.mapModel.getState(this.playerModel.x, this.playerModel.y) == MAP_ITEM){
            this.playerModel.pickUpItem()
            this.itemCount.addOwned();
            this.itemCountView.setOwned(this.itemCount.owned);
            //this.mapModel.setState(this.playerModel.x, this.playerModel.y, this.mapModel.CAN_MOVE);
        }else{
            // alert("There is no item.")
        }
         **/
    }



    // 一マス先が可動域ならtrueを返す
    canMove(){
        switch (this.playerModel.getDirection()){
            case 0:
                if(this.mapModel.getState(this.playerModel.x,this.playerModel.y-1) != 2){
                    return true;
                }
                break;
            case 1:
                if(this.mapModel.getState(this.playerModel.x+1,this.playerModel.y) != 2){
                    return true;
                }
                break;
            case 2:
                if(this.mapModel.getState(this.playerModel.x,this.playerModel.y+1) != 2){
                    return true;
                }
                break;
            case 3:
                if(this.mapModel.getState(this.playerModel.x-1,this.playerModel.y) != 2){
                    return true;
                }
                break;
        }
    }

    stageSet(stageNum){
        switch (stageNum){
            case 1:
                playerView01.player.x
                break;
            case 2:
                break;
            case 3:
                break;
        }
    }
}

