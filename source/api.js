var express = require('express');
var app = express();
var objRetorno = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}
];

app.get('/', function(req, res) {
    console.log('Entrou no GET / ');
    res.charset = 'utf-8';
    res.type('application/json');
    res.json(objRetorno);
});

app.listen(process.env.PORT || 3000);
console.log('Server running at http://127.0.0.1:3000');