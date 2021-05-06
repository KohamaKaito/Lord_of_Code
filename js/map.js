class Map{
    map = [
        [MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE],
        [MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE],
        [MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE],
        [MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE],
        [MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE],
        [MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE],
        [MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE,MapState.state.CAN_MOVE]
    ]
    getState(x,y){
        return this.map[x,y]
    }
}

class MapState{
    state = {
        CAN_MOVE : 1,
        CAN_NOT_MOVE : 2,
        GOAL : 3
    }
    static state;
}