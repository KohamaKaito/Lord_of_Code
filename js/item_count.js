class ItemCount {
    constructor(owned, needed) {
        this.owned = owned;
        this.needed = needed;
    }
    isComplete(){
        return this.owned == this.needed;
    }
    addOwned(){
        this.owned++;
    }
}