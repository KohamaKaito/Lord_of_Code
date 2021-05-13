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
        this.playerModel.goAhead();
        this.playerView.goAhead(this.playerModel.getDirection());
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

    doCode(workspace){
        //blocklyからブロックリストを取得
        var block_list = Blockly.JavaScript.workspaceToCode(workspace).split("\n");
        
        //ブロック毎にプログラムを実行
        try{
            for(const block of block_list){
            //ブロック毎に設定されたアクションはここに記述！！！！！！
                switch (block){
                    case "go_ahead":
                        this.goPlayer()
                        this.whichAction()
                        break;
                    case "turn_right":
                        this.turnPlayer()
                        break;
                }
            }
        }
        catch(e){
            alert(e);
        }
    }
}



















