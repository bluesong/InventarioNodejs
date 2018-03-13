/* Load Car Data Access Object */
const ColorDao = require('../dao/colorDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const Color = require('../model/color');

/**
 * Car Controller
 */
class ColorController {

    constructor() {
        this.colorDao = new ColorDao();
        this.common = new ControllerCommon();
    }
    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.colorDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };
    findById(req, res) {
        let id = req.params.id;

        this.colorDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    findAll(res) {
        this.colorDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    create(req, res) {
        let color = new Color();
        color.detalle = req.body.detalle;
            return this.colorDao.create(color)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));


    };

}

module.exports = ColorController;
