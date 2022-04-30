import mongoose from 'mongoose';

const connection = (
  mongoDatabaseURI = 'mongodb://localhost:27017/public_gallery',
) =>
  mongoose.connect(mongoDatabaseURI);

export default connection;
