class TodoController {
    static ListTodo(req, res, next) {
        const todoList = {
            data: [
                {title: "Todo 1"},
                {title: "Todo 2"},
                {title: "Todo 3"},
                {title: "Todo 4"},
                {title: "Todo 5"}
            ],
            messege: 'Success'
            res.status(200).json(todoList)
        }
    }
}

module.exportts = TodoController;