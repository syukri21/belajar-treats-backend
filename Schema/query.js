const { GraphQLObjectType } = require('graphql');

var Queries = require('../Model/queries');

module.exports = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		Users: Queries.Users
	}
});
