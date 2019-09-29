let amigo = require("../data/friends");

module.exports = function (app) {

    //API GET Requests
    //With localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    app.get("/api/friends", function (req, res) {
        res.json(amigo);

    });

    app.post("/api/friends", function (req, res) {

        console.log(req.body.scores);

    });
















}