// 类示例
// import Greeter from './Greeter';


// let greeter=new Greeter('world');
// console.log(greeter.greet());


// 继承示例
// import Dog from './Dog';

// const dog=new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

// import Snake from './Snake';
// import Horse from './Horse';
// import Animal from './Animal';

// let sam=new Snake('小蛇'); //
// let tom:Animal=new Horse("小马"); // 
// sam.move(); // 爬行... 小蛇 moved 5m.
// tom.move(34); // 飞奔... 小马 moved 34m.


// 理解public、private、protected修饰符
import Animal from './Animal';
import Employee from './Employee';
import Rhino from './Rhino';

// let animal=new Animal("Cat");
// console.log(animal.name);

// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// animal = rhino;
// animal = employee; 

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误


