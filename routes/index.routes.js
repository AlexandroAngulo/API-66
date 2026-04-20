import { Router } from "express";
import { hola, ping, abc } from "../controllers/index.controllers.js";
import { getUsers, getUser, postUser, putUser, delUser } from "../controllers/users.controller.js";

const router = Router()

router.get("/",hola)

router.get("/ping",ping)

router.get("/a/b/c",abc)

export default router