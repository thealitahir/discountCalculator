'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('categories', 
      'categoryId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('categories', 'categoryId')
  }
};
