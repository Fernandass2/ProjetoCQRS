import mysql from "mysql2/promise"

const connect = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "dbmedicos",
    port: 3306
});
export default connect;
