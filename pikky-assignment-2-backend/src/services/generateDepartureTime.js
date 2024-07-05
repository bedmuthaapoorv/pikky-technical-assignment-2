function generateDepartureTime() {
    const start = new Date();
    const end = new Date(start.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
module.exports={
    generateDepartureTime
}