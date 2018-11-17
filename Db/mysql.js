var Koneksi = require("./koneksi");

class mysqlQuery {
  static creatQuery({ query}) {
    return new Promise((resolve, reject) => {
      Koneksi.pool.getConnection((err, conn) => {
        err && reject(err);

        conn.query(query, (err, result) => {
          conn.release();

          err && reject(err);

          resolve(result);
        });
      });
    });
  }
}

module.exports = mysqlQuery;
