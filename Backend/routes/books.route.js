import express from 'express';
import { getBooks } from '../controllers/book.controller.js';
const router = express.Router()




// all router are define here..

router.get('/', getBooks)




export default router;