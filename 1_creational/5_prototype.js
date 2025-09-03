// The Prototype Design Pattern in JavaScript is a creational pattern that lets you create new objects 
// by cloning existing ones (called the prototype) instead of creating them from scratch.

class Document{
    constructor(title, content){
        this.title=title;
        this.content=content;
    }

    clone(){
        return new Document(this.title, this.content)
    }
}

const doc1= new Document("Reports", "Main Content")

const doc2 = doc1.clone()
doc2.attachPrint=function() {console.log(this.title, "file is being printed")}

doc2.attachPrint()


// SRP: Document only manages title, content, and cloning—not printing.

// OCP: You added attachPrint() without modifying Document.

// LSP: Cloned objects behave like original Document, can be used wherever Document is used.

// ISP: No unnecessary methods forced on the class.

// DIP: Not applicable here (no dependencies involved).



// When object creation is costly or complex, and cloning is cheaper.
// When you need many similar objects with slight differences.
// When you want to avoid creating multiple subclasses for variations.
// When object types are decided at runtime and flexibility is needed.
// When you want to hide complex object creation logic from the client.

// In a graphic design tool (like Figma or Canva), when you create a text box or shape and 
// then duplicate it to make copies with slight changes (color, text), that duplication uses 
// the Prototype Pattern instead of reconstructing the object from scratch.
