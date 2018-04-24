/* Load Car entity */
const Talla = require('../model/talla');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class TallaDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM talla";
        return this.common.findOne(sqlRequest);
    };

    findById(id) {
        let sqlRequest = "SELECT id, detalle FROM talla WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Talla(row.id, row.detalle));
    };

    findAll() {
        let sqlRequest = "SELECT * FROM talla";
        return this.common.findAll(sqlRequest).then(rows => {
            let tallas = [];
            for (const row of rows) {
              tallas.push(new Talla(row.id, row.detalle));
            }
            return tallas;
        });
      }

    create(Talla) {
        let sqlRequest = "INSERT into talla (detalle) " +
            "VALUES ($detalle)";
        let sqlParams = {
            $detalle: Talla.detalle
        };
        return this.common.run(sqlRequest, sqlParams);
    };

}

module.exports = TallaDao;
