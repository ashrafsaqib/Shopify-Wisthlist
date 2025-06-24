# Wishlist App

This is a simple Express-based Wishlist application that allows customers to save and retrieve their wishlist items using a MySQL database.

## Project Structure

```
wishlist-app
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── controllers             # Contains the wishlist controller
│   │   └── wishlistController.ts
│   ├── routes                  # Contains the routes for the wishlist endpoints
│   │   └── wishlistRoutes.ts
│   ├── db                      # Database connection logic
│   │   └── mysql.ts
│   └── types                   # Type definitions
│       └── index.ts
├── package.json                # NPM package configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd wishlist-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure the MySQL database:**
   Ensure that your MySQL database is set up and the connection details are correctly configured in `src/db/mysql.ts`.

4. **Run the application:**
   ```
   npm start
   ```

## API Usage

### Save Wishlist Item

- **Endpoint:** `POST /wishlist`
- **Request Body:**
  ```json
  {
    "product_id": "string",
    "customer_id": "string",
    "store_id": "string"
  }
  ```

### Retrieve Wishlist Items for a Specific Customer

- **Endpoint:** `GET /wishlist/:customer_id`
- **Response:**
  ```json
  [
    {
      "product_id": "string",
      "customer_id": "string",
      "store_id": "string"
    }
  ]
  ```

## License

This project is licensed under the MIT License.