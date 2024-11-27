  import * as React from "react"
import { RouterProvider, useNavigate } from "react-router-dom"
import { Archive, Banana, BananaIcon,  } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Storage",
      items: [
        {
          title: 'Home',
          url: '/',
          isActive: true,
        },
        {
          title:"Contents",
          url: "/contents",
          Icon: BananaIcon,
          isActive: true,
        },
      ],
    },
    {
      title: "Admin Panel",
      url: '/cpanel',
      items: [
        {
          title:"Storage",
          url: "/storage",
          isActive: true,
        },
      ],
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  const navigate = useNavigate()
  return (
    (<Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                 <Banana className="size-9"/>
                </div>
                <div className="flex flex-col gap-0.5 leading-none" 
                onClick={() => {
                  navigate('/');
                }}>
                  <span className="font-semibold">OnlyParts</span>
                  <span className="">Inventory System</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>)
  );
}
