const express = require("express");
var bodyParser = require("body-parser");
require('dotenv').config();

const port = 3000
const app = express();
const TaskRoutes = require('./src/components/tasks/TaskRoutes');
const setupDB = require("./src/config/Db");



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
setupDB()

app.use('/tasks', TaskRoutes)

app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
