require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
//routes
const workout = require('./routes/workouts')

//const app
const app = express()


//middrewire
app.use(express.json());
app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/workouts',workout)

//connect to db
mongoose.connect(process.env.MONGO_URL).then(()=>
{
    //listen for request
    app.listen(process.env.PORT, () => {
        console.log('\nLinstening!!!!', process.env.PORT)
    })
}).catch((error)=>{
    console.log(error)
})


