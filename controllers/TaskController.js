const Task = require("../models/Task");

const TaskController = {
    async create(req, res) {
        try {
            const taskCreated = await Task.create(req.body);
            res.status(201).send({ msg: "Tarea creada con éxito", taskCreated });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async getAll(req, res) {
        try {
            const tasks = await Task.find();
            res.send(tasks);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async getById(req, res) {
        try {
            const task = await Task.findById(req.params._id);
            res.send(task);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async markAsCompleted(req, res) {
        try {
            const taskUpdated = await Task.findByIdAndUpdate(req.params._id, {
                completed: true,
            }, { new: true });
            res.send(taskUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async updateTitle(req, res) {
        try {
            const taskUpdated = await Task.findByIdAndUpdate(req.params._id, {
                title: req.body.title,
            }, { new: true });
            res.send(taskUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            const taskDeleted = await Task.findByIdAndDelete(req.params._id)
            res.send({ msg: "Tarea eliminada éxito", taskDeleted })
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = TaskController