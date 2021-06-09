class GameController{

    // コンストラクタ
    constructor(playerView, playerModel, mapView, mapModel, item, itemView) {
        this.playerView = playerView;
        this.playerModel = playerModel;
        this.mapView = mapView;
        this.mapModel = mapModel;
        this.item = item;
        this.itemView = itemView;
        this.stageNumber
        this.numTarget

        this.actionFlag = 0;
        this.blockList;
        this.listNum = 0;

    }

    setStageInfo(stageNumber, numTarget){
        this.stageNumber = stageNumber;
        this.numTarget = numTarget;
    }

    // ModelとViewに前進を命令する関数
    goPlayer(){
        if(this.canMove()){
            this.playerModel.goAhead();
            this.playerView.goAhead(this.playerModel.getDirection());
        }else {
            console.log("その方向には進めません！！");
        }
    }

    // ModelとViewに右折を命令する関数
    turnPlayer(){
        this.playerModel.turnRight();
        // this.playerView.turnRight(this.playerModel.getDirection());
    }

    pickUpPlayer(){
        if(this.mapModel.getState(playerModel.x, playerModel.y) == MAP_ITEM){
            this.playerModel.pickUpItem()
            this.item.addOwned();
            this.itemView.setOwned(this.item.owned);
            //this.mapModel.setState(this.playerModel.x, this.playerModel.y, this.mapModel.CAN_MOVE);
        }else{
            alert("There is no item.")
        }

        if(this.playerModel.numItem == this.numTarget){
            alert("STAGE " + this.stageNumber + " CLEAR!!")
            this.playerModel.numItem = 0;
        }
    }

    doCode(workspace){
        // アクションフラグを立てる0->1
        this.actionFlag = 1;
        console.log("this.actionFlag = 1;");

        //blocklyからブロックリストを取得
        this.blockList = Blockly.JavaScript.workspaceToCode(workspace).split("\n");

        //ブロック毎にプログラムを実行
        try{
            for(const block of this.blockList){
                //ブロック毎に設定されたアクションはここに記述！！！！！！
                switch (block){
                    case "go_ahead":
                        //「まっすぐ進む」のアクション
                        this.goPlayer()
                        break;
                    case "turn_right":
                        //「右を向く」のアクション
                        this.turnPlayer()
                        break;
                    case "pick_up":
                        //「ひろう」のアクション
                        this.pickUpPlayer()
                        break;
                }
            }
        }catch(e){
            alert(e)
        }
    }

    // 一マス先が可動域ならtrueを返す
    canMove(){
        switch (this.playerModel.getDirection()){
            case 0:
                if(this.mapModel.getState(playerModel.x,playerModel.y-1) != 2){
                    return true;
                }
                break;
            case 1:
                if(this.mapModel.getState(playerModel.x+1,playerModel.y) != 2){
                    return true;
                }
                break;
            case 2:
                if(this.mapModel.getState(playerModel.x,playerModel.y+1) != 2){
                    return true;
                }
                break;
            case 3:
                if(this.mapModel.getState(playerModel.x-1,playerModel.y) != 2){
                    return true;
                }
                break;
        }
    }

    stageSet(stageNum){
        switch (stageNum){
            case 1:
                playerView.player.x
                break;
            case 2:
                break;
            case 3:
                break;
        }
    }
}

