const sequelize = require('./connection');
const Sequelize = require('sequelize');

const USERS = sequelize.define('users', {
	id: { type: Sequelize.INTEGER, primaryKey: true },
	username: { type: Sequelize.STRING },
	email: { type: Sequelize.STRING },
	password: { type: Sequelize.STRING },
	createdAt: {
		field: 'created_at',
		type: Sequelize.DATE
	},
	updatedAt: {
		field: 'updated_at',
		type: Sequelize.DATE
	}
});

const SHOW = async () => {
	const users = await USERS.findAll();
	return users;
};

const ADD = async ({ username, email, password }) => {
	const query = {
		username,
		email,
		password
	};

	const users = await USERS.create(query);
	const userid = await USERS.findOne({
		where: query
	});
	return {
		...users,
		id: userid.id
	};
};

const REMOVE = async ({ id }) => {
	query = {
		id
	};
	const user = await USERS.findById(id);
	return user.destroy();
};

const UPDATE = async ({ id, email }) => {
	const user = await USERS.findById(id);
	user.email = email;
	const result = await user.save();
	return result;
};

module.exports = {
	SHOW,
	ADD,
	REMOVE,
	UPDATE
};
