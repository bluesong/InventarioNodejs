const User =  require('../model/user');

const daoCommon = require('./commons/daoCommon');

class UserDao {
    constructor() {
        this.common = new daoCommon();
    }

    create(User) {
        let sqlRequest = "INSERT into user (user,pasword) " +
            "VALUES ($user,$pasword)";
        let sqlParams = {
            $user: User.user,
            $pasword: User.password
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    login(user , pasword) {
        let sqlRequest = "SELECT id, user, pasword, car FROM driver WHERE user=$user and pasword =$pasword";
        let sqlParams = {$user: user , $pasword: pasword};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new User(row.id, row.user, row.pasword));
    };
}

module.exports = UserDao;
