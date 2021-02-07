require("dotenv").config();
const dbConnection = `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`;
module.exports = dbConnection;