// const express = require("express");
// var bodyParser = require("body-parser");
// require('dotenv').config();

// const port = 5000
// const app = express();
// const TaskRoutes = require('./src/components/tasks/TaskRoutes');
// const setupDB = require("./src/config/Db");



// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// setupDB()

// app.use('/tasks', TaskRoutes)

// app.listen(port, () => {
//     console.log(`server running on port ${port}`);
//   });
const express = require('express')

const app = express()

const port = 5000

app.get('/', (req, res)=>{
    console.log('hellow world - route /');
    res.send('hello world')
    // everytime call when we invoke get method of server
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})