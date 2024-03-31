import express from 'express'
import { APP_PORT } from './config/index.js'
import routes from './route/index.js'
import { errorHandler } from './middlewares/errorHandelr.js'
const app = express()
app.use(express.json())
app.use('/api', routes)

app.use(errorHandler)

app.listen(APP_PORT, ()=>{
    console.log('server is runnning');
})