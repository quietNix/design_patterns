// The Memento Design Pattern is a behavioral pattern that lets you capture an object's 
// state so you can restore it later without exposing its internal details. It’s commonly used for undo/redo functionality.

class Momento{
    constructor(state){
        this.state=state;
    }

    getState(){
        return this.state;
    }
}

class Editor{
    constructor(){
        this.content='';
    }

    add(content){
        this.content+=content;
    }

    getContent(){
        return this.content;
    }

    getSnapshot(){
        return new Momento(this.content);
    }

    resetToSnapshot(momento){
        this.content=momento.getState()
    }
}

class History{
    constructor(){
        this.momentoes = []
    }

    add(momento){
        this.momentoes.push(momento)
    }

    get(){
        return this.momentoes.shift()
    }
}

const editor = new Editor()
editor.add("Hi this is starting of this edit. ")
const snapshot1 = editor.getSnapshot()
const history = new History()
history.add(snapshot1)

console.log("Current State of editor was:", editor.getContent())
console.log("Saving current state as Version 1");


editor.add("The next work will be to catch the idea of working of lld")
const snapshot2 = editor.getSnapshot()
history.add(snapshot2)

console.log("Current State of editor was:", editor.getContent())
console.log("Saving current state as Version 2");

const historySnapshot1 = history.get()
editor.resetToSnapshot(historySnapshot1)
console.log("Version 1 history was: ", editor.getContent());



const historySnapshot2 = history.get()
editor.resetToSnapshot(historySnapshot2)
console.log("Version 2 history was:", editor.getContent())





// S: Editor handles content editing, Momento handles state storage, and History manages snapshots, so each 
// class has one responsibility.

// O: You can extend functionality without modifying existing classes, making it open for extension and closed for modification.

// L: Any subclass of Momento (e.g., EncryptedMomento) or History can replace the base class 
// without breaking the logic, maintaining expected behavior.

// I: If interfaces were used, Editor would only expose snapshot methods, and History only manages mementos, 
// avoiding unnecessary dependencies.

// D: High-level modules (Editor) do not depend on low-level details; they depend on the abstraction of saving/restoring 
// state, so History could be replaced with any storage mechanism (DB, file system).



// You need undo/redo functionality (e.g., text editors, graphic design tools).
// You want to restore an object’s previous state without exposing its internal structure.
// You need state snapshots for rollback in case of failure (e.g., database transactions, configuration changes).
// You want history tracking (e.g., game save points, form navigation).
// You need to decouple state management from core logic for cleaner design.

// A real-life example of the Memento pattern is the Undo feature in Microsoft Word or Google Docs: