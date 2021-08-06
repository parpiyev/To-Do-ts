import { NextFunction, Request, Response } from "express"
import { storage } from "../storage/main"
import catchAsync from "../utils/catchAsync"

export class TodoController {
    getAll = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const todos = await storage.todo.find(req.query)

        res.status(200).json({success: true,data: {todos}})
    })

    get = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const todo = await storage.todo.findById(req.params.id)

        res.status(200).json({success: true,data: {todo}})
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const todo = await storage.todo.create(req.body)

        res.status(201).json({success: true,data: {todo}})
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const todo = await storage.todo.update(req.params.id, req.body)

        res.status(200).json({success: true,data: {todo}})
    })

    delete = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await storage.todo.delete(req.params.id)

        res.status(204).json({success: true,data: null})
    })
}
