/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./sqlite.db');

/* Init car and driver tables if they don't exist */
let init = function () {

    db.run("CREATE TABLE IF NOT EXISTS `color` ("+
        	"`id`	INTEGER PRIMARY KEY AUTOINCREMENT,"+
        	"`detalle`	TEXT"+
        ");");

    db.run("CREATE TABLE IF NOT EXISTS `referencia` ("+
          "`id`	INTEGER PRIMARY KEY AUTOINCREMENT,"+
          "`detalle` varchar(20)"+
        ");");
};

module.exports = {
    init: init,
    db: db
};
