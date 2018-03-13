/* Load Car Data Access Object */
const RefDao = require('../dao/refDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const Ref = require('../model/referencia');

/**
 * Car Controller
 */
class RefController {

    constructor() {
        this.refDao = new RefDao();
        this.common = new ControllerCommon();
    }
    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.refDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };
    findById(req, res) {
        let id = req.params.id;

        this.refDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    findAll(res) {
        this.refDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    create(req, res) {
        let ref = new Ref();
        ref.detalle = req.body.detalle;
            return this.refDao.create(ref)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));


    };

}

module.exports = RefController;
