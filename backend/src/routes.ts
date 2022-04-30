import { Router } from 'express';

import ImagesController from './controllers/ImagesController';

const imagesController = new ImagesController();
const routes = Router();

routes.get('/images', imagesController.getImages);
routes.post('/images', imagesController.insertImage);
routes.delete('/images/:id', imagesController.deleteImage);

export default routes;
