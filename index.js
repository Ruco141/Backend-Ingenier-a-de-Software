require('colors')
require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/tareas', require('./routes/tareas.routes'))

const port = process.env.PORT || 5001
app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))
