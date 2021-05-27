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
    }

    setStageInfo(stageNumber, numTarget){
        this.stageNumber = stageNumber;
        this.numTarget = numTarget;
    }

    // すべてのViewerに描画を命令する関数
    drawAll(){
        /*
        this.mapView.draw();
        this.playerView.draw();
        */
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
        this.playerView.turnRight(this.playerModel.getDirection());
    }

    pickUpPlayer(){
        if(this.mapModel.getState(playerModel.x, playerModel.y) == MAP_ITEM){
            this.playerModel.pickUpItem();
            this.item.addOwned();
            this.itemView.setOwned(this.item.owned);
            this.mapModel.setState(this.playerModel.x, this.playerModel.y, this.mapModel.mapState.state.CAN_MOVE);
        }else{
            alert("There is no item.")
        }

        if(this.playerModel.numItem == this.numTarget){
            alert("STAGE " + this.stageNumber + " CLEAR!!")
            this.playerModel.numItem = 0;
        }
    }

    doCode(workspace){
        //blocklyからブロックリストを取得
        var block_list = Blockly.JavaScript.workspaceToCode(workspace).split("\n");
        
        //ブロック毎にプログラムを実行
        try{
            for(const block of block_list){
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
                if(this.mapModel.getState(playerModel.x,playerModel.y-1) != MAP_CAN_MOVE){
                    return true;
                }
                break;
            case 1:
                if(this.mapModel.getState(playerModel.x+1,playerModel.y) != MAP_CAN_MOVE){
                    return true;
                }
                break;
            case 2:
                if(this.mapModel.getState(playerModel.x,playerModel.y+1) != MAP_CAN_MOVE){
                    return true;
                }
                break;
            case 3:
                if(this.mapModel.getState(playerModel.x-1,playerModel.y) != MAP_CAN_MOVE){
                    return true;
                }
                break;
        }
    }
}



















