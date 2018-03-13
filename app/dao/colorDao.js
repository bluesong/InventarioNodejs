/* Load Car entity */
const Color = require('../model/color');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class ColorDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM color";
        return this.common.findOne(sqlRequest);
    };

    findById(id) {
        let sqlRequest = "SELECT id, detalle FROM color WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Color(row.id, row.detalle));
    };

    findAll() {
        let sqlRequest = "SELECT * FROM color";
        return this.common.findAll(sqlRequest).then(rows => {
            let colors = [];
            for (const row of rows) {
              colors.push(new Color(row.id, row.detalle));
            }
            return colors;
        });
      }

    create(Color) {
        let sqlRequest = "INSERT into color (detalle) " +
            "VALUES ($detalle)";
        let sqlParams = {
            $detalle: Color.detalle
        };
        return this.common.run(sqlRequest, sqlParams);
    };

}

module.exports = ColorDao;
