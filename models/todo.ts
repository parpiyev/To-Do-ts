import mongoose, { Schema, Document } from "mongoose"
import {v4 as uuidv4} from 'uuid'


export interface ITodo extends Document {
    _id: string
    name: string
}

let todoSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String
    }
})

export default mongoose.model<ITodo>("Todo", todoSchema)