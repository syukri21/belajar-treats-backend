const { GraphQLObjectType } = require("graphql");

var Queries = require("../Model/queries");

module.exports = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    Produks: Queries.Produks,
   Produk : Queries.Produk
  }
});
