"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const date = new Date();

    await queryInterface.bulkInsert("Tweets", [
      {
        id: 1,
        message: "this is  Tweet 1",
        createdAt: date,
        updatedAt: date,
      },
       {
        id: 2,
        message: "this is  Tweet 2",
        createdAt: date,
        updatedAt: date,
      },
        {
        id: 3,
        message: "this is  Tweet 3",
        createdAt: date,
        updatedAt: date,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tweets", null);
  },
};
