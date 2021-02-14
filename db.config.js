require("dotenv").config();
const dbConnection = `${process.env.DB_MAIN_STRING}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
//mongodb+srv://filmzyuser:<password>@filmzy.sr1i9.mongodb.net/<dbname>?retryWrites=true&w=majority
console.log(dbConnection);
module.exports = dbConnection;