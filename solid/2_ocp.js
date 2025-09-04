// open-close principle
// Software entities (classes, functions, modules) should be open for 
// extension but closed for modification.

// You can add new functionality without changing existing code.
// You don’t break existing code when you add new features.

// Violation
class Discount {
    calculate(price, type) {
        if (type === "newUser") {
            return price * 0.9; // 10% off
        } else if (type === "holiday") {
            return price * 0.8; // 20% off
        } else {
            return price;
        }
    }
}

const discount = new Discount();
console.log(discount.calculate(100, "newUser"));  // 90
console.log(discount.calculate(100, "holiday"));  // 80

// with addition of new type of discount, class Discount will be updated


// Fix
// Each discount type has its own class
class NewUserDiscount {
    calculate(price) {
        return price * 0.9;
    }
}

class HolidayDiscount {
    calculate(price) {
        return price * 0.8;
    }
}

// The main Discount class doesn't change
class Discount {
    constructor(strategy) {
        this.strategy = strategy;
    }

    calculate(price) {
        return this.strategy.calculate(price);
    }
}

// Usage
const newUserDiscount = new Discount(new NewUserDiscount());
console.log(newUserDiscount.calculate(100)); // 90

const holidayDiscount = new Discount(new HolidayDiscount());
console.log(holidayDiscount.calculate(100)); // 80
