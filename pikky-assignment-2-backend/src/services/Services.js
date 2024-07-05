const { generateAirline } = require("./generateAirline");
const { generateAirport } = require("./generateAirport");
const { generateDepartureTime } = require("./generateDepartureTime");
const { generateFlightNumber } = require("./generateFlightNumber");
const { generateFlightType } = require("./generateFlightType");
const { generateNewFlight } = require("./generateNewFlight");
const { generateStatus } = require("./generateStatus");

module.exports={
    generateNewFlight,
    generateAirline,
    generateDepartureTime,
    generateFlightNumber,
    generateStatus,
    generateFlightType,
    generateAirport
}