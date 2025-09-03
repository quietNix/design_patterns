// The Strategy Pattern allows you to define a family of algorithms, encapsulate each one, 
// and make them interchangeable. The client can choose which algorithm to use at runtime.


// Strategy Interface
class SortStrategy {
    sort(data) {}
}

// Concrete Strategies
class BubbleSort extends SortStrategy {
    sort(data) {
        console.log("Sorting using Bubble Sort");
        return data.sort();
    }
}

class QuickSort extends SortStrategy {
    sort(data) {
        console.log("Sorting using Quick Sort");
        return data.sort()
    }
}

// Context
class Sorter {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    sort(data) {
        return this.strategy.sort(data);
    }
}

// Client code
const numbers = [5, 3, 8, 4, 2];

const strategy = new BubbleSort()
const sorter = new Sorter(strategy);
console.log(sorter.sort([...numbers]));

sorter.setStrategy(new QuickSort());
console.log(sorter.sort([...numbers]));




// S (Single Responsibility): Each class has one responsibility — ConcreteStrategy implements a specific 
// algorithm, and Context delegates execution.

// O (Open/Closed): You can add new strategies without modifying existing classes.

// L (Liskov Substitution): Any ConcreteStrategy can replace the base Strategy in the context without breaking it.

// I (Interface Segregation): Strategies implement only the sort() method; no extra methods are forced.

// D (Dependency Inversion): The Context depends on the Strategy abstraction, not on concrete implementations.




// You have multiple ways to perform an operation and want to switch between them dynamically.
// You want to avoid long conditional statements (if/switch) to choose behavior.
// You need runtime flexibility to select or change an algorithm.
// You want to encapsulate algorithms so they can vary independently from the client.
// You want to decouple the client from concrete implementations, promoting extensibility.

// Users can pay via PayPal, Credit Card, or Wallet, and the system can switch methods at runtime.