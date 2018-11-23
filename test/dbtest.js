var chai = require("chai");
var getEvents = require("../db/events").getEvents;
chai.should();


describe("Database", () => {
    describe("getEvents", () => {
        it("should return the correct events for September", async () => {
            let events = await getEvents(9, 2018);
            events.should.have.length(2);
        })
    })
})