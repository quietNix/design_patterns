// Interface Segregation Principle
// No client should be forced to depend on methods it does not use.

// Violation
class Machine {
    print(doc) {
        console.log("Printing", doc);
    }

    scan(doc) {
        console.log("Scanning", doc);
    }

    fax(doc) {
        console.log("Faxing", doc);
    }
}

class OldPrinter extends Machine {
    scan() {
        throw new Error("Scan not supported!"); // ❌
    }

    fax() {
        throw new Error("Fax not supported!"); // ❌
    }
}

const printer = new OldPrinter();
printer.print("My Doc");   // ✅ works
// printer.scan("My Doc");    // ❌ crash




// Fix
class Printer {
    print(doc) {
        console.log("Printing", doc);
    }
}

class Scanner {
    scan(doc) {
        console.log("Scanning", doc);
    }
}

class Fax {
    fax(doc) {
        console.log("Faxing", doc);
    }
}

// Old printer only supports printing
class OldPrinter1 extends Printer { }

// Modern machine supports all
class ModernMachine {
    constructor() {
        this.printer = new Printer();
        this.scanner = new Scanner();
        this.faxer = new Fax();
    }

    print(doc) {
        this.printer.print(doc);
    }

    scan(doc) {
        this.scanner.scan(doc);
    }

    fax(doc) {
        this.faxer.fax(doc);
    }
}

// Usage
const oldPrinter = new OldPrinter1();
oldPrinter.print("My Doc");   // ✅ Works, no fake scan/fax

const modernMachine = new ModernMachine();
modernMachine.print("My Doc");
modernMachine.scan("My Doc");
modernMachine.fax("My Doc");
