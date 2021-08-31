'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('products', 
    'email', 'name');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('products', 'email', 'name');
  }
};
