'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('products', 'categoryId', {
      type: Sequelize.INTEGER,
      allowNull: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('products', 'categoryId', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  }
};
