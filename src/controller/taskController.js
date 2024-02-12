const Task = require('../model/Task');
exports.createTask = async (req, res) => {
  /*  const task = new Task({
        title: req.body.title,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        status: req.body.status,
        cost: req.body.cost
    });
    */
   //  get the data from the request body directly
    const task = new Task(req.body);
    try {
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (err) {
        res.json({ message: err });
    }
};
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.json({ message: err });
    }
};
exports.getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);
        res.json(task);
    } catch (err) {
        res.json({ message: err });
    }
};
exports.deleteTask = async (req, res) => {
    try {
        const removedTask = await Task.remove({ _id: req.params.taskId });
        res.json(removedTask);
    } catch (err) {
        res.json({ message: err });
    }
};
exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.updateOne({ _id: req.params.taskId }, { $set: req.body });
        res.json(updatedTask);
    } catch (err) {
        res.json({ message: err });
    }
};
exports.getTaskByTitle = async (req, res) => {
    try {
        const task = await Task.find({ title: req.params.taskTitle });
        res.json(task);
    } catch (err) {
        res.json({ message: err });
    }
};