'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roms', [{
      name: 'Super Mario World',
      image: 'https://upload.wikimedia.org/wikipedia/pt/0/06/Super-Mario-World.jpg',
      download: 'link',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Super Mario All-Stars',
      image: 'https://upload.wikimedia.org/wikipedia/pt/7/74/Super_Mario_All_Stars.jpg',
      download: 'link',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Donkey Kong Country',
      image: 'https://upload.wikimedia.org/wikipedia/pt/8/83/Donkey_Kong_Country_capa.png',
      download: 'link',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roms', null, {});
  }
};
