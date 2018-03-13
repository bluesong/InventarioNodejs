/* Load Car entity */
const Ref = require('../model/referencia');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class RefDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM referencia";
        return this.common.findOne(sqlRequest);
    };

    findById(id) {
        let sqlRequest = "SELECT id, detalle FROM referencia WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new (row.id, row.detalle));
    };

    findAll() {
        let sqlRequest = "SELECT * FROM referencia";
        return this.common.findAll(sqlRequest).then(rows => {
            let Refs = [];
            for (const row of rows) {
              Refs.push(new Ref(row.id, row.detalle));
            }
            return Refs;
        });
      }

    create(Ref) {
        let sqlRequest = "INSERT into referencia (detalle) " +
            "VALUES ($detalle)";
        let sqlParams = {
            $detalle: Ref.detalle
        };
        return this.common.run(sqlRequest, sqlParams);
    };

}

module.exports = RefDao;
