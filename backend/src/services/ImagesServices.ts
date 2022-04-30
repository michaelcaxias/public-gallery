import ImageModel from '../models/ImagesModel';
import { IImages } from '../schemas/ImagesScheme';

class ImagesServices {
  constructor(private imagesModel = new ImageModel()) {}

  public async getImages(): Promise<IImages[]> {
    const image = await this.imagesModel.getImages();
    return image;
  }

  public async insertImage(imageBody: object): Promise<IImages[]> {
    const image = await this.imagesModel.insertImage(imageBody);
    return image;
  }

  public async deleteImage(id: string): Promise<IImages> {
    const image = await this.imagesModel.deleteImage(id);
    return image;
  }
}

export default ImagesServices;
