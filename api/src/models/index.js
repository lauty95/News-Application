const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const News = sequelize.define('news', {
    id: { type: DataTypes.DOUBLE, allowNull: false, primaryKey: true },
    noticia: { type: DataTypes.TEXT, allowNull: false },
    titulo: { type: DataTypes.STRING, allowNull: false },
    area: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT, allowNull: false },
    imagen: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    autor: { type: DataTypes.STRING, allowNull: false },
    destacar: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    video: {type: DataTypes.STRING, allowNull: true},
    poster: {type: DataTypes.STRING, allowNull: false}
  });
};
