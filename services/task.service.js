const { Task } = require("../models");
const { v4: uuidv4 } = require("uuid");

exports.createTask = async ({
  title,
  description,
  status = "pendiente",
  user_id,
}) => {
  try {
    const task = await Task.create({
      id: uuidv4(),
      title,
      description,
      status,
      user_id: user_id,
    });
    return task.toJSON();
  } catch (error) {
    throw new Error("Error al crear la tarea");
  }
};

exports.getTasksByUserId = async (userId) => {
  const tasks = await Task.findAll({
    where: { user_id: userId },
  });
  return tasks.map((task) => task.toJSON());
};

exports.updateTask = async (taskId, updates) => {
    const task = await Task.findByPk(taskId);
    if (!task) {
        throw new Error("Tarea no encontrada");
    }
    const updatedTask = await task.update(updates);
    return updatedTask.toJSON();
}

exports.deleteTask = async (taskId) => {
    const task = await Task.findByPk(taskId);
    if (!task) {
        throw new Error("Tarea no encontrada");
    }
    await task.destroy();
    return { message: "Tarea eliminada correctamente" };
}