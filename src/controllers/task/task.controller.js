import TaskService from "../../services/task/task.service.js";

class TaskController {
  async create(req, res) {
    try {
      const response = await TaskService.newTask(req.body);
      if (response) {
        return res.status(201).json(req.body);
      }
    } catch (error) {
      return res.status(500).json({error: 'internal server error'});
    }
  }

  async list(req, res) {
    try {    
      const response = await TaskService.listTasks();
      return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json({error: 'internal server error'});
    }
    
  }

  async complete(req, res) {
    try{   
      const id = req.params.id;
      const response = await TaskService.completeTask(id);
      if (response) {
        return res.status(200).json(`Tarefa ${id} concluída`);
      }
    } catch(error) {
      return res.status(500).json({error: 'internal server error'});
    } 

  }  

  async delete(req, res) {
    try{   
      const id = req.params.id;
      await TaskService.deleteTask(id);
      return res.status(200).json(`Tarefa ${id} deletada`);
    } catch(error) {
      return res.status(500).json({error: 'internal server error'});
    } 
  }   

}

export default new TaskController();