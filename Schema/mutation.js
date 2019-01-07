const { GraphQLObjectType } = require('graphql');

var Queries = require('../Model/queries');

module.exports = new GraphQLObjectType({
	name: 'RootMutationsType',
	fields: {
		addUsers: Queries.addUsers,
		removeUser: Queries.removeUser,
		updateUsers: Queries.updateUser
	}
});
