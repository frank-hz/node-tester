const express = require('express')
const app = express()

const PORT = process.env.PORT || 3999
app.use(express.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.send({name: 'Welcome to NodeTester'})
    console.log('Welcome to NodeTester')
})


app.listen(PORT, ()=>{
    console.log(`live in ${PORT}`);
})

