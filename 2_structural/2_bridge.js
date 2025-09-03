// The Bridge Pattern is a structural design pattern that decouples an abstraction from its 
// implementation, so that both can vary independently.
// Abstraction: The high-level control or interface.
// Implementation: The low-level details that the abstraction uses.

class Color{
    applyColor(){
        throw new Error("Method must be implemented");
        
    }
}

class RedColor extends Color{
    applyColor(){
        return "red"
    }
}

class BlueColor extends Color{
    applyColor(){
        return "blue"
    }
}

class Shape{
    constructor(color){
        this.color = color
    }
    draw(){
        throw new Error("Method must be implemented");
    }
}

class CircleShape extends Shape{
    draw(){
        console.log("Drawing Circle with: ", this.color.applyColor())
    }
}

class SquareShape extends Shape{
    draw(){
        console.log("Drawing Square with: ", this.color.applyColor())
    }
}


const redColor = new RedColor()
const redColorSquareShape = new SquareShape(redColor)
redColorSquareShape.draw()

const redColor1 = new RedColor()
const redColorCircleShape = new CircleShape(redColor1)
redColorCircleShape.draw()


const blueColor = new BlueColor()
const blueColorCircleShape = new CircleShape(blueColor)
blueColorCircleShape.draw()


const blueColor2 = new BlueColor()
const blueColorSquareShape = new SquareShape(blueColor2)
blueColorSquareShape.draw()



// S (Single Responsibility): Each class has a single responsibility—Color defines color, Shape defines shape behavior.

// O (Open/Closed): You can add new colors or shapes without modifying existing classes.

// L (Liskov Substitution): Subclasses (RedColor, BlueColor, CircleShape, SquareShape) can replace their base classes without breaking the code.

// I (Interface Segregation): Color and Shape define minimal methods that their subclasses must implement.

// D (Dependency Inversion): Shape depends on the abstract Color interface, not concrete color classes.



// You have multiple variants of an abstraction and multiple implementations, and you want to avoid combinatorial explosion of classes.
// You want to change/extend abstractions and implementations independently.
// You need a flexible, decoupled design where high-level logic doesn’t depend on low-level details.
// You want to swap implementations at runtime without changing the abstraction.

// Painting any shape with any color without creating a separate class for every shape-color combination.