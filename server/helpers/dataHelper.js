const fs = require("fs")

const schema = fs.readFileSync("data/views.sql", {
	encoding: "utf-8",
})

const createSchema = async (con, connection) => con.promise().query(schema).then(([rows, fields]) => {
    if(rows[0]?.warningStatus == 0){
        console.log('Schema Created!')
    }
    connection.release();
}).catch((err) => {
    console.log(err)
})

module.exports = {
	createSchema
};