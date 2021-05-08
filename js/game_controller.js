class GameController{
    constructor(pv, pm, mv ) {
        this.pv = pv;
        this.pm = pm;
        this.mv = mv;
        //this.mm = mm;
    }
    draw_all(){
        this.mv.draw();
        this.pv.draw();
    }
    go_player(){
        this.pm.go_ahead();
        var direction = this.pm.get_direction();
        this.pv.go_ahead(direction);
    }
    turn_player(){
        this.pm.turn_right();
        var direction = this.pm.get_direction();
        this.pv.turn_right(direction);
    }
}



















