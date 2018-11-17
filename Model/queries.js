const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLObjectType
} = require("graphql");

var type = require("./type");
var CRUD = require("../Db/crud");

// Defines the queries
module.exports = {
  Produks: {
    type: new GraphQLList(type.ProduksType),
    resolve: function(_, args) {
      return CRUD.getAll(_, args);
    }
  },
  Produk : {
    type: new GraphQLList(type.ProdukType),
    args : {
      id : {
        type: GraphQLString
      }
    },
    resolve: function(parent, args) {
      return CRUD.getAllProduk(args.id);
    }
  }
 
};
