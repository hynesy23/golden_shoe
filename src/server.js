const express = require('express');
const app = express();

const sequelize = require('./config/connection');

const { getAllShoes } = require('../src/controllers/index')

const PORT = process.env.PORT || 8080

app.get("/", getAllShoes);

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})