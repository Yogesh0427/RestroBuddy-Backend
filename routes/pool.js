var mysql = require("mysql")
var pool = mysql.createPool({
    host: "sql102.infinityfree.com",
    port: 3306,
    user: "if0_40554941",
    password: "EYUAvJbmaZkY347",
    database: "if0_40554941_XXX",
    multipleStatements: true,
    connectionLimit: 100,
})
module.exports = pool;