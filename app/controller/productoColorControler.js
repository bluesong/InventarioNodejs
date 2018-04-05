/* Load Car Data Access Object */
const ProductoDao = require('../dao/productoDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');


const Producto = require('../model/productoColor');


class ProductoController {

    constructor() {
        this.productoDao = new ProductoDao();
        this.common = new ControllerCommon();
    }
    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.productoDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };
    findById(req, res) {
        let id = req.params.id;

        this.productoDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    findAll(res) {
        this.productoDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    create(req, res) {
        let producto = new Producto();

        producto.nombre = req.body.nombre;
        producto.referencia = req.body.referencia;

            return this.productoDao.create(producto)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));


    };

}

module.exports = ProductoController;
