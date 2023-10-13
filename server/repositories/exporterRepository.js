const con = require('../config/mySQL');

class Export {
    static filterFOBByYear = async (year) => {
        let result;
        const yearQuery = `SELECT * FROM ExporterPerYear WHERE refYear = ?`
        await con.promise().query(yearQuery, [
            year
        ])

        .then(([rows, fields]) => {
            result = rows;
        }).catch((err) => {
            result = {
                error: err,
                message: err.sqlMessage || 'error while getting exporer per year data'
            }
        })
        return result;
    }
}

module.exports = Export;