const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs')
const posts = 'server/posts.html';
app.listen(4000,() => {
    console.log('Port 4000 Works : Listening');
});

app.use(express.static('client'));

app.use(cors());
app.use(express.json());
app.set('view engine','ejs')
 app.get('/posts',(req,res) => {
    console.log(req.body.displayName) 
    fs.readFile('server/index.html','utf8',(err,text) => {
        res.render('client/index',{username:req.body.displayName});
    });
});
