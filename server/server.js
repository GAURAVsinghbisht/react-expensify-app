const express = require('express')
const path = require('path');

const app = express(); // new instance of express

const publicPath = path.join(__dirname,'..','public')
const port = process.env.PORT || 3000;   // this PORT env is set by heroku for us


app.use(express.static(publicPath));


// if user request for things not in public folder return back to public
app.get('*',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'))
})

app.listen(port,()=>{
console.log('server is up')
})