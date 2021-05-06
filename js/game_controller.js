class GameController{
    constructor(player, player_view, map_view, ctx, width, height){
        this.player = player
        this.player_view = player_view
        this.map_view = map_view
        this.ctx = ctx
        this.width = width
        this.height = height
    }

    OnClick(){

    }

    go_ahead(){
        this.player.go_ahead()
        this.playerView.go_ahead(player.get_direction())
        this.player.get_status()
    }

    view(){
        //this.player_view.sleep(1000)
        this.map_view.draw_map(this.ctx, this.width, this.height)
        this.player_view.draw_player(this.ctx, this.width, this.height)
        requestAnimationFrame( this.view );
    }
}





/*
for block in getBlockInformation(){ //リスト?
    switch block{
        case go_ahead:
           this.go_ahead() 
    }
} 
*/

// canvasの設定
var canvas = document.getElementById( 'canvas' );

canvas.width = window.innerWidth/2;	    // canvasの横幅
canvas.height = window.innerHeight;	    // canvasの縦幅

// コンテキストを取得
var ctx = canvas.getContext( '2d' );

// プレイヤービューのオブジェクトを作成
var pv = new PlayerView('images/player_north.png')
pv.x = canvas.width/7 * 3;
pv.y = canvas.height/7 * 4;

// プレイヤーモデルのオブジェクトを作成
var pm = new Player(3,4,0)


// マップビューのオブジェクトを作成
var mv = new MapView('images/map1.png')

//ゲームマスターのオブジェクトを作成
var gm = new GameController(pm, pv, ctx, canvas.width, canvas.height)

addEventListener('load', gm.view(), false);