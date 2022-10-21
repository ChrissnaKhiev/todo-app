const express = require("express");
const sequelize = require('./config/connection');

const PORT = 5500;
const app = express();

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Running.")
    });

    sequelize.sync().then(() => {

    })
});