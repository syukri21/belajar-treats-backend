var mysqlQuery = require('./mysql');

class CRUD {
	getAll() {
		return mysqlQuery.creatQuery({
			query: 'SELECT * FROM users'
		});
	}
}

module.exports = new CRUD();
