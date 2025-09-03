// The Factory Method design pattern defines an interface for creating objects but lets subclasses decide 
// which class to instantiate. It allows a class to defer instantiation to its subclasses, promoting loose 
// coupling. Instead of calling new directly, client code uses the factory method, which 
// returns an appropriate product instance.

class Notification { //abstract class, interface
    constructor() {
        if (new.target === Notification) {
            throw new Error("Cannot instantiate abstract class");
        }
    }
    send(message){
        throw new Error ("Method must be implemented")
    }
}

class EmailNotification extends Notification{ //concrete implementation
    send(message){
        console.log("Message sent by email: ", message)
    }
}

class SMSNotification extends Notification{ //concrete implementation
    send(message){
        console.log("Message sent by sms: ", message)
    }
}

class NotificationFactory{ //abstract class, interface
    constructor() {
        if (new.target === Notification) {
            throw new Error("Cannot instantiate abstract class");
        }
    }

    createNotification(){
        throw new Error("Method must be implemented")
    }
}

class EmailNotificationFactory extends NotificationFactory{ //concrete implementation
    createNotification(){
        return new EmailNotification()
    }
}

class SMSNotificationFactory extends NotificationFactory{ //concrete implementation
    createNotification(){
        return new SMSNotification()
    }
}


// Based on client code, initialise either of the factories
const notificationFactory = new SMSNotificationFactory()

// client code further
const notification= notificationFactory.createNotification()  
notification.send("Hello World") //srp



// SRP (Single Responsibility): Each class has one reason to change – factories create objects, notifications send messages.

// OCP (Open/Closed): You can add new notification types (PushNotification, PushNotificationFactory) without modifying existing code.

// LSP (Liskov Substitution): EmailNotification, SMSNotification are subtypes of Notification, wherever client depends on abstract Notification
// we can use any subtype (SMSNotification, EmailNotification) which extends Notification, without breaking any functionality

// ISP (Interface Segregation): Clients depend only on methods they use (send()), avoiding large unnecessary interfaces.
// there are no methods in abstract classes, that are not required in concrete classes, for ex, Notification could have log, which is not required in concreteClasses

// DIP (Dependency Inversion): Client depends on an abstract factory (NotificationFactory) and abstract product (Notification), not concrete classes.
// concrete classes define low level code.

// NotificationFactory.createNotification() → abstract factory method declaration
// EmailNotificationFactory.createNotification() → concrete factory method implementation


// Unknown exact class at compile time: Lets subclasses decide which object to create.
// Decoupling object creation: Removes direct new calls from client code.
// Easier to add new types: Add new subclasses without changing client code.
// Polymorphic object creation: Returns objects of a common interface.
// When creation logic varies: Useful if construction needs custom rules.

// real life example- Imagine a restaurant that serves food, but the chef in each branch decides how to make the dish based on 
// local taste. The menu (base class) is the same, but the recipe (object creation) is left to each branch (subclass).