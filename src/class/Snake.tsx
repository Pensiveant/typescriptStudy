import Animal from './Animal';

class Snake extends Animal {
    constructor (name:string){
        super(name);
    }
    move(distanceInMeters=5){
        console.log("爬行...");   // 爬行...
        super.move(distanceInMeters)
    }
}

export default Snake;