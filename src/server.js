const express = require('express');
const app = express();
const cors = require("cors");

// const sequelize = require('./config/connection');

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes')

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})