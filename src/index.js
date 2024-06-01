
import 'dotenv/config'

import express from "express" ;

const app  = express()
const port  = process.env.PORT || 4000

app.get("/",(req,res)=>{
    res.send("This Is Main Page")
})

app.listen(port,()=>{
    console.log(`server run at this port  : ${port}`)
})