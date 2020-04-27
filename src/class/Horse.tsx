import Animal from './Animal';

// 定义一个“马”类
class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("飞奔...");
        super.move(distanceInMeters);
    }
}

export default Horse;