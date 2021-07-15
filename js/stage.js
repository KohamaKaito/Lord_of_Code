class Stage{
    constructor(stageNumber, owned, needed, playerX, playerY, playerDirection, mapModel) {
        this.stageContainer = new PIXI.Container();
        this.stageNumber = stageNumber;
        let mapView;
        switch (stageNumber){
            case 1:
                mapView = new MapView(GameWindowWidth,GameWindowHeight,mapModel.map,
                    "images/materials/material01.png","images/materials/material13.png");
                break
            case 2:
                mapView = new MapView(GameWindowWidth,GameWindowHeight,mapModel.map,
                    "images/materials/material05.png","images/materials/material15.png");
                break
            case 3:
                mapView = new MapView(GameWindowWidth,GameWindowHeight,mapModel.map,
                    "images/materials/material20.png","images/materials/material21.png");
                break
            case 4:
                mapView = new MapView(GameWindowWidth,GameWindowHeight,mapModel.map,
                    "images/materials/material05.png","images/materials/material22.png");
                break
            case 5:
                mapView = new MapView(GameWindowWidth,GameWindowHeight,mapModel.map,
                    "images/materials/material03.png","images/materials/material14.png");
                break
            case 6:
                mapView = new MapView(GameWindowWidth,GameWindowHeight,mapModel.map,
                    "images/materials/material04.png","images/materials/material16.png");
                break
            case 7:
                mapView = new MapView(GameWindowWidth,GameWindowHeight,mapModel.map,
                    "images/materials/material02.png","images/materials/material23.png");
                break
            case 8:
                mapView = new MapView(GameWindowWidth,GameWindowHeight,mapModel.map,
                    "images/materials/material06.png","images/materials/material10.png");
                break
            case 9:
                mapView = new MapView(GameWindowWidth,GameWindowHeight,mapModel.map,
                    "images/materials/material06.png","images/materials/material12.png");
                break
        }

        for(let i=0;i<7;i++){
            for(let j=0;j<7;j++){
                this.stageContainer.addChild(mapView.map[i][j]);
            }
        }

        //let itemView = new ItemView("images/item.png", GameWindowWidth, GameWindowHeight, itemX, itemY);
        //this.stageContainer.addChild(itemView.item);

        let playerView = new PlayerView(GameWindowWidth, GameWindowHeight, playerX, playerY);
        this.stageContainer.addChild(playerView.anim0);

        let itemCountView = new ItemCountView(owned,needed, GameWindowWidth, GameWindowHeight);
        this.stageContainer.addChild(itemCountView.needed_text)
        this.stageContainer.addChild(itemCountView.owned_text)

        let playerModel = new Player(playerX,playerY,playerDirection);
        let itemCount = new ItemCount(owned, needed);
        this.gameController = new GameController(playerView, playerModel, mapView, mapModel, itemCount, itemCountView);

    }
}
