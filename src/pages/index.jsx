import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import ContentComponent from "../components/content-component";
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
export default function HomePage() {
  return (
    <main className="flex w-full h-screen ">
      <aside className="w-full m h-screen flex flex-col ">
        <header className="bg-blue-400 border-b-2  ">
        </header>
        <section>
          <div className="text-center ">
            <h1>Only Parts Storage Unit</h1>
            <h3>Where you can store parts safely</h3>
          </div>
        </section>
      </aside>
    </main>
  );
}
