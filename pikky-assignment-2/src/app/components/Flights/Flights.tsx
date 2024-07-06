"use client";
import services from "@/app/services/services";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import Flight from "../utilities/Flight";
import Filters from "../Filters/Filters";
export default function Flights() {
  let [flights, setFlights] = useState<any>([]);
  let [flightNumber, setFlightNumber] = useState<any>("");
  let [origin, setOrigin] = useState<any>("");
  let [destination, setDestination] = useState<any>("");
  let [airline, setAirline] = useState<any>("");
  let [flightType, setFlightType] = useState<any>("");
  let [status, setStatus] = useState<any>("");
  let [updateData, setUpdateData] = useState<any>(true);
  useEffect(() => {
    services.getFlights().then((res) => {
      let newArray: Array<any> = [];
      for (let flight of res.reverse()) {
        if (
          flight.flightNumber
            .toLowerCase()
            .includes(flightNumber.toLowerCase()) &&
          flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
          flight.destination
            .toLowerCase()
            .includes(destination.toLowerCase()) &&
          flight.airline.toLowerCase().includes(airline.toLowerCase()) &&
          flight.flightType.toLowerCase().includes(flightType.toLowerCase()) &&
          flight.status.toLowerCase().includes(status.toLowerCase())
        ) {
          console.log(origin);

          newArray.push(flight);
        }
      }
      setFlights(newArray);
    })
  }, [updateData]);

  useEffect(() => {
    console.log(origin);
    updateData?
    services.getFlights().then((res) => {
      let newArray: Array<any> = [];
      for (let flight of res.reverse()) {
        if (
          flight.flightNumber
            .toLowerCase()
            .includes(flightNumber.toLowerCase()) &&
          flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
          flight.destination
            .toLowerCase()
            .includes(destination.toLowerCase()) &&
          flight.airline.toLowerCase().includes(airline.toLowerCase()) &&
          flight.flightType.toLowerCase().includes(flightType.toLowerCase()) &&
          flight.status.toLowerCase().includes(status.toLowerCase())
        ) {
          newArray.push(flight);
        }
      }
      setFlights(newArray);
    }) :''
  }, [origin, flightNumber, destination, airline, flightType, status]);

  setTimeout(()=>{
    setUpdateData(true)
  }, 5000)
  let filters = {
    "Flight number": {
      options: [],
      setter: setFlightNumber,
    },
    Origin: {
      options: [
        "JFK",
        "LAX",
        "ORD",
        "DFW",
        "ATL",
        "LHR",
        "CDG",
        "HND",
        "PEK",
        "DXB",
      ],
      setter: setOrigin,
    },
    Destination: {
      options: [],
      setter: setDestination,
    },
    Airline: {
      options: [
        "American Airlines",
        "United Airlines",
        "Delta Air Lines",
        "Southwest Airlines",
        "British Airways",
      ],
      setter: setAirline,
    },
    "Flight Type": {
      options: ["Domestic", "International"],
      setter: setFlightType,
    },
    Status: {
      options: [
        "On Time",
        "Delayed",
        "Cancelled",
        "Boarding",
        "In Flight",
        "Landed",
      ],
      setter: setStatus,
    },
  };
  useEffect(() => {
    let newFlights = [];
    for (let flight of flights) {
    }
  }, [flightNumber, origin, destination, airline, flightType, status]);
  return (
    <div>
      <Filters filters={filters}></Filters>
      <Table>
        <TableCaption>Real-Time Flight Tracker Dashboard</TableCaption>
        <TableHead>New Flights are added every 5 sec</TableHead>
        <TableHeader>
          <TableRow>
            <TableHead>Flight Number</TableHead>
            <TableHead>Origin</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Departure</TableHead>
            <TableHead>Airline</TableHead>
            <TableHead>Flight Type</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <Flight flights={flights}></Flight>
      </Table>
    </div>
  );
}
