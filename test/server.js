var express = require('express');
var axios = require('axios');
var qs = require('qs');
var app = express();



const ajax = axios.create({
    baseURL: 'http://localhost:8889',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
});

ajax.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
});

app.use(express.static('./nodeTest/html'));

//
app.all('/api/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    // res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    // res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    // res.header('Pragma', 'no-cache');
    // res.header('Expires', '0');

    ajax({
        method: req.method.toLowerCase(),
        url: req.originalUrl,
        data: req.body,
    }).then(response => {
        res.send(response.data);
        //console.log(response.data);
        //console.log(req.body);
    }).catch(err => {
        console.log(err);
    });
    console.log("ffffffffffffffffff")

});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

// let mySymbol = Symbol('dsyName');
//
// let person = {
//     [mySymbol]:"my name is dsy"
// };
//
//
// let person = {};
// person[mySymbol] = "my name is dsy";
//
