import { DEBUG_MODE } from "../config/index.js";
import JoiBase from 'joi'; // Importing as JoiBase to avoid confusion with the variable name
import CustomHandler from "../services/CustomErrorHndler.js";

const Joi = JoiBase.default || JoiBase; // Using default export if available

export const errorHandler=(err, req, res, next)=>{
    let statusCode = 500;
    let data = {
        message:'Internal server error',
        ...(DEBUG_MODE === 'true' && {orginalError:err.message})

    
    }
    if(err instanceof Joi.ValidationError){
      statusCode=400; 
      data={
        message:err.message
      }
    }
    if(err instanceof CustomHandler){
      statusCode= err.status
      data={
        message:err.message
      }
    }
    return res.status(statusCode).json(data)
}