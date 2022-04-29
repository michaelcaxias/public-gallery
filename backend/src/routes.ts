// src/routes.ts

import { Router } from 'express';

import BookController from './controllers/BookController';

const bookController = new BookController();
const routes = Router();

routes.get('/books', bookController.getBooks);
routes.post('/books', bookController.create);

export default routes;
