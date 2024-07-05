const { response } = require('express');
const connectors=require('../config/connectors')

async function getAllFlights(){
    let client=connectors.mongoClient;
    try {
        await client.connect();
        let db = await client.db("flightsdb");
        let responses = await db.collection("flights");
        cursor = await responses.find();
        let flights=[]
        for await (const doc of cursor) {
            flights.push(doc);
          }
        await client.close();
        console.log(flights)
        return flights
    }catch(err){
        await client.close();
        return err;
    }
}

// getAllFlights()
