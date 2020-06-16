import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointscontroller = new PointsController();
const itemscontroller = new ItemsController();

const routes = express.Router(); 

routes.get('/items', itemscontroller.index);

routes.post('/points', pointscontroller.create);
routes.get('/points', pointscontroller.index);//Listar vários
routes.get('/points/:id', pointscontroller.show);//Listar um único

export default routes;