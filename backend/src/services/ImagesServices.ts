import ImageModel from '../models/ImagesModel';
import { IImages } from '../schemas/ImagesScheme';

class ImagesServices {
  constructor(private imagesModel = new ImageModel()) {}

  public async getImages(): Promise<IImages[]> {
    const book = await this.imagesModel.getImages();
    return book;
  }

  public async insertImage(imageBody: object): Promise<IImages[]> {
    const book = await this.imagesModel.insertImage(imageBody);
    return book;
  }
}

export default ImagesServices;
