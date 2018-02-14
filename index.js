const express = require('express')


// setup express app
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// connect to database (mongoose)
mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise

app.use(bodyParser.json())

// set view engine
app.set('view engine','ejs')
app.set('views','./views')

// static libs
app.use(express.static('./public'))



// initialize routes
app.use('/api',require('./src/api'))


// error handling middleware
app.use((err,req,res,next)=>{
    res.status(422).send(err.message)
})


app.get('/',(req,res)=>res.render('index'))
// listen for requests
app.listen(process.env.port || 3000,()=> console.log('App running on port 3000'))