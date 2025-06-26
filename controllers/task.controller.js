const taskService = require('../services/task.service');

exports.createTask = async (req, res) => {
    try{
        const userId = req.user.id;
        req.body.user_id = userId;
        const task = await taskService.createTask(req.body);
        res.status(201).json({ message: 'Tarea creada correctamente', task });
    }catch (error) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
}

exports.getTasksbyUserId = async (req, res) => {
    try{
        const userId = req.user.id;
        const tasks = await taskService.getTasksByUserId(userId);
        res.status(200).json({ tasks });
    }catch(error) {
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }
}

exports.updateTask = async (req, res) => {
    try{
        const taskId = req.params.id;
        const updates = req.body;
        const updatedTask = await taskService.updateTask(taskId, updates);
        res.status(200).json({ message: 'Tarea actualizada correctamente', task: updatedTask });
    }catch (error) {
        res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
}

exports.deleteTask = async (req, res) => {
    try{
        const taskId = req.params.id;
        const result = await taskService.deleteTask(taskId);
        res.status(200).json({ message: 'Tarea eliminada correctamente', result });
    }catch (error) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
}