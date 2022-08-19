export default class ErrorApi extends Error{
    constructor(status, message){
        super()
        this.message = message
        this.status = status
    }
    static badRequest(message){
        return new ErrorApi(404, message)
    }
    static internsl(message){
        return new ErrorApi(500, message)
    }
    static forbidden(message){
        return new ErrorApi(403, message)
    }
}