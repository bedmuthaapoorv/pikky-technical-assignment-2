function generateAirport() {
    const airports = ['JFK', 'LAX', 'ORD', 'DFW', 'ATL', 'LHR', 'CDG', 'HND', 'PEK', 'DXB'];
    return airports[Math.floor(Math.random() * airports.length)];
}
module.exports={
    generateAirport
}