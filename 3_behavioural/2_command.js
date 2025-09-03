// The Command Pattern encapsulates a request as an object, allowing you to parameterize clients with different 
// requests, queue or log requests, and support undoable operations.


// Receiver
class Light{
    turnOn(){
        console.log("Light is on");
    }

    turnOff(){
        console.log("Light is off");
    }
}

// Commamd Interface
class Command{
    execute(){}
}

// Command Concrete
class TurnOnCommand extends Command{
    constructor(light){
        super();
        this.light=light;
    }

    execute(){
        this.light.turnOn()
    }
}

class TurnOffCommand extends Command{
    constructor(light){
        super();
        this.light=light;
    }

    execute(){
        this.light.turnOff()
    }
}

// 1. Invoker, dont know about command
class RemoteControl{
    setCommand(command){
        this.command=command;
    }

    pressButton(){
        this.command.execute();
    }
}



const light = new Light()

const lightTurnOnCommand = new TurnOnCommand(light)
const lightTurnOffCommand = new TurnOffCommand(light)

const remoteControl = new RemoteControl()

remoteControl.setCommand(lightTurnOffCommand)
remoteControl.pressButton()

remoteControl.setCommand(lightTurnOnCommand)
remoteControl.pressButton()




// 2. Invoker, Macros
class Remote{
    constructor() {
        this.buttons = {}; // store commands for buttons dynamically
    }

    setButton(name, command) {
        this.buttons[name] = command;
    }

    pressButton(name) {
        const command = this.buttons[name];
        if (command) {
            command.execute();
        } else {
            console.log(`No command assigned to button "${name}"`);
        }
    }
}


const remote = new Remote();

// Dynamically assign commands at runtime
remote.setButton("A", lightTurnOnCommand);
remote.setButton("B", lightTurnOffCommand);

remote.pressButton("A"); // Light ON
remote.pressButton("C"); // AC ON





// S (Single Responsibility): Light handles light operations, OnCommand/OffCommand encapsulate a single 
// action, and Remote manages button-command mapping.

// O (Open/Closed): You can add new devices or commands without modifying existing classes.

// L (Liskov Substitution): Any Command subclass (OnCommand, OffCommand) can replace the base Command in the remote.

// I (Interface Segregation): Commands implement only execute(), keeping the interface minimal and focused.

// D (Dependency Inversion): Remote depends on the Command abstraction, not the concrete device implementations.


// You want to decouple the sender of a request from the object that performs it.
// You need to queue, schedule, or log requests for later execution.
// You want to implement undo/redo functionality.
// You want to create macros or batch operations.
// You want to parameterize objects with operations dynamically at runtime, e.g., remap buttons or actions.

// A single button can turn on/off multiple devices (lights, AC, TV, stereo).
// Text editors, Photoshop, or spreadsheets store actions as commands for undo/redo.
