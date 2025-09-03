// Builder Design Pattern is a creational pattern that separates the construction of a complex object from its 
// representation, allowing you to create different representations of the same object step by step without 
// changing its core structure.
// Instead of passing 10 arguments in a constructor, you use a builder to set properties one by one and then build the final immutable object.
// Else in UserBuilder, constructor telescoping would have happened

class User {
    constructor(builder){
        Object.assign(this, builder);
        Object.freeze(this);
    }
}

class UserBuilder{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }

    setAge(age){
        this.age=age;
        return this;
    }

    setPhone(phone){
        this.phone=phone
        return this
    }

    setAddress(address){
        this.address=this.address
        return this
    }

    build(){
        return new User(this)
    }
}

const user = new UserBuilder("Nikhil", "nik@gmail.com")
.setAge(26)
.setPhone("8929020972")
.build()

console.log(user)




// S (SRP): User handles only user data, and UserBuilder handles construction logic.

// O (OCP): You can add new builder methods (like setGender) without changing existing builder logic or classes User.

// L (LSP): Any future subclass of UserBuilder, like AdminUserBuilder can be used to build new user with special privileges.

// I (ISP): Client only uses builder methods (like in example, it leaves setAddress) it needs (fluent interface, no forced methods).

// D (DIP): User depends on abstraction of builder, not concrete details of construction steps.




// Many optional parameters: Avoids telescoping constructors.
// Readable object creation: Allows step-by-step setup.
// Immutable objects: Values set only during build.
// Different variations: Easily create different object configurations.
// Complex construction logic: Centralizes creation process.

// real life example- Building a custom pizza with optional toppings step by step, then finalizing it into one immutable pizza object.