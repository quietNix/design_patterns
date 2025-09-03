// The Chain of Responsibility pattern allows a request to pass along a chain of handlers. Each handler decides either to 
// process the request or pass it to the next handler.
// ✅ This decouples the sender of the request from its receivers.

class Approver {
    setNext(approver) {
        this.nextHandler = approver;
        return approver
    }
    approve(amount) {
        if (this.nextHandler){
            return this.nextHandler.approve(amount);
        }else{
            throw new Error("No Parent Hander present");
            
        }
    }
}

class Manager extends Approver{
    approve(amount){
        if(amount<=1000){
            console.log("Manager approved " + amount);
        }else{
            return super.approve(amount)
        }
    }
}

class Director extends Approver{
    approve(amount){
        if(amount>1000 && amount<=3000){
            console.log("Director approved " + amount);
        }else{
            return super.approve(amount)
        }
    }
}


class CEO extends Approver{
    approve(amount){
        if(amount<5000){
            console.log("CEO approved " + amount);
        }else{
            return super.approve(amount)
        }
    }
}

const manager = new Manager()
const director = new Director()
const ceo = new CEO()

manager.setNext(director).setNext(ceo)

manager.approve(500) // manager approved
manager.approve(1500) // director approved
manager.approve(3500) //ceo approved




// S (Single Responsibility): Each handler class (Manager, Director, CEO) is responsible only for deciding 
// approval for its range of amounts.

// O (Open/Closed): You can extend the chain with new approvers without modifying existing handler logic.

// L (Liskov Substitution): Any subclass of Approver can replace the base Approver in the 
// chain without affecting request handling.

// I (Interface Segregation): Handlers implement only the approve() method, keeping the interface minimal and focused.

// D (Dependency Inversion): Client code depends on the abstract Approver class rather than concrete handler implementations.



// Multiple objects can handle a request, but the sender doesn’t need to know which one.
// You want to avoid long if-else or switch statements for handling requests.
// You need dynamic, flexible chains of processing logic.
// Requests might be processed by zero, one, or multiple handlers in a sequence.
// You’re implementing middleware, approval workflows, logging, or event handling where the request passes through a chain.

// Customer support escalation.
// Event bubbling in UI frameworks.