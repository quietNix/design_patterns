// Single Responsibility Principle

// A class or function should have only one responsibility.
// If it tries to do multiple things, changes in one area can break unrelated code.
// Encourages modular, maintainable, testable code


// Violation
class Printer {
    printDocument(doc) {
        console.log("Printing:", doc);
    }

    saveToFile(doc) {
        console.log("Saving to file:", doc);
    }
}

const printer = new Printer();
printer.printDocument("My Document");
printer.saveToFile("My Document");

// class will be modified to change printdocument or savetofile, which should have no
// on another function



// Fix
// Class for printing only
class Printer {
    printDocument(doc) {
        console.log("Printing:", doc);
    }
}

// Class for saving only
class FileSaver {
    saveToFile(doc) {
        console.log("Saving to file:", doc);
    }
}

const printer1 = new Printer();
const saver = new FileSaver();

printer.printDocument("My Document");
saver.saveToFile("My Document");
