module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Baskets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        Reflect: {
          model: 'Orders',
          key: 'id',
        },
      },
      good_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        Reflect: {
          model: 'Goods',
          key: 'id',
        },
      },
      total_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Baskets');
  },
};
