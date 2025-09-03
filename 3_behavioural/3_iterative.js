// Iterator Pattern: Provides a way to access elements of a collection sequentially without exposing the 
// collection’s underlying structure.


class NameCollection {
    constructor() {
        this.names = [];
    }

    addName(name) {
        this.names.push(name);
    }

    // Create custom iterator
    createIterator() {
        let index = 0;
        const data = this.names;

        return {
            next: () => {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

// Client
const collection = new NameCollection();
collection.addName("Alice");
collection.addName("Bob");
collection.addName("Charlie");

const iterator = collection.createIterator();

let result = iterator.next();
while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}



// S (Single Responsibility) → Iterator handles traversal, collection handles storage.

// O (Open/Closed) → You can add new traversal strategies (e.g., reverse iterator) without modifying the collection.

// L (Liskov Substitution) → Any iterator (forward, reverse, custom) can replace another as long as it follows the 
// same interface (next()).

// I (Interface Segregation) → Clients only depend on the small next() interface, not on collection internals.

// D (Dependency Inversion) → Client depends on the abstraction (Iterator), not the concrete collection implementation.


// When you want sequential access without exposing collection internals.
// When you need different ways to traverse (e.g., forward, reverse, even-index only).
// To decouple traversal logic from the actual collection.


