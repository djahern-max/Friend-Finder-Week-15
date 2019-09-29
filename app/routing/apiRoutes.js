let amigo = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(amigo);

    });

    app.post("/api/friends", function (req, res) {

        let totalDifference = 0;
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        let userDate = req.body;
        let userName = userData.name;
        let userScores = userData.scores;

        var b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        }

    });
















}