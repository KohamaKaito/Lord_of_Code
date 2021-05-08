class GameController{

    // コンストラクタ
    constructor(pv, pm, mv, mm) {
        this.pv = pv;
        this.pm = pm;
        this.mv = mv;
        this.mm = mm;
    }

    // すべてのViewerに描画を命令する関数
    draw_all(){
        this.mv.draw();
        this.pv.draw();
    }

    // ModelとViewに前進を命令する関数
    go_player(){
        this.pm.go_ahead();
        this.pv.go_ahead(this.pm.get_direction());

    }

    // ModelとViewに右折を命令する関数
    turn_player(){
        this.pm.turn_right();
        this.pv.turn_right(this.pm.get_direction());
    }

    // マップ(Model)で現在地を参照してアクションを判断する
    which_action(){
        switch (mm.getState(this.pm.x, this.pm.y)){
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
}



















