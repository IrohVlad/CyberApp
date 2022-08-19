import {v4} from "uuid";
import ErrorApi from "../errorApi/errorApi.js";
import {Category} from '../models/model.js'
import path from 'path';
const __dirname = path.resolve();
class CategoryController{
    async getAll(req, res){
        const Categ = Category.findAll();
        const {img} = req.files;
        let fileName = v4() + ".jpg";
        res.json(Categ);
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
    }
    async getOne(req, res, next){
        const {id} = req.query;
        if (!id){
            next(ErrorApi.badRequest('нет id'));
        }
        res.json(id);
    }
} 
export default new CategoryController();