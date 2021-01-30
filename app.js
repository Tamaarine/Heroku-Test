const express = require('express')

let app = express();

app.get('/', function(req, res)
{
    res.sendFile('index.html', {root: __dirname});
    console.log("HTML Served");
})

app.listen(process.env.PORT || 5000);