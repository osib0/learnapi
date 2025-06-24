import { Users, MessageSquare, Package, Smile } from "lucide-react";
import type { ApiCategory, ApiEndpoint } from "./types";

export const apiCategories: ApiCategory[] = [
  {
    id: "users",
    name: "Users",
    icon: Users,
    endpoints: [
      {
        id: "get-random-user",
        title: "Get random user",
        description: "Retrieve a random user with complete profile information",
        method: "GET",
        url: "https://randomuser.me/api/",
        sampleResponse: {
          results: [
            {
              gender: "female",
              name: {
                title: "Ms",
                first: "Emma",
                last: "Johnson",
              },
              location: {
                street: { number: 1234, name: "Main St" },
                city: "New York",
                state: "NY",
                country: "United States",
                postcode: "10001",
              },
              email: "emma.johnson@example.com",
              login: {
                uuid: "12345678-1234-1234-1234-123456789012",
                username: "emmaj123",
              },
              dob: {
                date: "1990-05-15T00:00:00.000Z",
                age: 33,
              },
              phone: "(555) 123-4567",
              picture: {
                large: "https://randomuser.me/api/portraits/women/1.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
              },
            },
          ],
          info: {
            seed: "abc123",
            results: 1,
            page: 1,
            version: "1.4",
          },
        },
      },
      {
        id: "get-users",
        title: "Get multiple users",
        description: "Retrieve multiple random users at once",
        method: "GET",
        url: "https://randomuser.me/api/?results=5",
        parameters: [
          {
            name: "results",
            type: "number",
            required: false,
            description: "Number of users to return (1-5000)",
          },
        ],
        sampleResponse: {
          results: [
            {
              gender: "male",
              name: { title: "Mr", first: "John", last: "Doe" },
              email: "john.doe@example.com",
            },
          ],
          info: { seed: "abc123", results: 5, page: 1, version: "1.4" },
        },
      },
    ],
  },
  {
    id: "quotes",
    name: "Quotes",
    icon: MessageSquare,
    endpoints: [
      {
        id: "get-random-quote",
        title: "Get random quote",
        description: "Retrieve an inspirational random quote",
        method: "GET",
        url: "https://api.quotable.io/random",
        sampleResponse: {
          _id: "12345",
          content: "The only way to do great work is to love what you do.",
          author: "Steve Jobs",
          tags: ["motivational", "work", "success"],
          authorSlug: "steve-jobs",
          length: 49,
          dateAdded: "2023-04-14",
          dateModified: "2023-04-14",
        },
      },
      {
        id: "get-quotes-by-author",
        title: "Get quotes by author",
        description: "Retrieve quotes from a specific author",
        method: "GET",
        url: "https://api.quotable.io/quotes?author=steve-jobs",
        parameters: [
          {
            name: "author",
            type: "string",
            required: true,
            description: "Author slug to filter quotes",
          },
        ],
        sampleResponse: {
          count: 10,
          totalCount: 25,
          page: 1,
          totalPages: 3,
          results: [
            {
              _id: "12345",
              content: "Innovation distinguishes between a leader and a follower.",
              author: "Steve Jobs",
              tags: ["innovation", "leadership"],
            },
          ],
        },
      },
    ],
  },
  {
    id: "products",
    name: "Products",
    icon: Package,
    endpoints: [
      {
        id: "get-products",
        title: "Get products",
        description: "Retrieve a list of products from the store",
        method: "GET",
        url: "https://fakestoreapi.com/products",
        sampleResponse: [
          {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description: "Your perfect pack for everyday use and walks in the forest.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: { rate: 3.9, count: 120 },
          },
        ],
      },
      {
        id: "get-product-by-id",
        title: "Get product by ID",
        description: "Retrieve a specific product by its ID",
        method: "GET",
        url: "https://fakestoreapi.com/products/1",
        parameters: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "Product ID",
          },
        ],
        sampleResponse: {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack",
          price: 109.95,
          description: "Your perfect pack for everyday use",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: { rate: 3.9, count: 120 },
        },
      },
    ],
  },
  {
    id: "jokes",
    name: "Jokes",
    icon: Smile,
    endpoints: [
      {
        id: "get-random-joke",
        title: "Get random joke",
        description: "Retrieve a random programming joke",
        method: "GET",
        url: "https://official-joke-api.appspot.com/random_joke",
        sampleResponse: {
          type: "programming",
          setup: "Why do programmers prefer dark mode?",
          punchline: "Because light attracts bugs!",
          id: 123,
        },
      },
      {
        id: "get-jokes-by-type",
        title: "Get jokes by type",
        description: "Retrieve jokes of a specific type",
        method: "GET",
        url: "https://official-joke-api.appspot.com/jokes/programming/ten",
        parameters: [
          {
            name: "type",
            type: "string",
            required: true,
            description: "Type of jokes (programming, general, etc.)",
          },
        ],
        sampleResponse: [
          {
            type: "programming",
            setup: "How many programmers does it take to change a light bulb?",
            punchline: "None. That's a hardware problem.",
            id: 124,
          },
        ],
      },
    ],
  },
];

export function getApiEndpoint(categoryId: string, endpointId: string): ApiEndpoint | null {
  const category = apiCategories.find((cat) => cat.id === categoryId);
  if (!category) return null;

  return category.endpoints.find((endpoint) => endpoint.id === endpointId) || null;
}

export function getAllEndpoints(): ApiEndpoint[] {
  return apiCategories.flatMap((category) => category.endpoints);
}
