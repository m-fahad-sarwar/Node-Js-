const TasksModel = require('./TaskModel')

const getTasks = async (req, res) => {


    try {
        const data = await TasksModel.find()
        let response = {
            status: 200,
            message: "successfully fetched",
            data: data
        };
        res.json(response);
    } catch (error) {
        let response = {
            status: 401,
            message: error,
        };
        res.json(response);
    }
    

}
const addTask = async (req, res) => {
    console.log(req.body)
    if (!req.body.title ) {
        let response = {
            status: 201,
            message: "title are required",
        };
        res.json(response);
        return;
    }

    // logic createPost
    const newTask = {
        title: req.body.title,
        createdAt: new Date(),
    };

    const task = new TasksModel(newTask);

    try {
        await task.save();
        let response = {
            status: 200,
            message: "successfully created",
        };
        res.json(response);
    } catch (error) {
        let response = {
            status: 400,
            message: error,
        };
        res.json(response);
    }
};
const deleteTask = async(req , res) =>{
    console.log(req.query.id);
    try {
        await TasksModel.deleteOne({ _id: req.query.id });
        let response = {
          status: 200,
          message: "successfully deleted",
        };
        res.json(response);
      } catch (error) {
        let response = {
          status: 401,
          message: error,
        };
        res.json(response);
      }
}
const updateTask = async(req, res)=>{
    console.log(req.params.id);
    if (!req.body.title) {
        let response = {
          status: 401,
          message: "params are required",
        };
        res.json(response);
        return;
      }
  
      // logic createPost
      const updatedTask = {
        title: req.body.title,
        createdAt: new Date(),
      };
    
      try {
        await TasksModel.updateOne({ _id: req.params.id }, updatedTask);
        let response = {
          status: 200,
          message: "successfully updated",
        };
        res.json(response);
      } catch (error) {
        let response = {
          status: 401,
          message: error,
        };
        res.json(response);
      }
}
module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateTask
}