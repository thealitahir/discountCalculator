'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('categories', 
    'email', 'name');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('categories', 'email', 'name');
  }
};
