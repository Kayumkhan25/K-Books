import Book from "../model/bookModel.js";

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        
        // 200: success
        res.status(200).json(book);
    } catch (error) {
        console.log("error:", error);
        // 500: internal server error
        res.status(500).json(error);
    }
}