import {Router} from "express"
import {addtodo} from "../controler/addtodo.js"
const todoRouter = Router()

todoRouter.post("/todos",addtodo)

export default todoRouter