function generateAirline() {
    const airlines = ['American Airlines', 'United Airlines', 'Delta Air Lines', 'Southwest Airlines', 'British Airways'];
    return airlines[Math.floor(Math.random() * airlines.length)];
}

module.exports={
    generateAirline
}