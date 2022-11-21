const Todo = require('../model/Todo');


//*****ADD A TODO TASK TO A TODO COLLECTION******
exports.createTodo = async (req, res) => {
    try {
        let todo = await req.body;
    let created = await Todo.create(todo);
    if (!created) 
        return res.status(400).json({
        succes: false,
        message: "Todo creation failed"
    });
    return res.status(200).json({
        success: true,
        message: "Todo created successfully",
        todo: created,
    })
    }catch(error) {
        res.status(500).json({
            succes: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

//*****RETURN A TODO TASK FROM  COLLECTION******
exports.getTodo = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let todo = await Todo.findOne(id);
        if (!todo) return res.status(404).json({
            succes: false,
            message: 'Todo not found'
        });
        res.status(202).json({
            success: true,
            message: "Todo found",
            todo,
        });
    } catch(error) {
        res.status(500).json({
            succes: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

// ****UPDATE A PARTICULAR TODO TASK****
exports.updateTodo = async (req, res) => {
    try {
        let id = {_id: req.param.id}
    let todo = await req.body;
    let updated = await Todo.findByIdAndUpdate(id, todo, {new: true});

    if (!updated) 
    return res.status(400).json({
        succes: false,
        message: "Todo update failed"
    });
    return res.status(201).json({
        success: true,
        message: "Todo updated successfully",
        todo: updated,
    });
    } catch (error) {
        res.status(500).json({
            succes: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
 
}


// ****DELETE A TODO TASK****
exports.deleteTodo = async (req, res) => {
    try {
        let id = {_id: req.params.id}
        let deleted = await Todo.findOneAndRemove(id);
        if(!deleted) 
        return res.status(400).json({
            succes: false,
            message: "Todo delete failed"
        });
        return res.status(200).json({
            success: true,
            message: "Todo deletd successfully",
            todo: deleted,
        })

    } catch (error) {
        res.status(500).json({
            succes: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

// ****RETURN ALL TOD TASK****
exports.getAllTodos = async (req, res) => {
    try {
        let todos = await Todo.find();
        if (todos.length === 0) {
            return res.status(404).json({
                succes: false,
                message: 'No todo found'
            })
        }
        res.status(200).json({
            success: true,
            message: "Todos found",
            todos,
            count: todos.length,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
}
