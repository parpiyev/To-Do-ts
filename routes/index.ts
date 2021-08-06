import { Router } from "express"
import todoRouter from "./todo"

const router = Router({ mergeParams: true })

router.use("/todo", todoRouter)

export default router