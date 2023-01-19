const { response } = require('express');
const {pool} = require('../db')

const getTasks = async (req, res, next) => {
    try {
        const response = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
        res.status(200).json(response.rows);
        console.log(response.rows)
    } catch (error) {
        next(error)
    }
};

const getTaskId = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
        res.json(response.rows);
    } catch (error) {
        next(error)
    }
};

const createTask = async (req, res,next) => {
    try {
        const { title, description } = req.body;
        console.log(title)
        const response = await pool.query('INSERT INTO tasks (title, description) VALUES ($1, $2)', [title, description]);
        res.json({
            message: 'User Added successfully',
            body: {
                user: {title, description}
        }   
    })
    } catch (error) {
      next(error)  
    }
};

const updateTask = async (req, res, next) => {
    try {
      const id = parseInt(req.params.id);
      const { title, description } = req.body;

    const response =await pool.query('UPDATE tasks SET title = $1, description = $2 WHERE id = $3', [
        title,
        description,
        id
    ]);
    res.json('User Updated Successfully');
    
    if (response.rows.length === 0)
        return res.status(404).json({
            message:"task not found"
        })
    } catch (error) {
        next(error)   
    }

};

const deleteTask = async (req, res,next) => {
    try {
        const id = parseInt(req.params.id);
        const result = await pool.query('DELETE FROM tasks where id = $1 ' , [id]);
        
        if(result.rowCount === 0)
            return res.status(404).json({
                message: "Task not found"
            })
        
        return res.json(`User ${id} deleted Successfully`);
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getTasks,
    getTaskId,
    deleteTask,
    updateTask,
    createTask
}