import {Router} from "express";
import TaskController from './controllers/task/task.controller.js'


const routes = Router();

/*Rotas de pagamento*/
routes.post('/task',TaskController.create);
routes.get('/task',TaskController.list);
routes.put('/task/complete/:id',TaskController.complete);
routes.delete('/task/:id',TaskController.delete);
//routes.put('/payment/:id',PaymentController.update);
//routes.patch('/payment/:id',PaymentController.update);

export default routes;