function generateFlightType() {
    const types = ['Domestic', 'International'];
    return types[Math.floor(Math.random() * types.length)];
}
module.exports={
    generateFlightType
}