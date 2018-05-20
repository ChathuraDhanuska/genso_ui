var express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/router');
routes(app);

app.listen(port);
console.log('Dummy server REST API server started on port: ' + port);
