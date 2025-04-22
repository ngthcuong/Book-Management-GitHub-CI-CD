const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('../routes/bookRoutes');

// Create a test app
const app = express();
app.use(bodyParser.json());
app.use('/api/books', bookRoutes);

describe('Book API', () => {
  // Test GET /api/books
  describe('GET /api/books', () => {
    it('should return all books', async () => {
      const res = await request(app).get('/api/books');
      expect(res.statusCode).toEqual(200);
      expect(res.body.success).toBeTruthy();
      expect(Array.isArray(res.body.data)).toBeTruthy();
    });
  });

  // Test GET /api/books/:id
  describe('GET /api/books/:id', () => {
    it('should return a book if valid id is provided', async () => {
      const res = await request(app).get('/api/books/1');
      expect(res.statusCode).toEqual(200);
      expect(res.body.success).toBeTruthy();
      expect(res.body.data.id).toEqual('1');
    });

    it('should return 404 if invalid id is provided', async () => {
      const res = await request(app).get('/api/books/999');
      expect(res.statusCode).toEqual(404);
      expect(res.body.success).toBeFalsy();
    });
  });

  // Test POST /api/books
  describe('POST /api/books', () => {
    it('should create a new book', async () => {
      const newBook = {
        title: 'Test Book',
        author: 'Test Author',
        isbn: '1234567890',
        publishedYear: 2023,
        genre: 'Test',
        description: 'Test description',
        quantity: 5
      };

      const res = await request(app)
        .post('/api/books')
        .send(newBook);
      
      expect(res.statusCode).toEqual(201);
      expect(res.body.success).toBeTruthy();
      expect(res.body.data.title).toEqual(newBook.title);
    });

    it('should return 400 if required fields are missing', async () => {
      const invalidBook = {
        title: 'Test Book'
      };

      const res = await request(app)
        .post('/api/books')
        .send(invalidBook);
      
      expect(res.statusCode).toEqual(400);
      expect(res.body.success).toBeFalsy();
    });
  });
});
