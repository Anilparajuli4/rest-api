import Joi from "joi"
import CustomHandler from "../services/CustomErrorHndler.js"
export const register =async(req, res, next)=>{
    //cheklist
    //validate the request
    //authorize the request
    //check if user is alerady in the database
    //prepare modale
    //store in database
    //generate jwt 
    //send response

    //validation

    const registerSchema = Joi.object({
        name:Joi.string().min(3).max(30).required(),
        email:Joi.string().email().required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        // repeat_password:Joi.ref(password)
    })
    const {error} = registerSchema.validate(req.body)
    if(error){
        return next(error)
    }
    //to check email already register in database
    try {
        const exist = await User.exists({email:req.body.email})
        if(exist){
            return next(CustomHandler.aleradyExits('This email is already taken'))
        }
    } catch (error) {
      next(error)
    }
    res.json('hello from express')
}