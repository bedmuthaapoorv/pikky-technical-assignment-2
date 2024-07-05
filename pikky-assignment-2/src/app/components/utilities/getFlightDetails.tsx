import { TableBody, TableCell } from "@/components/ui/table"
import { TableRow } from "@/components/ui/table"
export default function eachFlight(){
    return (
        <TableBody>
          <TableRow>
            <TableCell >INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell >$250.00</TableCell>
          </TableRow>
        </TableBody>
    )
}