// src/controllers/BookController.ts

import { Request, Response } from 'express';
import ImagesServices from '../services/ImagesServices';

class BookController {
  constructor(private imagesService = new ImagesServices()) {}

  notFound = 'Book not found';

  internalError = 'Internal server error';

  public getImages = async (req: Request, res: Response) => {
    try {
      const books = await this.imagesService.getImages();

      return res.status(200).send(books);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public insertImage = async (req: Request, res: Response) => {
    try {
      const book = await this.imagesService.insertImage(req.body);
      return res.status(201).send(book);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.notFound });
    }
  };
}

export default BookController;
