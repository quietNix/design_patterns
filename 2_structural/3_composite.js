// The Composite Pattern is a structural design pattern that lets you treat individual objects and compositions of objects uniformly.
// Leaf: Represents a single object.
// Composite: Represents a collection of objects (can include leaves or other composites).
// Client: Can interact with both leaves and composites in the same way.


class FileSystemItem{
    getName(){console.log("Method not implemented");}
    getSize(){console.log("Method not implemented");}
}

class File extends FileSystemItem{
    constructor(name, size){
        super();
        this.name = name;
        this.size = size;
    }

    getName(){
        return this.name
    }

    getSize(){
        return this.size
    }
}

class Folder extends FileSystemItem{
    constructor(name){
        super();
        this.name = name;
        this.children =[]
    }

    addItem(item){
        this.children.push(item)
    }

    removeItem(item){
        this.children=this.children.filter((itm)=>itm!=item)
    }

    getName(){
        return this.name
    }

    getSize(){
        return this.children.reduce((total, item)=>total+item.getSize(), 0)
    }
}

const file1 = new File("file1", 34)
const file2 = new File("file2", 39)

console.log(file1.getName())
console.log(file2.getSize())

const folder1 = new Folder("folder1")
folder1.addItem(file1)
folder1.addItem(file2)

console.log(folder1.getName())
console.log(folder1.getSize())

const folder2 = new Folder("folder2")
folder2.addItem(file2)
folder2.addItem(folder1)

console.log(folder2.getName())
console.log(folder2.getSize())



// S (Single Responsibility): File handles files, Folder handles collections.
// O (Open/Closed): Add new types of FileSystemComponent without modifying existing code.
// L (Liskov Substitution): File and Folder can be used wherever FileSystemComponent is expected.
// I (Interface Segregation): Clients use only the methods they need (getSize, getName).
// D (Dependency Inversion): Client depends on abstract FileSystemComponent, not concrete File or Folder.

// When you have a hierarchical/tree structure (e.g., file systems, UI components, org charts).
// When you want uniform treatment of single and composite objects.

// Treat individual files and folders uniformly when calculating total size or performing operations.