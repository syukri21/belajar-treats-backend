let {
	GraphQLID,
	GraphQLString,
	GraphQLFloat,
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLList
} = require('graphql');

var CRUD = require('../Db/crud');

// Defines the type

var UsersType = new GraphQLObjectType({
	name: 'Users',
	description: 'Users',
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		username: {
			type: new GraphQLNonNull(GraphQLString)
		},
		email: {
			type: new GraphQLNonNull(GraphQLString)
		},
		password: {
			type: new GraphQLNonNull(GraphQLString)
		}
	}
});

module.exports = { UsersType };
