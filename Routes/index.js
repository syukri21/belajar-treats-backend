var graphql = require('./graphql');

class Routes {
	constructor(app = null) {
		if (app == null) throw new Error('Berikan Instance Express');
		app.use('/graphql', graphql);
	}
}

module.exports = Routes;
