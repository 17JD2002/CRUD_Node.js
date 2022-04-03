const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));


app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('SERVER ejecutandose en http://localhost:5000');
});