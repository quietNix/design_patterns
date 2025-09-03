// The Template Method Design Pattern is a behavioral design pattern that defines the skeleton of an 
// algorithm in a base class but lets subclasses override specific steps without changing the overall structure.

class BeverageTemplate{
    prepare(){
        this.boilWater()
        this.pourInCup()
        this.brew()
        if (this.customerWantsCondiments()) {  // Hook
            this.addCondiments();
        }
    }

    boilWater(){
        console.log("Water is boiled.");
    }

    pourInCup(){
        console.log("Pured in cup.");
    }

    brew(){
        throw new Error("Method not implemented")
    }

    customerWantsCondiments(){
        throw new Error("Method not implemented");
    }

    addCondiments(){
        throw new Error("Method not implemented")
    }
}


class Tea extends BeverageTemplate{
    brew(){
        console.log("tea bags added");
    }

    addCondiments(){
        console.log("add lemon");
    }

    customerWantsCondiments(){
        return false
    }
}

class Coffee extends BeverageTemplate{
    brew(){
        console.log("coffee bags added");
    }

    addCondiments(){
        console.log("add choco powder");
    }

    customerWantsCondiments(){
        return true
    }
}

const tea = new Tea()
tea.prepare()

const coffee = new Coffee()
coffee.prepare()


// S (Single Responsibility) – Each class (Beverage, Tea, Coffee) has one responsibility: base template or specific implementation.

// O (Open/Closed) – We can add new beverages without modifying existing classes, only extending.

// L (Liskov Substitution) – Any subclass (Tea, Coffee) can replace Beverage without breaking the algorithm.

// I (Interface Segregation) – Subclasses only implement methods they need (brew, addCondiments, optional hook).

// D (Dependency Inversion) – High-level prepareRecipe() depends on abstract steps, not concrete implementations.



// When multiple classes share the same algorithm structure but differ in specific steps.
// When you need to enforce a consistent process flow across implementations.
// When you want to avoid code duplication by putting common steps in a base class.
// When you need to allow optional steps via hooks.
// When building frameworks or SDKs that define workflows with customizable parts.

// Ordering coffee at Starbucks: the process (choose drink → brew → serve) is fixed, but adding condiments 
// like milk or sugar is optional, which makes it a real-life example of Template Method with hooks.