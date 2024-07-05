function generateFlightNumber() {
    const airlines = ['AA', 'UA', 'DL', 'SW', 'BA'];
    const airline = airlines[Math.floor(Math.random() * airlines.length)];
    const number = Math.floor(Math.random() * 9000) + 1000;
    return `${airline}${number}`;
}

module.exports={generateFlightNumber}