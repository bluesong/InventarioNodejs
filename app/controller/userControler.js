/* Load Car Data Access Object */
const UserDao = require('../dao/userDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const User = require('../model/user');

/**
 * Car Controller
 */
class UserController {

    constructor() {
        this.userDao = new UserDao();
        this.common = new ControllerCommon();
    }
    /**
     * Counts all the records present in the database
     * @return count
     */
    create(req,res){
        let user = new User();
        user.user = req.body.user;
        user.password = req.body.password;
            return this.userDao .create(user)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
    };

}

module.exports = UserController;
