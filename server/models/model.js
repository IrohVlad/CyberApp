import sequelize from './db.js';
import {DataTypes} from 'sequelize';

const Img = sequelize.define('img', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncremrnt: true},
    name: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
})
const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncremrnt: true},
    name: {type: DataTypes.STRING}
})

Category.hasMany(Img);
Img.belongsTo(Category);

export {Img, Category};