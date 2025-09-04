// Dependency Inversion Principle (DIP):

// High-level modules should not depend on low-level modules.
// Both should depend on abstractions.


// Violation
class MySQLDatabase {
    save(data) {
        console.log("Saving to MySQL:", data);
    }
}

class UserService {
    constructor() {
        this.database = new MySQLDatabase(); // ❌ tightly coupled
    }

    addUser(user) {
        this.database.save(user);
    }
}

const service = new UserService();
service.addUser({ name: "Nikhil" });




//   Fix
// Abstraction: any database must implement save()
class Database {
    save(data) {
        throw new Error("save() must be implemented");
    }
}

// Concrete implementations
class MySQLDatabase1 extends Database {
    save(data) {
        console.log("Saving to MySQL:", data);
    }
}

class MongoDBDatabase1 extends Database {
    save(data) {
        console.log("Saving to MongoDB:", data);
    }
}

// High-level module depends on abstraction
class UserService1 {
    constructor(database) {
        this.database = database; // ✅ injected dependency
    }

    addUser(user) {
        this.database.save(user);
    }
}

// Usage
const mysqlService = new UserService1(new MySQLDatabase1());
mysqlService.addUser({ name: "Nikhil" });

const mongoService = new UserService1(new MongoDBDatabase1());
mongoService.addUser({ name: "Priya" });
