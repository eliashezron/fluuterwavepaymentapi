import express from 'express'
import cors from 'cors'
import { Color } from 'colors'
import { notFound, errorHandler } from './errorHandlers.js'
import paymentRoutes from './routes.js'

const app = express()
 app.use(express.json())
 app.use(cors())
 app.get('/', (req,res)=>{
    res.send('you are on the payment link')
 })

 app.use('/api/payment', paymentRoutes)
 
 app.use(notFound)
 app.use(errorHandler)

 const PORT = process.env.PORT || 5000 

app.listen(PORT,console.log( `app is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold))