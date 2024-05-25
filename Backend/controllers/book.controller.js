import Book from '../models/books.model.js'

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json({
            data: books, 
            message:"Books are fetched successfully!"
        })
    } catch (error) {
        res.status(500).json({
           
            message:`There are some issue to fetch the books!
            ERROR: ${error}` 
        })
    }
}