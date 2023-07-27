var Pool = require("pg-pool");

// by default the pool uses the same
// configuration as whatever `pg` version you have installed
var pool = new Pool();

// you can pass properties to the pool
// these properties are passed unchanged to both the node-postgres Client constructor
// and the node-pool (https://github.com/coopernurse/node-pool) constructor
// allowing you to fully configure the behavior of both
const client = new Pool({
  database: "portfolio",
  user: "postgres",
  password: "1234",
  port: 5432,
  //   ssl: true,
  //   max: 20, // set pool max size to 20
  //   idleTimeoutMillis: 1000, // close idle clients after 1 second
  //   connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
  //   maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
});
module.exports={client}