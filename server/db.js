const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "3502Kennemore$",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

//export to db
module.exports = pool;