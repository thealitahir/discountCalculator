import { DataTypes } from 'sequelize';
import sequelize from '../instances/sequlize';

export interface ProductModel {
    id: number
    name: string
    discount: number
    categoryId: number
}

export const Product = sequelize.define('products',{
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
},{tableName: 'products',freezeTableName: true});