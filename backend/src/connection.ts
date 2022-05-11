import mongoose from 'mongoose';

const MONGO_URL = 'mongodb://mongo:27017/public-gallery';

const connection = (
  mongoDatabaseURI = MONGO_URL,
) =>
  mongoose.connect(mongoDatabaseURI);

export default connection;
