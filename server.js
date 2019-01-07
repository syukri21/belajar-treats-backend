var express = require('express');
var bodyParser = require('body-parser');
var Routes = require('./Routes/index');
var cors = require('cors');

var corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	credentials: true,
	allowedHeaders: [ 'Content-Type', 'Authorization' ]
};
class App {
	constructor() {
		this.expressApp = express();
		this.config = {
			port: process.env.PORT || 8080
		};
	}

	applyMiddleWare() {
		this.expressApp.use(bodyParser.json());
		this.expressApp.use(cors(corsOptions));
		new Routes(this.expressApp);
	}

	run() {
		this.expressApp.listen(this.config.port, function() {
			// console.log('Server Run in ' + 8080);
			// console.log(`Environment: ${process.env.STAGE || 'development'}`);
		});
	}
}

var app = new App();
app.applyMiddleWare();
app.run();
