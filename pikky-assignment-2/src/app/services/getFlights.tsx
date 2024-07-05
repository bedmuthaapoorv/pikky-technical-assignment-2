import axios from "axios";
import config from "../config/config";
export default async function getFlights(){
    return await axios.post(config.backend_url+'/getFlights')
}