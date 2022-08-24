import sequelize from './db.js';
import {DataTypes} from 'sequelize';

const Img = sequelize.define('img', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncremrnt: true},
    name: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
})
const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncremrnt: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

Category.hasMany(Img);
Img.belongsTo(Category);

export {Img, Category};