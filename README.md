# Library Management System

A simple book management library application built with Node.js, Express, and MongoDB.

## Features

- CRUD operations for books
- RESTful API design
- MongoDB database integration
- MVC architecture

## API Endpoints

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get a specific book
- `POST /api/books` - Add a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Make sure MongoDB is running on your local machine
4. Start the server:
   ```
   npm start
   ```
   
## Development

To run the server in development mode with nodemon:
```
npm run dev
```

## Book Model

- title: String (required)
- author: String (required)
- isbn: String (required, unique)
- publishedYear: Number (required)
- genre: String (required)
- description: String
- quantity: Number (required, default: 1)
- createdAt: Date (default: current date)
- updatedAt: Date (default: current date)
