export interface APIEndpoint {
  id: string
  title: string
  description: string
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  url: string
  category: string
  parameters?: Parameter[]
  headers?: Header[]
  sampleResponse: any
  responseTime?: number
}

export interface Parameter {
  name: string
  type: string
  required: boolean
  description: string
  defaultValue?: string
}

export interface Header {
  name: string
  value: string
  required: boolean
}

export interface APICategory {
  id: string
  name: string
  icon: string
  endpoints: APIEndpoint[]
}

export interface APIResponse {
  data: any
  status: number
  statusText: string
  headers: Record<string, string>
  responseTime: number
}
