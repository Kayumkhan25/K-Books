import Book from "../model/bookModel.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books
        res.status(200).json(books); // Return books in JSON format
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            message: "There was an error fetching books", // More descriptive message
            error: error.message,
        });
    }
};
