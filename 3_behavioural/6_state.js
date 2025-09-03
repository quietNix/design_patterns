// The State pattern allows an object to change its behavior when its internal state changes.
// It looks like the object is changing its class at runtime.

// State interface
class AccountState {
    deposit(context, amount) { throw new Error("Not implemented"); }
    withdraw(context, amount) { throw new Error("Not implemented"); }
}

// Concrete States
class ActiveState extends AccountState {
    deposit(context, amount) {
        context.balance += amount;
        console.log(`Deposited ₹${amount}. Balance: ₹${context.balance}`);
    }

    withdraw(context, amount) {
        if (context.balance - amount < 0) {
            console.log("Overdrawn! Moving to Overdrawn state.");
            context.setState(new OverdrawnState());
        }
        context.balance -= amount;
        console.log(`Withdrew ₹${amount}. Balance: ₹${context.balance}`);
    }
}

class OverdrawnState extends AccountState {
    deposit(context, amount) {
        context.balance += amount;
        console.log(`Deposited ₹${amount}. Balance: ₹${context.balance}`);
        if (context.balance >= 0) {
            console.log("Account is Active again.");
            context.setState(new ActiveState());
        }
    }

    withdraw(context, amount) {
        console.log("Cannot withdraw. Account is Overdrawn ❌");
    }
}

class ClosedState extends AccountState {
    deposit(context, amount) {
        console.log("Account is closed. No deposits allowed ❌");
    }

    withdraw(context, amount) {
        console.log("Account is closed. No withdrawals allowed ❌");
    }
}

// Context
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
        this.state = new ActiveState();
    }

    setState(state) {
        this.state = state;
    }

    deposit(amount) {
        this.state.deposit(this, amount);
    }

    withdraw(amount) {
        this.state.withdraw(this, amount);
    }

    close() {
        this.setState(new ClosedState());
        console.log("Account has been closed 🔒");
    }
}

// Client
const account = new BankAccount(100);
account.withdraw(150); // Overdrawn
account.deposit(100);  // Active again
account.withdraw(50);  // Works
account.close();       // Closed
account.deposit(50);   // Not allowed



// S (Single Responsibility) → Each state (Active, Overdrawn, Closed) has only one responsibility: define behavior for that state.

// O (Open/Closed) → You can add new states (e.g., Frozen, Suspended) without modifying existing code.

// L (Liskov Substitution) → Any state can replace another since they follow the same AccountState interface.

// I (Interface Segregation) → Context (BankAccount) only depends on state operations it actually needs (deposit, withdraw).

// D (Dependency Inversion) → BankAccount depends on the abstraction (AccountState), not on concrete state classes.


// An object’s behavior depends on its current state (e.g., active, paused, closed).
// You want to avoid complex if/else or switch statements for state handling.
// The object needs to change behavior at runtime without changing its class.
// You want clear separation of concerns, where each state handles its own rules.
// New states might be added later, and you want the design to be extensible

// Media player 🎵 → Playing → Paused → Stopped (controls behave differently in each state).
// but the controls will remain same, like deposit, & withdraw, they have different meaning in different scenarios,
// hence change of behavour & classes.