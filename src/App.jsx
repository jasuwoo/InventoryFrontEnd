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
      <main className="flex w-screen h-screen">
        <AppSidebar className="h-screen bg-blue-400"/>
        <aside className="w-full">
          <header className="bg-blue-400 p-1 ">
            <SidebarTrigger />
          </header>
          <Outlet />
        </aside>
      </main>
    </SidebarProvider>

  )
}

export default App
