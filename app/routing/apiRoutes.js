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

        console.log("Name: " + userName);
        console.log("User score " + userScores);

        let sum = b.reduce((a, b) => a + b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff" + bestMatch.friendDifference);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

        for (let i = 0; i < amigo.length; index++) {
            console.log(amigo[i].name);
            totalDifference = 0;
            console.log("Total Diff " + totalDifference);
            console.log("Best match friend diff " + bestMatch.friendDifference);

            let bfriendScore = amigo[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log("---------------------------> " + totalDifference);

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }

            console.log(totalDifference + "Total Difference");
        }

        console.log(bestMatch);
        friends.push(userData);
        console.log("New User Added");
        console.log(userData);
        res.json(bestMatch);


    });



















}