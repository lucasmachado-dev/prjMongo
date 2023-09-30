import axios from 'axios';
import mongo from '../../config/db/db.js'
import { ObjectId } from 'mongodb';
import {v4 as uuidv4} from 'uuid'


class TaskService {

  async newTask(input) {
    try
    {
      const db = await mongo();
      const response = await db.collection('todo').insertOne({
        id: uuidv4(),
        title: input.title,
        description: input.description,
        date: input.date,
        status: 'pending'
      })  
      return response;

    } catch (error) {
      console.error(error);
      throw new Error('Erro ao criar a tarefa');
    };
    
  }

  async listTasks() {
    try {
      const db = await mongo();
      const orders = await db.collection('todo').find().toArray();
      return(orders)
    } catch (error) {
      console.log(error.response.data);
      return false;
    }
  }


  async completeTask(id) {
    try {
      const db = await mongo();
      const tasks = await db.collection('todo').updateOne(
        {id : id},
        {$set : {'status':'concluded'} }
      )
      return(tasks)
    } catch (error) {
      console.error(error);
      return false;
    }
  }


  async deleteTask(id) {
    try {
      const db = await mongo();
      const task = await db.collection('todo').deleteOne({id: id})
      return(task)
    } catch (error) {
      console.log(error.response.data);
      return false;
    }
  }

  

}

export default new TaskService();

