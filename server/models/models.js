const sequelize = require('../database');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
});

const Photo = sequelize.define('photo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    path: {type: DataTypes.STRING, unique: true, allowNull: false}
});

User.hasOne(Photo);
Photo.belongsTo(User);

module.exports = {
    User,
    Photo
}