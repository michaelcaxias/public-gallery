import { model as createModel } from 'mongoose';
import { imagesScheme, IImages } from '../schemas/ImagesScheme';

class ImagesModel {
  constructor(
    private imagesModel = createModel<IImages>('Images', imagesScheme),
  ) { }

  public async getImages(): Promise<IImages[]> {
    const images = await this.imagesModel.find();
    return images;
  }

  public async insertImage(imageBody: object): Promise<IImages[]> {
    const images = await this.imagesModel.insertMany(imageBody);
    return images;
  }

  public async deleteImage(id: string): Promise<IImages> {
    const images = await this.imagesModel.findOneAndDelete({ _id: id });
    return images as IImages;
  }
}

export default ImagesModel;
