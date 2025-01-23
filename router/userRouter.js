const express= require("express");
const userRouter = express.Router();

const userController= require('../controller/userController');


userRouter.post('/ragister',userController.ragister);


module.exports =userRouter;