const express = require('express')
const app = express()
const mongoose = require('mongoose')
const api = require('./routes/index')
const port = 3000
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/api', api)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, async () => {
  try{
      await mongoose.connect(`mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_SCHEMA}?authSource=admin`)
      console.log('Database connected')
  }
  catch(e){
      console.log('Error database connection \n', e)
  }
  console.log(`listening on port ${port}!`)
})