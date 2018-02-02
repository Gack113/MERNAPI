const express = require('express')

// setup express app
const app = express()

// setup lib
// initialize routes
app.use('/api',require('./src/api'))
app.use(express.static('./public'))

// set view engine
app.set('view engine','ejs')
app.set('views','./views')


// listen for requests
app.listen(process.env.port || 3000,()=> console.log('App running on port 3000'))