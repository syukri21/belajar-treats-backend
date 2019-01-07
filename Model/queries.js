const {
	GraphQLList,
	GraphQLID,
	GraphQLString,
	GraphQLFloat,
	GraphQLNonNull,
	GraphQLObjectType
} = require('graphql');

var type = require('./type');
var CRUD = require('../Db/crud');
var USER = require('../sequelize/user');

// Defines the queries
module.exports = {
	Users: {
		type: new GraphQLList(type.UsersType),
		resolve: function(_, args) {
			return USER.SHOW();
		}
	},
	addUsers: {
		type: type.UsersType,
		args: {
			username: { type: GraphQLString },
			password: { type: GraphQLString },
			email: { type: GraphQLString }
		},
		resolve: async (_, args) => {
			const add = await USER.ADD({
				username: args.username,
				password: args.password,
				email: args.email
			});
			const { username, email, password } = add.dataValues;
			return {
				id: add.id,
				username,
				password,
				email
			};
		}
	},
	removeUser: {
		type: GraphQLString,
		args: {
			id: {
				type: GraphQLID
			}
		},
		resolve: async (_, args) => {
			try {
				await USER.REMOVE({
					id: args.id
				});
				return 'BERHASIL';
			} catch (error) {
				console.log(error);
				return 'GAGAL';
			}
		}
	},
	updateUser: {
		type: type.UsersType,
		args: {
			id: {
				type: GraphQLID
			},

			email: {
				type: GraphQLString
			}
		},
		resolve: async (_, args) => {
			try {
				const user = await USER.UPDATE({
					id: args.id,
					email: args.email
				});
				return user;
			} catch (error) {
				console.log(error);
				return {
					id: null
				};
			}
		}
	}
};
