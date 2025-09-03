// The Decorator Pattern is a structural design pattern that lets you dynamically add new behavior to objects without modifying their original class.
// You wrap an object with a decorator.
// You can stack multiple decorators.
// It’s more flexible than subclassing.

class Coffee{
    cost(){
        return 5;
    }

    description(){
        return "Simple Coffee"
    }
}


class CoffeeDecorator{
    constructor(coffee){
        this.coffee= coffee
    }

    cost(){
        return this.coffee.cost()
    }

    description(){
        return this.coffee.description()
    }
}

class MilkDecorator extends CoffeeDecorator{
    cost(){
        return super.cost()+2
    }

    description (){
        return "Milk added to: " + super.description()
    }
}

class SugarDecorator extends CoffeeDecorator{
    cost(){
        return super.cost()+1
    }

    description (){
        return "Sugar added to: " + super.description()
    }
}

const coffee = new Coffee()
console.log(coffee.cost(), coffee.description())

const milkCofee = new MilkDecorator(coffee)
console.log(milkCofee.cost(), milkCofee.description())


const sugarMilkCofee = new SugarDecorator(milkCofee)
console.log(sugarMilkCofee.cost(), sugarMilkCofee.description())


// S (Single Responsibility): Each class has one job—Coffee is base, decorators add behavior.
// O (Open/Closed): Add new decorators without changing existing classes.
// L (Liskov Substitution): Decorators can replace Coffee anywhere without breaking code.
// I (Interface Segregation): Clients use only cost() and description().
// D (Dependency Inversion): Decorators depend on abstract Coffee (Coffee or Coffee Decorator), not concrete classes.



// You want to add responsibilities to objects dynamically without changing their code.
// You want to avoid an explosion of subclasses for every combination of features.
// You want to stack multiple behaviors on a single object flexibly.
// You want to adhere to Open/Closed Principle—extend behavior without modifying existing classes.
// Like any topping on a pizza, each decorator behaves like a pizza itself, so you can add toppings on top of toppings seamlessly.