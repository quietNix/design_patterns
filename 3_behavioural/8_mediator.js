// The Mediator Design Pattern is a behavioral pattern that centralizes communication between objects 
// so they don’t talk directly to each other, reducing tight coupling. Instead, they communicate through a mediator.

class Chatroom{
    showMessage(user, msg){
        console.log("Msg sent by ", user.name, "is: ", msg);
    }
}

class User{
    constructor(name, chatroom){
        this.name=name
        this.chatroom=chatroom
    }

    sendMsg(msg){
        this.chatroom.showMessage(this, msg)
    }
}

class AdminUser extends User{
    sendMsg(msg){
        this.chatroom.showMessage(this, msg + " (admin)")
    }
}

const chatroom = new Chatroom()

const user1 = new User("Alice", chatroom)
const user2 = new User("Bob", chatroom)
const user3 = new AdminUser("Nikhil", chatroom)

user1.sendMsg("Hi Bob, what are you doing this week")
user2.sendMsg("Hey alice, planning for a trek, you?")
user3.sendMsg("Hi both, this is admin user.")

// see, chatroom is they key. chatroom expects user, user expects chatroom, both are tied to each other



// S: Chatroom only handles message routing, and User only handles sending messages, so each class has one clear responsibility.

// O: you can add new features like message history or filters by extending Chatroom without changing 
// existing code, making it open for extension but closed for modification.

// L: Any subclass like PremiumUser or SecureChatroom can replace the base class without breaking behavior, 
// ensuring polymorphic compatibility.

// I: If interfaces were used, User and Chatroom would only define what they need (e.g., send() for User, 
// showMessage() for Chatroom), avoiding unnecessary dependencies.

// D: User depends on an abstract idea of a Chatroom, not a concrete implementation; with DI, you can swap 
// Chatroom implementations (e.g., LoggingChatroom) without changing User.


// Complex communication exists between multiple objects, and direct connections create tight coupling.
// You need centralized control for interactions instead of objects knowing too much about each other.
// Adding or removing components should not require modifying many other classes.
// You want to reduce dependency spaghetti in systems with many interacting parts.
// You are building UI components, chat systems, event-driven apps, or modular architectures.

// Planes (colleagues) do not communicate directly with each other; instead, they all communicate through the control 
// tower (mediator), which manages takeoffs and landings to avoid collisions.