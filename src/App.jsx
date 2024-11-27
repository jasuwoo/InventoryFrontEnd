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
import { Outlet } from "react-router-dom"

function App() {

  return (

    <SidebarProvider>
      <AppSidebar />
      <header className="bg-blue-400 p-1 ">
        <SidebarTrigger />
      </header>
      <Outlet />
    </SidebarProvider>

  )
}

export default App
