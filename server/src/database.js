import mongoose from 'mongoose';
import config from './config.js';

const connectTODatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
    const connect = await mongoose.connect(config.mongodb_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export default connectTODatabase;
