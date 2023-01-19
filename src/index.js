const express = require ('express')
const morgan = require('morgan')
const app = express()
const port= 4000
const routes = require("./routes/index.js")
const cors = require('cors')

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes 

app.use(routes)
app.use((err,req,res,next)=>{
    return res.json({
        messsage: err.messsage
    })
})


app.listen(port)
console.log('server on port 4000')



