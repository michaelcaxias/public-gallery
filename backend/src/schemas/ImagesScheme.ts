import { Schema } from 'mongoose';

export interface IImages {
  title: string;
  author: string;
  publishedDate: string;
  image: string;
}

export const imagesScheme = new Schema<IImages>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: String, required: false },
  image: { type: String, required: false },
}, {
  versionKey: false,
});
