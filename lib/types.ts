export interface ApiParameter {
  name: string
  type: string
  required: boolean
  description: string
}

export interface ApiEndpoint {
  id: string
  title: string
  description: string
  method: string
  url: string
  parameters?: ApiParameter[]
  sampleResponse: any
}

export interface ApiCategory {
  id: string
  name: string
  icon: any
  endpoints: ApiEndpoint[]
}
