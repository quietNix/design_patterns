/*
Often when u need a single instance in application, like configuration or db connections.
*/

class Logger{
    constructor(){
        if(Logger.instance){
            console.log("already created");
            return Logger.instance
        }
        this.log()
        Logger.instance = this
    }

    
    log(){
        console.log("hi new created");
    }
}


logInstance = new Logger()
logInstance = new Logger()