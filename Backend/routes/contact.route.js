import express from 'express';
import {sendInfo} from '../controllers/contact.controller.js';

const router = express.Router()

router.post('/', sendInfo)


export default router;
