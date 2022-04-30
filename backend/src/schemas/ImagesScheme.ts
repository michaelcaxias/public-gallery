import { Schema } from 'mongoose';

export interface IImages {
  title: string;
  author: string;
  publishedDate: string;
  image: string;
}

export const imagesScheme = new Schema<IImages>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  publishedDate: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  versionKey: false,
});
