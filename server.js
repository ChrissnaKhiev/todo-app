const express = require("express");
const sequelize = require('./config/connection');
const controllers = require('./controllers');

const Model = require('./models')

const PORT = 5500;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', controllers);

// Just for practice
// app.get('/', (req, res) => {
//     res.json('hi');
// });

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Running.")
    });
});