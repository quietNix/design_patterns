// OOP is a programming paradigm where we organize code around objects rather than functions or logic. An object usually represents a real-world entity and has:
// Properties (attributes/state) – describe the object.
// Methods (behavior) – functions the object can perform.


// Four Pillars of OOP
// Encapsulation → Bundling data (properties) and methods together.
// Abstraction → Hiding unnecessary details, exposing only essentials.
// Inheritance → Reusing properties & methods from another class.
// Polymorphism → Same method name, different behavior in subclasses.

// Classes
// car entity creation via object
const car1 = {
    brand: "Tesla",
    color: "red",
    speed: 120,
    drive: function () {
        console.log(`${this.brand} is driving at ${this.speed} km/h`);
    }
};

car1.drive(); // Tesla is driving at 120 km/h


// car entity creation via Function
function CarFunction(brand, color, speed) {
    this.brand = brand;
    this.color = color;
    this.speed = speed;

    this.drive = function () {
        console.log(`${this.brand} is driving at ${this.speed} km/h`);
    };
}

const car2 = new CarFunction("Tesla", "red", 120);
const car3 = new CarFunction("BMW", "blue", 150);

car2.drive(); // Tesla is driving at 120 km/h
car3.drive(); // BMW is driving at 150 km/h


// car entity creation via Class
class Car {
    constructor(brand, color, speed) {
        this.brand = brand;
        this.color = color;
        this.speed = speed;
    }

    drive() {
        console.log(`${this.brand} is driving at ${this.speed} km/h`);
    }
}

const car4 = new Car("Tesla", "red", 120);
const car5 = new Car("BMW", "blue", 150);

car1.drive(); // Tesla is driving at 120 km/h


// OOPS
// Encapsulation- keep data private
class BankAccount {
    #balance = 0; // private
    constructor(owner) {
        this.owner = owner;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount("Nikhil");
acc.deposit(500);
console.log(acc.getBalance()); // 500
//   console.log(acc.#balance); // Error! Cannot access private field



// Inheritance- Child class inherits properties and methods from parent class.
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }

    move() {
        console.log(`Moving at ${this.speed} km/h`);
    }
}

class Car1 extends Vehicle {
    constructor(brand, speed) {
        super(speed); // call parent constructor
        this.brand = brand;
    }

    drive() {
        console.log(`${this.brand} is driving at ${this.speed} km/h`);
    }
}

const car = new Car1("Tesla", 120);
car.move(); // Moving at 120 km/h
car.drive(); // Tesla is driving at 120 km/h


// Polymorphism- Same method name behaves differently based on object.
class Animal {
    speak() {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow!");
    }
}

const dog = new Dog();
const cat = new Cat();
dog.speak(); // Woof!
cat.speak(); // Meow!


// Abstraction- Hiding complex details and showing only what’s needed.
class CoffeeMachine {
    #boilWater() { console.log("Boiling water"); }
    #brewCoffee() { console.log("Brewing coffee"); }

    makeCoffee() {
        this.#boilWater();
        this.#brewCoffee();
        console.log("Coffee is ready!");
    }
}

const machine = new CoffeeMachine();
machine.makeCoffee(); // Only makeCoffee is accessible
