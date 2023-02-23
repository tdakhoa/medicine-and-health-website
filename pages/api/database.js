const { Pool } = require("pg");
const config = require("../../db.js");

const pool = new Pool(config);

async function connect() {
    try {
        await pool.connect();
        console.log("Connected to database!");
    } catch (error) {
        console.error(error);
    }
}

connect();
