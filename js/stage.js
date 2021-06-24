class Stage{
    constructor(stageNumber, owned, needed, playerX, playerY, playerDirection, itemX, itemY, mapModel) {
        this.stageContainer = new PIXI.Container();
        this.stageNumber = stageNumber;
        let mapView = new MapView('images/map0' + stageNumber + '.png', GameWindowWidth, GameWindowHeight);
        this.stageContainer.addChild(mapView.map);

        let playerView = new PlayerView(GameWindowWidth, GameWindowHeight);
        this.stageContainer.addChild(playerView.anim0);

        let itemCountView = new ItemCountView(owned,needed, GameWindowWidth, GameWindowHeight);
        this.stageContainer.addChild(itemCountView.needed_text)
        this.stageContainer.addChild(itemCountView.owned_text)

        let itemView = new ItemView("images/goal.png", GameWindowWidth, GameWindowHeight, itemX, itemY);
        this.stageContainer.addChild(itemView.item);


        let playerModel = new Player(playerX,playerY,playerDirection);
        let itemCount = new ItemCount(owned, needed);
        this.gameController = new GameController(playerView, playerModel, mapView, mapModel, itemView, itemCount, itemCountView);

    }
}
