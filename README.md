# Library Management System

A simple book management library application built with Node.js and Express using mock data.

## Features

- CRUD operations for books
- RESTful API design
- Mock data for testing and development
- MVC architecture
- CI/CD with GitHub Actions

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
3. Start the server:
   ```
   npm start
   ```

## Development

To run the server in development mode with nodemon:

```
npm run dev
```

## Testing

Run tests with Jest:

```
npm test
```

## Linting

Run ESLint:

```
npm run lint
```

## CI/CD

This project includes GitHub Actions workflows for Continuous Integration and Continuous Deployment:

- **CI Workflow**: Runs on push to main branch and pull requests. It installs dependencies, runs linting, and executes tests.
- **CD Workflow**: Runs on push to main branch. It installs dependencies, runs linting, executes tests, and is set up for deployment (commented out by default).

Both workflows are configured to use Node.js v22.x to match the development environment.

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
