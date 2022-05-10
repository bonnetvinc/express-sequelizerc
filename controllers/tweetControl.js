const { Tweet } = require("../models");
const { Response } = require("../models");

module.exports = {

    async getAllTweet(req,res) {
         return Tweet
            .findAll({
                include: [{
                model: Response,
                as: 'responses'
                }],
            })
            .then((tweets) => res.status(200).send(tweets))
            .catch((error) => { res.status(400).send(error); });
    },

}