import { DataTypes } from 'sequelize';
import sequelize from '../instances/sequlize';

export interface UserModel {
    id: number
    email: string
    password: string
}

export const User = sequelize.define('users',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Email is not valid.'
            },
            notEmpty: {
                msg: 'Email is required.'
            }
        }
    },
    password: {
        type: DataTypes.STRING
    },
},{tableName: 'users',freezeTableName: true});