import { Request, Response } from 'express';
import ImagesServices from '../services/ImagesServices';

class ImagesController {
  constructor(private imagesService = new ImagesServices()) {}

  notFound = 'Document not found';

  internalError = 'Internal server error';

  public getImages = async (req: Request, res: Response) => {
    try {
      const images = await this.imagesService.getImages();

      return res.status(200).send(images);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(500).send({ message: this.internalError });
    }
  };

  public insertImage = async (req: Request, res: Response) => {
    try {
      const images = await this.imagesService.insertImage(req.body);
      return res.status(201).send(images);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(500).send({ message: this.internalError });
    }
  };

  public deleteImage = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const images = await this.imagesService.deleteImage(id);
      return res.status(201).send(images);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(500).send({ message: this.internalError });
    }
  };
}

export default ImagesController;
