import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
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

function App() {

  return (
    <SidebarProvider>
    <main className="flex w-full h-screen ">
      <AppSidebar />
      <aside className="w-screen bg-red-400 h-screen flex flex-col ">
        <header className="bg-blue-400 border-b-2 p-2 ">
          <SidebarTrigger />
        </header>
        <section>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contents</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Missing parts</TableHead>
                <tableHead className="flex gap-3 items-center">Defective parts
                <Button  className="bg-blue-400 m" variant="outline">Add</Button> 
                </tableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">System Unit #1</TableCell>
                <TableCell>Working</TableCell>
                <TableCell>None</TableCell>
                <TableCell>None</TableCell>
                <TableCell className="flex gap-3 items-center">
                <Button  className="bg-blue-400" variant="outline">Edit</Button> 
                <Button  className="" variant="destructive">Delete</Button> 
                </TableCell>
               
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </aside>
    </main>
  </SidebarProvider>
  )
}

export default App
