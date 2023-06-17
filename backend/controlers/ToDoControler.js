const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    try {
      const toDo = await ToDoModel.find();
      res.send(toDo);
    } catch (error) {
      console.error('Error occurred while fetching ToDo:', error);
      res.status(500).json({ error: 'An error occurred while fetching ToDo' });
    }
  };
  
  module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;
  console.log(req.body);
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
  
    try {
      const todo = await ToDoModel.create({ text });
      console.log('Added successfully');
      res.send(todo);
    } catch (error) {
      console.error('Error occurred while saving ToDo:', error);
      res.status(500).json({ error: 'An error occurred while saving ToDo' });
    }
  };