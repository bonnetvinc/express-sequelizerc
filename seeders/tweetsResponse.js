"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const date = new Date();

    await queryInterface.bulkInsert("Responses", [
      {
        id: 1,
        tweet_id: 1,
        content: "response 1",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 2,
        tweet_id: 1,
        content: "response 2",
        createdAt: date,
        updatedAt: date,
      },
        {
        id: 3,
        tweet_id: 2,
        content: "response 3",
        createdAt: date,
        updatedAt: date,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Responses", null);
  },
};
