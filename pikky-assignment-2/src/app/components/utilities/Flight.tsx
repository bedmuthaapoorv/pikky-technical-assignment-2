import { TableBody, TableCell } from "@/components/ui/table";
import { TableRow } from "@/components/ui/table";
export default function Flight(props: any) {
  return (
    <TableBody>
      {props.flights.map((flight: any, key: number) => {
        return <TableRow key={key}>
          <TableCell>{flight.flightNumber}</TableCell>
          <TableCell>{flight.origin}</TableCell>
          <TableCell>{flight.destination}</TableCell>
          <TableCell>{flight.departure}</TableCell>
          <TableCell>{flight.airline}</TableCell>
          <TableCell>{flight.flightType}</TableCell>
          <TableCell>{flight.status}</TableCell>
        </TableRow>;
      })}
    </TableBody>
  );
}
