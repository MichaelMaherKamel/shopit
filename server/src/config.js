import dotenv from 'dotenv';
//dotenv.config({ path: '../.env' }); //Use it if you it not using nodemon
dotenv.config(); //Use it in case you are using nodemon

const { PORT, MONGO_URI } = process.env;

export default {
  port: PORT,
  mongodb_URI: MONGO_URI,
};
