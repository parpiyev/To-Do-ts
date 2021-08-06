import { TodoStorage } from "./mongo/todo"

interface IStorage {
    todo: TodoStorage
}

export let storage: IStorage = {
    todo: new TodoStorage()
}
