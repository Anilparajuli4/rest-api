class CustomHandler extends Error {
    constructor(status, message){
        super(),
     this.status = status;
     this.message = msg
    }
    static aleradyExits(message){
       return new CustomHandler(409, message)
    }
}


export default CustomHandler