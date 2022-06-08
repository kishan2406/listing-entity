const express = require("express")
const cors = require('cors')
const app = express();
app.use(cors())

const usersController = require("./controllers/user.controllers")



app.use(express.json())


app.use("/users", usersController)

module.exports = app