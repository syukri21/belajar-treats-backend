let {
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList
} = require("graphql");

var CRUD = require("../Db/crud");

// Defines the type


var ProdukType = new GraphQLObjectType({
  name: "Produk",
  description: "Produk",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },

  }
});

var ProduksType = new GraphQLObjectType({
  name: "Produks",
  description: "Produk",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    Produk : {
      type: new GraphQLList(ProdukType),
       resolve: function(parent, args) {
      return CRUD.getAllProduk(parent.id);
      }
    }
  }


});



module.exports = {ProduksType, ProdukType};
