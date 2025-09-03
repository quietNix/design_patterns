// The Visitor Design Pattern is a behavioral pattern that lets you add new operations 
// to objects without modifying their classes, by using a separate Visitor object.

// Lets say i had book & electronics domain objects, then i needed to add discount functionality on it

class DiscountVisitor{
    visitBook(book){
        console.log(book.name + " have discount of 10 rupees on " + book.mrp)
    }

    visitElectronics(electronics){
        console.log(electronics.title + " have discount of 10 rupees on " + electronics.mrp)
    }
}

class Book{
    constructor(name, mrp){
        this.name=name
        this.mrp = mrp
    }

    // ... methods

    accept(visitor){
        visitor.visitBook(this)
    }
}

class Electronics{
    constructor(title, mrp){
        this.title = title
        this.mrp = mrp
    }

    accept(visitor){
        visitor.visitElectronics(this)
    }
}

const book = new Book("Design Pattern", 450)
const electronics = new Electronics("Iron", 1400)

const visitor = new DiscountVisitor()
book.accept(visitor)
book.accept(visitor)


// now i tied discount in one class, & whenever i need it, i will simply attach it to Domain, it will be used
// when multiple domain objects have same functionality tied, so instead of duplicating in all, use Visitor



// S: Book and Electronics only hold product data, while DiscountVisitor handles discount logic → each 
// class has a single responsibility.

// O: You can add new operations (e.g., TaxVisitor, ShippingVisitor) without modifying Book or 
// Electronics, keeping them closed for modification but open for extension.

// L: Any subclass of Book or Electronics can work with the same visitor without breaking behavior, so substitution is safe.

// I: If using interfaces, accept(visitor) is the only required method for elements; they aren’t forced 
// to implement unnecessary methods.

// D: High-level logic depends on the Visitor abstraction (visitBook, visitElectronics), not concrete implementations 
// of operations, so behavior can be swapped easily.



// Shopping Cart Discounts → Apply multiple discount strategies on different product types without changing product classes.
// Tax Calculation → Compute different tax rules for various item categories dynamically.
// Document Exporting → Export reports to PDF, Excel, or HTML without modifying document classes.
// UI Component Rendering → Apply themes or styles across buttons, text boxes, and dropdowns without altering their base code.
// File System Operations → Perform actions like size calculation, compression, or encryption on files and folders without changing their structure.
// Syntax Tree Processing → Add operations like code optimization or formatting on AST nodes without altering node classes.
// Analytics in Domain Models → Collect metrics across different entities (users, orders, products) without duplicating logic.