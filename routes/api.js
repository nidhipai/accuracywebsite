var express = require("express");
var router = express.Router()
var getEvents = require("../db/events").getEvents;

router.get("/events", async (req, res, next) => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let rows = await getEvents(month, year);
    res.json(rows);
})

router.get("/events/:year/:month", async function(req, res, next) {
    let year = req.params.year;
    let month = req.params.month;
    let rows = await getEvents(month, year);
    res.json(rows);
})

module.exports = router;