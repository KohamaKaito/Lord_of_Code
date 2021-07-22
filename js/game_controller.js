class GameController{

    // コンストラクタ
    constructor(playerView, playerModel, mapView, mapModel, itemCount, itemCountView) {
        this.playerView = playerView;
        this.playerModel = playerModel;
        this.mapView = mapView;
        this.mapModel = mapModel;
        //this.itemView = itemView;
        this.itemCount = itemCount;
        this.itemCountView = itemCountView;
        this.actionFlag = false;
        this.blockList = [];
        this.listNum = 0;

        // プレイヤーの初期値
        this.x0 = this.playerModel.x;
        this.y0 = this.playerModel.y;
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
            if(this.playerView.animFinished == true){
                this.playerModel.goAhead();
                this.playerView.animFinished = false;
                this.listNum += 1;
            }
        }else {
            // 見えない壁
            this.playerView.deltaX = 0;
            this.playerView.deltaY = 0;
            this.playerView.goAhead(this.playerModel.direction, stage);
            if(this.playerView.animFinished == true){
                this.playerView.animFinished = false;
                if(GameWindowWidth > GameWindowHeight){
                    this.playerView.deltaX = GameWindowHeight/700;
                    this.playerView.deltaY = GameWindowHeight/700;
                }else {
                    this.playerView.deltaX = GameWindowWidth/700;
                    this.playerView.deltaY = GameWindowWidth/700;
                }
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
            this.mapModel.setState(this.playerModel.x,this.playerModel.y,MAP_CAN_MOVE);
            this.itemCount.addOwned();
            this.itemCountView.setOwned(this.itemCount.owned);
            // 所得後，ユーザーから宝箱を見えなくする
            let image;
            image = new PIXI.Texture.from(this.mapView.src1);
            this.mapView.map[this.playerModel.x][this.playerModel.y] = new PIXI.Sprite(image);
            if(GameWindowWidth > GameWindowHeight){
                this.mapView.map[this.playerModel.x][this.playerModel.y].x = this.mapView.wh*this.playerModel.x/7;
                this.mapView.map[this.playerModel.x][this.playerModel.y].y = this.mapView.wh*this.playerModel.y/7;
                this.mapView.map[this.playerModel.x][this.playerModel.y].width = this.mapView.wh/7;
                this.mapView.map[this.playerModel.x][this.playerModel.y].height = this.mapView.wh/7;
            }else {
                this.mapView.map[this.playerModel.x][this.playerModel.y].x = this.mapView.ww*this.playerModel.x/7;
                this.mapView.map[this.playerModel.x][this.playerModel.y].y = this.mapView.ww*this.playerModel.y/7;
                this.mapView.map[this.playerModel.x][this.playerModel.y].width = this.mapView.ww/7;
                this.mapView.map[this.playerModel.x][this.playerModel.y].height = this.mapView.ww/7;
            }
            //stage.removeChild(this.mapView.map[this.playerModel.x][this.playerModel.y]);
            stage.addChild(this.mapView.map[this.playerModel.x][this.playerModel.y]);

            if(stage.children.includes(this.playerView.anim0)) {
                stage.addChild(this.playerView.anim0);
            } else if(stage.children.includes(this.playerView.anim1)){
                stage.addChild(this.playerView.anim1);
            } else if(stage.children.includes(this.playerView.anim2)){
                stage.addChild(this.playerView.anim2);
            } else if(stage.children.includes(this.playerView.anim3)){
                stage.addChild(this.playerView.anim3);
            }
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
            this.listNum = -1
            this.playerView.clearAnimation(stage);
            if(this.playerView.animFinished == true){
                // アニメーション終わった後の処理
                this.playerView.animFinished = false;
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

    // もし前に進めるなら...
    ifCanGo(){
        if(this.canMove()){
            this.listNum += 2;
        }else {
            this.listNum += Number(this.blockList[this.listNum+1])+4;
        }
    }

    // もし足元に宝箱があるなら...
    ifOnItem(){
        if(this.mapModel.getState(this.playerModel.x,this.playerModel.y) == 3){
            this.listNum += 2;
        }else {
            this.listNum += Number(this.blockList[this.listNum+1])+4;
        }
    }
}

