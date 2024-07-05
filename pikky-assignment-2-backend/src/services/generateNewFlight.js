const connectors = require("../config/connectors");
let services = require("./Services");
let daos = require("../dao/DAO");
async function generateNewFlight() {
  try {
    // Generate random flight data
    const flight = {
      flightNumber: services.generateFlightNumber(),
      origin: services.generateAirport(),
      destination: services.generateAirport(),
      departureTime: services.generateDepartureTime(),
      airline: services.generateAirline(),
      flightType: services.generateFlightType(),
      status: services.generateStatus(),
    };

    let response = daos.insertNewFlight(flight);

    return response;
  } catch (err) {
    console.log(err);

    return err;
  }
}

module.exports = { generateNewFlight };
