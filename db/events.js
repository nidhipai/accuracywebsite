const pg = require("pg");
const Pool = pg.Pool;
const pool = new Pool({
    user: "postgres",
    database: 'accuracywebsite',
    password: 'qwerty',
    port: 5432,
});

function getDaysinMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

async function getEvents(month, year) {
    let daysInMonth = getDaysinMonth(month, year);
    let result = await pool.query(`SELECT * FROM events WHERE eStart BETWEEN '${year}-${month}-01' AND '${year}-${month}-${daysInMonth}'`)
    return result.rows;
}

module.exports = {
    'getEvents': getEvents
}