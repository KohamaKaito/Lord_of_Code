class GameController{

    // コンストラクタ
    constructor(playerView, playerModel, mapView, mapModel, itemView, itemCount, itemCountView) {
        this.playerView = playerView;
        this.playerModel = playerModel;
        this.mapView = mapView;
        this.mapModel = mapModel;
        this.itemView = itemView;
        this.itemCount = itemCount;
        this.itemCountView = itemCountView;
        this.actionFlag = false;
        this.blockList = [];
        this.listNum = 0;
    }


    doCode(workspace,stage){
        //blocklyからブロックリストを取得
        this.blockList = Blockly.JavaScript.workspaceToCode(workspace).split("\n");
        this.actionFlag = true;
    }


    // ModelとViewに前進を命令する関数
    goPlayer(stage){
        if(this.canMove()){
            this.playerView.goAhead(this.playerModel.direction, stage);
            if(this.playerView.goFinished == true){
                this.playerModel.goAhead();
                this.playerView.goFinished = false;
                this.listNum += 1;
            }
        }else {
            // 見えない壁
            this.playerView.deltaX = 0;
            this.playerView.deltaY = 0;
            this.playerView.goAhead(this.playerModel.direction, stage);
            if(this.playerView.goFinished == true){
                this.playerView.goFinished = false;
                this.playerView.deltaX = GameWindowWidth/42 * 0.02;
                this.playerView.deltaY = GameWindowHeight/84 * 0.02;
                this.listNum += 1;
            }
        }
    }


    // ModelとViewに右折を命令する関数
    turnPlayer(stage){
        this.playerModel.turnRight();
        this.playerView.turnRight(this.playerModel.direction, stage);
        this.listNum += 1;
    }


    // 足元のアイテムを拾う関数
    pickUpPlayer(stage){
        if(this.mapModel.getState(this.playerModel.x,this.playerModel.y) == 3){
            this.itemCount.addOwned();
            this.itemCountView.setOwned(this.itemCount.owned);
        }
        this.listNum += 1;
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



    checkClear(stage){
        if(this.itemCount.isComplete()){
            app.stage.removeChild(stage);
            app.stage.addChild(clearScene);
            if(stageNum == stageList.length){
                clearScene.removeChild(nextStageText);
            }else{
                clearScene.addChild(nextStageText);
            }
        }
    }
}

