"use client"

import * as React from "react"
import { Search } from "lucide-react"
import type { ApiEndpoint } from "@/lib/types"
import { apiCategories } from "@/lib/api-data"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

interface ApiSidebarProps {
  selectedEndpoint?: ApiEndpoint | null
  onEndpointSelect: (endpoint: ApiEndpoint) => void
}

export function ApiSidebar({ selectedEndpoint, onEndpointSelect }: ApiSidebarProps) {
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredCategories = React.useMemo(() => {
    if (!searchQuery) return apiCategories

    return apiCategories
      .map((category) => ({
        ...category,
        endpoints: category.endpoints.filter(
          (endpoint) =>
            endpoint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      }))
      .filter((category) => category.endpoints.length > 0)
  }, [searchQuery])

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "POST":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "PUT":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "DELETE":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "PATCH":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <Sidebar className="w-80">
      <SidebarHeader className="p-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <SidebarInput
            placeholder="Search endpoints..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        {filteredCategories.map((category) => (
          <SidebarGroup key={category.id}>
            <SidebarGroupLabel className="flex items-center gap-2">
              <span>{category.icon && <category.icon className="h-4 w-4" />}</span>
              {category.name}
              <Badge variant="secondary" className="ml-auto">
                {category.endpoints.length}
              </Badge>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.endpoints.map((endpoint) => (
                  <SidebarMenuItem key={endpoint.id}>
                    <SidebarMenuButton
                      onClick={() => onEndpointSelect(endpoint)}
                      isActive={selectedEndpoint?.id === endpoint.id}
                      className="flex flex-col items-start gap-1 p-3 h-auto"
                    >
                      <div className="flex items-center gap-2 w-full">
                        <Badge variant="secondary" className={`text-xs px-2 py-0.5 ${getMethodColor(endpoint.method)}`}>
                          {endpoint.method}
                        </Badge>
                        <span className="font-medium truncate">{endpoint.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground text-left line-clamp-2">{endpoint.description}</p>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
