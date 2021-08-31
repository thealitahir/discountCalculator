import { DataTypes } from 'sequelize';
import sequelize from '../instances/sequlize';

export interface CategoryModel {
    id: number
    name: string
    discount: number
    categoryId: number
}

export const Category = sequelize.define('categories',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    discount: {
        type: DataTypes.NUMBER
    },
    categoryId:{
        type: DataTypes.INTEGER,
    }
},{tableName: 'categories',freezeTableName: true});