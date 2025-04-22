// Import mock data
let books = require("../data/books");

// Get all books
exports.getAllBooks = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// Get a single book by ID
exports.getBookById = (req, res) => {
  try {
    const book = books.find((book) => book.id === req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        error: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// Create a new book
exports.createBook = (req, res) => {
  try {
    const { title, author, isbn, publishedYear, genre, description, quantity } =
      req.body;

    // Basic validation
    if (!title || !author || !isbn || !publishedYear || !genre) {
      return res.status(400).json({
        success: false,
        error:
          "Please provide all required fields: title, author, isbn, publishedYear, genre",
      });
    }

    // Create new book
    const newBook = {
      id: (books.length + 1).toString(),
      title,
      author,
      isbn,
      publishedYear,
      genre,
      description: description || "",
      quantity: quantity || 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    books.push(newBook);

    res.status(201).json({
      success: true,
      data: newBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// Update a book
exports.updateBook = (req, res) => {
  try {
    const bookIndex = books.findIndex((book) => book.id === req.params.id);

    if (bookIndex === -1) {
      return res.status(404).json({
        success: false,
        error: "Book not found",
      });
    }

    // Update book
    const updatedBook = {
      ...books[bookIndex],
      ...req.body,
      updatedAt: new Date().toISOString(),
    };

    books[bookIndex] = updatedBook;

    res.status(200).json({
      success: true,
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// Delete a book
exports.deleteBook = (req, res) => {
  try {
    const bookIndex = books.findIndex((book) => book.id === req.params.id);

    if (bookIndex === -1) {
      return res.status(404).json({
        success: false,
        error: "Book not found",
      });
    }

    // Remove book from array
    books = books.filter((book) => book.id !== req.params.id);

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
