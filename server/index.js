import express from "express";
import dotenv from 'dotenv'
import {Img, Category} from './models/model.js'
import sequelize from './models/db.js'
import cors from 'cors';
import router from './routes/index.js';
import errorHandling from './middleware/errorHandling.js'
import fileUpload from 'express-fileupload';
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandling);

const start = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, ()=> console.log(`server started on ${PORT}`));   
}
start();