// The Adapter pattern converts one interface into another so that two incompatible classes can work together.
// It does NOT change existing code; instead, it acts like a translator.

class PaytmPaymentSystem{
    pay(amount){
        console.log("amount paid via paytm: ", amount);
        
    }
}

// const paymentSystem = new PaytmPaymentSystem()
// paymentSystem.pay()

// then paypal is introduced
class PaypalPaymentSystem{
    makePayment(amount){
        console.log("amount paid via paypal: ", amount);
        
    }
}

class AdapterPaypalPaymentSystem{
    constructor(paypalPaymentSystem){
        this.paypalPaymentSystem = paypalPaymentSystem
    }

    pay(amount){
        this.paypalPaymentSystem.makePayment(amount)
    }
}

const paypalPaymentSystem = new PaypalPaymentSystem()
const paymentSystem = new AdapterPaypalPaymentSystem(paypalPaymentSystem)
paymentSystem.pay(55)

// S (Single Responsibility): Adapter has a single job—translate PayPal’s interface to .pay().

// O (Open/Closed): You can add new payment systems without modifying existing client code.

// L (Liskov Substitution): Adapter allows PayPal to be used wherever a Paytm-like system is expected.

// I (Interface Segregation): Client only depends on .pay(), not unnecessary PayPal methods.

// D (Dependency Inversion): Client depends on abstraction (pay() method), not concrete PayPal implementation.




// You are switching from an old API to a new API but want old code to still work.
// Two systems don’t share the same interface, but you need them to talk.

// real-life example: A power plug adapter lets a US laptop plug work in a European socket without 
// changing the laptop or the socket.