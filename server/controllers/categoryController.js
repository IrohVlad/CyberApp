import {v4} from "uuid";
import ErrorApi from "../errorApi/errorApi.js";
import {Category, Img} from '../models/model.js'
import path from 'path';
const __dirname = path.resolve();
class CategoryController{
    async getAll(req, res){
        const Categ = await Category.findAll();
        res.json(Categ);
    }
    async getOne(req, res, next){
        const {id} = req.query;
        
        if (!id){
            return next(ErrorApi.badRequest('нет id'));
        }
        const Categ = await Img.findAll({where: {categoryId: id}});
        res.json(Categ);
    }
    async create(req, res){
        const {id, name} = req.body;
        const categ = await Category.create({id, name});
        res.json(categ);
    }
    async createPic(req, res){
        const {id, name, img, categoryId} = req.body;
        const categ = await Img.create({id, name, img, categoryId});
        res.json(categ);
    }
} 
export default new CategoryController();