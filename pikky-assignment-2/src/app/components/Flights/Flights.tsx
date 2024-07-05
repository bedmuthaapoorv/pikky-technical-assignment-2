'use client'
import services from "@/app/services/services";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

export default function Flights() {
    let [flights, setFlights]=useState<any>();
    useEffect(()=>{
        services.getFlights().then((res)=>{
            setFlights(res)
        })
    }, [])
  return (
    <div>
      <Table>
        <TableCaption>Real-Time Flight Tracker Dashboard</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >Flight Number</TableHead>
            <TableHead>Origin</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead >Departure</TableHead>
            <TableHead>Airline</TableHead>
            <TableHead>Flight Type</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        
      </Table>
    </div>
  );
}
