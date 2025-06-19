import type { APICategory } from "@/types/api"

export const apiCategories: APICategory[] = [
  {
    id: "users",
    name: "Users",
    icon: "👥",
    endpoints: [
      {
        id: "random-user",
        title: "Get Random User",
        description:
          "Fetch a random user with complete profile information including name, email, avatar, and address.",
        method: "GET",
        url: "https://api.freeapi.app/api/v1/public/randomusers/user/random",
        category: "users",
        sampleResponse: {
          statusCode: 200,
          data: {
            login: {
              uuid: "4b785022-9afe-4ab6-8266-3e8b8f4b7a8c",
            },
            name: {
              title: "Mr",
              first: "John",
              last: "Doe",
            },
            email: "john.doe@example.com",
            picture: {
              large: "https://randomuser.me/api/portraits/men/1.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
            },
          },
          success: true,
          message: "Random user fetched successfully",
        },
      },
      {
        id: "users-list",
        title: "Get Users List",
        description: "Retrieve a paginated list of users with filtering and sorting options.",
        method: "GET",
        url: "https://api.freeapi.app/api/v1/public/randomusers",
        category: "users",
        parameters: [
          {
            name: "page",
            type: "number",
            required: false,
            description: "Page number for pagination",
            defaultValue: "1",
          },
          {
            name: "limit",
            type: "number",
            required: false,
            description: "Number of users per page",
            defaultValue: "10",
          },
        ],
        sampleResponse: {
          statusCode: 200,
          data: {
            users: [],
            totalUsers: 100,
            currentPage: 1,
            totalPages: 10,
          },
          success: true,
        },
      },
    ],
  },
  {
    id: "quotes",
    name: "Quotes",
    icon: "💬",
    endpoints: [
      {
        id: "random-quote",
        title: "Get Random Quote",
        description: "Fetch an inspirational random quote with author information.",
        method: "GET",
        url: "https://api.freeapi.app/api/v1/public/quotes/quote/random",
        category: "quotes",
        sampleResponse: {
          statusCode: 200,
          data: {
            content: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            tags: ["inspiration", "work", "success"],
            authorSlug: "steve-jobs",
            length: 49,
            dateAdded: "2023-04-14",
            dateModified: "2023-04-14",
          },
          success: true,
          message: "Quote fetched successfully",
        },
      },
    ],
  },
  {
    id: "products",
    name: "Products",
    icon: "🛍️",
    endpoints: [
      {
        id: "random-product",
        title: "Get Random Product",
        description: "Fetch a random product with details including price, images, and specifications.",
        method: "GET",
        url: "https://api.freeapi.app/api/v1/public/randomproducts/product/random",
        category: "products",
        sampleResponse: {
          statusCode: 200,
          data: {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
          },
          success: true,
        },
      },
    ],
  },
]
