const express = require('express')
const  {login, signup} = require('./../controllers/user')
const userRouter = express.Router()
userRouter.post("/signup", signup);
userRouter.post("/login", login);
module.exports = userRouter;