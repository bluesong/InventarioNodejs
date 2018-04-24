/* Load Car Data Access Object */
const TallaDao = require('../dao/tallaDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const talla = require('../model/talla');

/**
 * Car Controller
 */
class TallaController {

    constructor() {
        this.tallaDao = new TallaDao;
        this.common = new ControllerCommon();
    }
    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.tallaDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };
    findById(req, res) {
        let id = req.params.id;

        this.tallaDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    findAll(res) {
        this.tallaDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    create(req, res) {
        let color = new Color();
        color.detalle = req.body.detalle;
            return this.tallaDao.create(color)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));


    };

}

module.exports = TallaController;
