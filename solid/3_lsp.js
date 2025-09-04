// Liskov Substitution Principle
// Objects of a superclass should be replaceable with objects of a subclass without breaking the program.

// If B is a subclass of A, then you should be able to use B wherever A is 
// expected, and the program should still work correctly.
// Subclasses should not break the behavior of their parent class.

class Bird{
    fly(){
        console.log("I am flying")
    }
}

class Penguin extends Bird{
    fly(){
        throw new Error("Can't fly");
    }
}

const makeFly=(bird)=>{
    bird.fly()
}

const bird = new Bird()
makeFly(bird)

const penguin = new Penguin()
// makeFly(penguin) //breaks cause methods not same





// Fix
class Bird1{
    makeSound(){
        console.log("I am sounding")
    }

}

class Bird2 extends Bird1{
    fly(){
        console.log("I am flying")
    }
}

class Penguin1 extends Bird1{
    swim(){
        console.log("i swim");
        
    }
}

const makeFly1=(bird)=>{
    bird.fly()
}

const bird1 = new Bird2()
makeFly1(bird1)

const penguin1 = new Penguin1()
// makeFly1(penguin1) not crashes, but compile error, not allowed