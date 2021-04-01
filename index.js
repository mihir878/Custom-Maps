const express = require('express');
const app = express();
const port = process.env.port||5000;
const router = require('./router/index');

//EJS
app.set('view engine','ejs');

//static files
app.use(express.static("public"));

//urlencoding
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('map',{src: "null",dest: "null"});
});

app.use('/',router);

app.listen(port,()=>{
    console.log(`Server started at ${port}`);
});

