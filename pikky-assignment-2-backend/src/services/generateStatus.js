function generateStatus() {
    const statuses = ['On Time', 'Delayed', 'Cancelled', 'Boarding', 'In Flight', 'Landed'];
    return statuses[Math.floor(Math.random() * statuses.length)];
}
module.exports={
    generateStatus
}