const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Good, Order }) {
      Basket.belongsTo(Good, { foreignKey: 'good_id' });
      Basket.belongsTo(Order, { foreignKey: 'order_id' });
    }
  }
  Basket.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      Reflect: {
        model: 'Orders',
        key: 'id',
      },
    },
    good_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      Reflect: {
        model: 'Goods',
        key: 'id',
      },
    },
    total_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
