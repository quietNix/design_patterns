/*
Often when u need a set of similar objects build together, like ui page with multiple components, but either in dark or light theme
or veg or non-veg meal.
Note it is very much like factory method, just that the set of similar items will be created, so that in choice, only one place will
be changed.
*/



class VegBreakfast{
    constructor(){
        console.log("veg breakfast");
    }
}

class NonVegBreakfast{
    constructor(){
        console.log("non veg breakfast");
    }
}

class VegLunch{
    constructor(){
        console.log("veg lunch");
    }
}

class NonVegLunch{
    constructor(){
        console.log("veg lunch");
    }
}

class VegDinner{
    constructor(){
        console.log("veg Dinner");
    }
}

class NonVegDinner{
    constructor(){
        console.log("non veg Dinner");
    }
}

// now instead of manually adding conditionals for each lunch, dinner, breakfast, we simple use abstract method

class AbstractMealFactory{
    createBreakfast(){}
    createLunch(){}
    createDinner(){}
}

class VegMealFactory extends AbstractMealFactory{
    createBreakfast(){
        return new VegBreakfast()
    }

    createLunch(){
        return new VegLunch()
    }

    createDinner(){
        return new VegDinner()
    }
}

class NonVegFactory extends AbstractMealFactory{
    createBreakfast(){
        return new NonVegBreakfast()
    }

    createLunch(){
        return new NonVegLunch()
    }

    createDinner(){
        return new NonVegDinner()
    }
}

class MealService { 
    constructor(factory) {  // <-- Dependency Injected, MealService simply depends on AbstractMealFactory
        this.factory = factory;
    }

    serveMeals() {
        this.factory.createBreakfast();
        this.factory.createLunch();
        this.factory.createDinner();
    }
}

// ✅ Dependency Injection happens outside
const choice = "veg";
let factory; //depends on AbstractMealFactory

if (choice === "veg") {
    factory = new VegMealFactory();
} else {
    factory = new NonVegFactory();
}

const mealService = new MealService(factory);
mealService.serveMeals();



// SRP – Each class (VegBreakfast, NonVegLunch, VegFactory, NonVegFactory) has a single responsibility: creating one 
// specific meal type or factory type

// OCP – Adding a new meal type (e.g., Vegan) requires creating a new Vegan Lunch, breakfast, dinner & factory, not 
// modifying existing ones.

// LSP – VegMealFactory and NonVegFactory are replaceable as being subtypes of AbstractMealFactory on with client depends upon.

// ISP – AbstractMealFactory defines only meal-creation methods relevant to its purpose, no extra unused methods.

// DIP – The client depends on the abstraction (AbstractMealFactory), not on concrete factories directly.


// When products belong to families (e.g., Modern Chair + Modern Table vs Victorian Chair + Victorian Table).
// You want consistency among related objects and to avoid new everywhere.

// You buy a Victorian set (sofa, chair, table) from a single brand so all items match in style.