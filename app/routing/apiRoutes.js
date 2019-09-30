var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var totalDifference = 0;

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        // console.log(userData);

        console.log("User Name: " + userName);
        console.log("User Score " + userScores);

        var sum = b.reduce((a, b) => a + b, 0);

        console.log("Total combined score = " + sum);

        console.log("<<==============================>>");
        console.log("++++++++++++++++++++++++++++++++++");
        console.log("<<==============================>>");
        console.log(".....AND THE CONTESTANTS ARE......");
        console.log("<<==============================>>");
        console.log("++++++++++++++++++++++++++++++++++");
        console.log("<<==============================>>");

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("WITH A SCORE OF... " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log("THE DIFFERENCE BETWEEN YOUR SCORE AND THEIR'S IS ===> " + totalDifference);

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
        console.log(".....AND THE WINNDER IS......");
        console.log(bestMatch);

        friends.push(userData);
        console.log("New user added to database");
        console.log(userData);
        res.json(bestMatch);
    });
};