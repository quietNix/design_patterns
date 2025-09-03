// The Proxy Pattern is a structural design pattern that provides a surrogate or placeholder for another object to 
// control access to it.
// The proxy object implements the same interface as the original object.
// It can add extra behavior like access control, logging, caching, or lazy loading.
// The client interacts with the proxy just like the real object.


// Real Subject
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    getBalance() {
        console.log(`Balance for ${this.owner}: $${this.balance}`);
        return this.balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. Remaining balance: $${this.balance}`);
    }
}

// Proxy
class BankAccountProxy{
    constructor(account, user) {
        this.account = account;
        this.user = user;
    }

    getBalance() {
        if (this.user !== this.account.owner) {
            console.log("Access denied: cannot view balance");
            return;
        }
        return this.account.getBalance();
    }

    withdraw(amount) {
        if (this.user !== this.account.owner) {
            console.log("Access denied: cannot withdraw");
            return;
        }
        this.account.withdraw(amount);
    }
}

// Usage
const account = new BankAccount("Alice", 1000);

const proxyForAlice = new BankAccountProxy(account, "Alice");
proxyForAlice.getBalance();      // Balance for Alice: $1000
proxyForAlice.withdraw(200);     // Withdrawn $200. Remaining balance: $800

const proxyForBob = new BankAccountProxy(account, "Bob");
proxyForBob.getBalance();        // Access denied: cannot view balance
proxyForBob.withdraw(100);       // Access denied: cannot withdraw





// S (Single Responsibility): BankAccount handles core account logic; BankAccountProxy handles access control.
// O (Open/Closed): You can add new proxy behaviors (logging, caching) without changing BankAccount.
// L (Liskov Substitution): Proxy can be used wherever a BankAccount is expected without breaking behavior.
// I (Interface Segregation): Clients only use methods they need (getBalance, withdraw) via the proxy.
// D (Dependency Inversion): Proxy depends on the abstract BankAccount interface, not concrete client implementations.


// Object/resource creation is expensive in terms of memory or computation.
// You want to improve performance by delaying initialization until needed.
// You want to reduce startup time of applications.
// You want to avoid unnecessary work for objects that may never be used.

// A bank’s ATM acts as a proxy to the bank’s server—you interact with the ATM, which controls access to the actual account.
// A photo gallery shows a placeholder and loads the full image only when you scroll to it.