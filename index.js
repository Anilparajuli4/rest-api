import express from 'express'
import { APP_PORT, MONGO_DB } from './config/index.js'
import routes from './route/index.js'
import { errorHandler } from './middlewares/errorHandelr.js'
import mongoose from 'mongoose'
const app = express()
app.use(express.json())
app.use('/api', routes)
mongoose.connect(MONGO_DB, ).then(()=>console.log('database is connected')).catch((err)=>console.log(err, 'err'))
app.use(errorHandler)

app.listen(APP_PORT, ()=>{
    console.log('server is runnning');
})