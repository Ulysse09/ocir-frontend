import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/app-sidebar"

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 h-[100vh] bg-black text-white p-6">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}