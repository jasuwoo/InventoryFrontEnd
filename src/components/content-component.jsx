import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
export default function ContentComponent({data}) {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">{data?.name}</TableCell>
          <TableCell>{data?.status}</TableCell>
          <TableCell>{data?.missing_parts}</TableCell>
          <TableCell>{data?.defective_parts}</TableCell>
          <TableCell> <Button className="bg-blue-400 " variant="outline">Edit</Button></TableCell>
          <TableCell> <Button variant="destructive">Delete</Button></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}