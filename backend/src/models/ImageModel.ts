import { Schema, model as createModel, Document } from 'mongoose';
import { Images } from '../interfaces/imagesInterface';

interface ImageDocument extends Images, Document { }

const imageScheme = new Schema<ImageDocument>({
  title: String,
  author: String,
  image: String,
}, { versionKey: false });

const ImageModel = createModel<Images>('Images', imageScheme);

export default ImageModel;
