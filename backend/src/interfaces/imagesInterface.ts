import { Schema } from 'mongoose';

export interface Images {
  title: string,
  author: string,
  image: string,
}

export const imagesScheme = new Schema<Images>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
});
