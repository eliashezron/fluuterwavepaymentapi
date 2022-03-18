import path from 'path'
import express from 'express'
import cors from 'cors'
import color  from 'colors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './errorHandlers.js'
import paymentRoutes from './routes.js'

const __dirname = path.resolve(path.dirname(''));
 dotenv.config({path:__dirname + '/.env'})

const app = express()
 app.use(express.json())
 app.use(cors())

 app.get('/', (req,res)=>{
    res.send('you are on the payment link')
 })
 if(process.env.NODE_ENV === 'development'){
   app.use(morgan('dev'))
}

 app.use('/api/payment', paymentRoutes)
 
 app.use(notFound)
 app.use(errorHandler)

 const PORT = process.env.PORT || 5000 

//  console.log(process.env.SECRET_KEY)

app.listen(PORT, console.log(`app is running in ${process.env.NODE_ENV} mode`.yellow.bold) )
   // PORT,console.log( `app is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold))