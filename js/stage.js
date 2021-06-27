class Stage{
    constructor(stageNumber, owned, needed, playerX, playerY, playerDirection, itemX, itemY, mapModel) {
        this.stageContainer = new PIXI.Container();
        this.stageNumber = stageNumber;
        let mapView;
        if(stageNumber == 1 || stageNumber == 2){
            mapView = new MapView(GameWindowWidth,GameWindowHeight,mapModel.map,"images/map1_1.png","images/map1_3.png");
        }else {
            mapView = new MapView(GameWindowWidth,GameWindowHeight,mapModel.map,"images/map2_1.png","images/map2_3.png");
        }

        for(let i=0;i<7;i++){
            for(let j=0;j<7;j++){
                this.stageContainer.addChild(mapView.map[i][j]);
            }
        }

        let itemView = new ItemView("images/item.png", GameWindowWidth, GameWindowHeight, itemX, itemY);
        this.stageContainer.addChild(itemView.item);

        let playerView = new PlayerView(GameWindowWidth, GameWindowHeight, playerX, playerY);
        this.stageContainer.addChild(playerView.anim0);

        let itemCountView = new ItemCountView(owned,needed, GameWindowWidth, GameWindowHeight);
        this.stageContainer.addChild(itemCountView.needed_text)
        this.stageContainer.addChild(itemCountView.owned_text)

        let playerModel = new Player(playerX,playerY,playerDirection);
        let itemCount = new ItemCount(owned, needed);
        this.gameController = new GameController(playerView, playerModel, mapView, mapModel, itemView, itemCount, itemCountView);

    }
}
