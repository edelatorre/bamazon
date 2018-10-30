console.log('this is loaded');

exports.mySql = {
    host: "localhost",
    port: 3306,
    user: process.env.mysql_id,
    password: process.env.MYSQL_SECRET,
    database: "bamazon"
};