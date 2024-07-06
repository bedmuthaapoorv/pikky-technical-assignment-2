import axios from "axios";
import config from "../config/config";
export default async function getFlights(){
    try{
        let flights= await axios.post(config.backend_url+'/getFlights',{
            
          },
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            }
          });
          return flights.data
    }catch(err){
        console.log(err)
        return []
    }
}