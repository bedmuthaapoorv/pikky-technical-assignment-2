let generateNewFlight=require('../services/generateNewFlight')
async function generateNewFlights(){
    setInterval(()=>{
        generateNewFlight.generateNewFlight().then(
            ()=>{
                console.log('new flight added')
            }
        )
    }, 2000)
    
}
generateNewFlights()