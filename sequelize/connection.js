const Sequelize = require('sequelize');

const sequelize = new Sequelize('bootcamp_final', 'root', '', {
	// the sql dialect of the database
	// currently supported: 'mysql', 'sqlite', 'postgres', 'mssql'
	dialect: 'mysql',

	// custom host; default: localhost
	host: 'localhost',

	// similar for sync: you can define this to always force sync for models
	sync: { force: true },

	// pool configuration used to pool database connections
	pool: {
		max: 5,
		idle: 30000,
		acquire: 60000
	}
});

module.exports = sequelize;

// sequelize
// 	.authenticate()
// 	.then(() => {
// 		console.log('Connection has been established successfully.');
// 	})
// 	.catch((err) => {
// 		console.error('Unable to connect to the database:', err);
// 	});

// const foo = sequelize.define('foo', {
// 	nama: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
// 	umur: { type: Sequelize.INTEGER, allowNull: true },
// 	hoby: { type: Sequelize.STRING, allowNull: true }
// });

// sequelize.sync({ force: true });

// // export default sequelize;
