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

        this.clearFlag = false;
    }


    doCode(workspace,stage){
        //blocklyからブロックリストを取得
        this.blockList = Blockly.JavaScript.workspaceToCode(workspace).split("\n");

        // アニメーションをスタート
        stage.removeChild(this.playerView.player);
        this.playerView.anim0.play();
        this.playerView.anim0.x = this.playerView.playerX;
        this.playerView.anim0.y = this.playerView.playerY;
        stage.addChild(this.playerView.anim0);

        // メインループが実行
        app.ticker.add(delta => {

            // 宝箱を最前面にする
            stage.removeChild(this.itemView.item);
            stage.addChild(this.itemView.item);

            // ブロックリストを1つずつ実行
            switch (this.blockList[this.listNum]){

                case "go_ahead":
                    if(this.canMove()){
                        this.goPlayer();
                    }else {
                        this.listNum += 1;
                    }
                    break;

                case "turn_right":
                    this.turnPlayer(stage);
                    break;

                case "pick_up":
                    this.pickUpPlayer(stage);
                    break;
            }

            if(this.clearFlag == true){
                app.ticker.stop();
            }
        })
    }


    // ModelとViewに前進を命令する関数
    goPlayer(){
        this.playerView.goAhead(this.playerModel.direction);
        if(this.playerView.goFinished == true){
            this.playerModel.goAhead();
            this.playerView.goFinished = false;
            this.listNum += 1;
        }
    }


    // ModelとViewに右折を命令する関数
    turnPlayer(stage){
        this.playerModel.turnRight();
        this.playerView.turnRight(this.playerModel.direction, stage);
        this.listNum += 1;
    }


    // Modelの位置をもとに...
    pickUpPlayer(stage){
        if(this.mapModel.getState(this.playerModel.x,this.playerModel.y) == 3){
            app.stage.removeChild(stage);
            app.stage.addChild(clearScene);
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

