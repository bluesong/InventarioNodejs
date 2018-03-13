/* Load Car entity */
const Producto = require('../model/producto');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class ProductoDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM producto";
        return this.common.findOne(sqlRequest);
    };

    findById(id) {
        let sqlRequest = "SELECT id,nombre,referencia,color FROM producto WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Producto(row.id, row.nombre, row.referencia,row.color));
    };

    findAll() {
        let sqlRequest = "SELECT * FROM producto";
        return this.common.findAll(sqlRequest).then(rows => {
            let producs = [];
            for (const row of rows) {
              producs.push(new Producto(row.id, row.nombre, row.referencia,row.color));
            }
            return producs;
        });
      }

    create(Producto) {
        let sqlRequest = "INSERT into producto (nombre,referencia) " +
            "VALUES ($nombre,$referencia)";
        let sqlParams = {
            $nombre: Producto.nombre,
            $referencia :Producto.referencia
        };
        return this.common.run(sqlRequest, sqlParams);
    };

}

module.exports = ProductoDao;
