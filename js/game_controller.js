class GameController{

    // コンストラクタ
    constructor(pv, pm, mv, mm) {
        this.playerView = pv;
        this.playerModel = pm;
        this.mapView = mv;
        this.mapModel = mm;
    }

    // すべてのViewerに描画を命令する関数
    drawAll(){
        this.mapView.draw();
        this.playerView.draw();
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

    // マップ(Model)で現在地を参照してアクションを判断する
    whichAction(){
        switch (this.mapModel.getState(this.playerModel.x, this.playerModel.y)){
            case 1:
                break;
            case 2:
                // view_gameOverScene();
                console.log("!!GAME OVER!!");
                break;
            case 3:
                // view_goalScene();
                console.log("!!GOAL!!")
                break;
        }
    }

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
}



















