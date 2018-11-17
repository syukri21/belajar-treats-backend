var mysqlQuery = require("./mysql");

class CRUD {


 async  getAll() {

    var hasil = await mysqlQuery.creatQuery({
      query: "SELECT DISTINCT product_categories.id, product_categories.name  FROM product_categories INNER JOIN products ON product_categories.id = products.category_id",
    })

    return hasil ;
  }

  getAllProduk(id) {
    return mysqlQuery.creatQuery({
      query: "SELECT id, name FROM products WHERE category_id = '"+id+"'",
    });
  }
 
}

module.exports = new CRUD();
