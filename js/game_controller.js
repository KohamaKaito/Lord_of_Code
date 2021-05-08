class GameController{

    // コンストラクタ
    constructor(pv, pm, mv ) {
        this.pv = pv;
        this.pm = pm;
        this.mv = mv;
        //this.mm = mm;
    }

    // すべてのViewerに描画を命令する関数
    draw_all(){
        this.mv.draw();
        this.pv.draw();
    }

    // ModelとViewに前進を命令する関数
    go_player(){
        this.pm.go_ahead();
        // Modelからデータを参照
        var direction = this.pm.get_direction();
        this.pv.go_ahead(direction);
    }

    // ModelとViewに右折を命令する関数
    turn_player(){
        this.pm.turn_right();
        // Modelからデータを参照
        var direction = this.pm.get_direction();
        this.pv.turn_right(direction);
    }
}



















