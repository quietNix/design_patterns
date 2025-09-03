// The Observer Pattern defines a one-to-many dependency between objects. When one object (subject) 
// changes state, all its dependents (observers) are automatically notified and updated.

class NewsPublisher{
    constructor(){
        this.subscribers = [];
        this.latestNews="";
    }

    addSubscribers(subs){
        this.subscribers.push(subs)
    }

    publish(){
        this.subscribers.forEach((subs)=>{subs.send(this.latestNews)})
    }

    addNews(news){
        this.latestNews=news;
        this.publish()
    }
}

class Subscriber{
    send(){
        console.log("Method not implemented");
    }
}

class EmailSubscriber extends Subscriber{
    constructor(email){
        super();
        this.email = email
    }

    send(news){
        console.log("News published with email", this.email, news)
    }
}

class PhoneSubscriber extends Subscriber{
    constructor(phone){
        super();
        this.phone = phone
    }

    send(news){
        console.log("News published with phone", this.phone, news)
    }
}


const newsPublisher = new NewsPublisher()

const emailSubscriber1 = new EmailSubscriber("1@gmail.com")
const emailSubscriber2 = new EmailSubscriber("2@gmail.com")

newsPublisher.addSubscribers(emailSubscriber1)
newsPublisher.addSubscribers(emailSubscriber2)

const phoneSubscriber1 = new PhoneSubscriber("1")
const phoneSubscriber2 = new PhoneSubscriber("2")

newsPublisher.addSubscribers(phoneSubscriber1)
newsPublisher.addSubscribers(phoneSubscriber2)

newsPublisher.addNews("This is first news")
newsPublisher.addNews("This is second news")




// S (Single Responsibility): Each class has a single responsibility — NewsPublisher manages subscribers, 
// EmailSubscriber and SMSSubscriber handle notifications.

// O (Open/Closed): You can add new types of subscribers without modifying existing classes.

// L (Liskov Substitution): Any subclass of Subscriber can replace the base Subscriber without breaking the publisher.

// I (Interface Segregation): Observers only implement the send() method; they aren’t forced to implement unrelated methods.

// D (Dependency Inversion): NewsPublisher depends on the Subscriber abstraction, not on concrete subscriber classes.


// When one object’s change needs to update many others.
// When you want to decouple the subject from observers.
// Event-driven systems like UI frameworks, notifications, or reactive programming.

// Event listeners in JS (click, input, resize) or whatsapp messaging


