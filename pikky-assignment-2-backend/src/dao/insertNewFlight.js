const connectors = require("../config/connectors");
async function insertNewFlight(flight) {
  let client = connectors.mongoClient;
  try {
    await client.connect();
    let db = await client.db("flightsdb");
    let flights = await db.collection("flights");

    // Insert the flight into the database
    const result = await flights.insertOne(flight);

    await client.close();
    return result.insertedId;
  } catch (err) {
    console.log(err)
    await client.close();
    return err;
  }
}

module.exports = { insertNewFlight };
