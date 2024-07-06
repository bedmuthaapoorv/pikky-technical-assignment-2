let connectors =require('../config/connectors')
async function getFlights(flightDetails){
    let client = connectors.mongoClient;
  try {
    await client.connect();
    let db = await client.db("flightsdb");
    let flights = await db.collection("flights");

    // Insert the flight into the database
    const result = await flights.find();
    let response=[]
    await result.forEach((flight)=>{
        response.push(flight)
    })
    
    // await client.close();
    return response;
  } catch (err) {
    console.log(err)
    await client.close();
    return err;
  }
}
module.exports={
    getFlights
}