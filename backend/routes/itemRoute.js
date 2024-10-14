import express from 'express'; 
import {createItem, getItems} from '../controllers/itemController.js'; // Importing all exported functions from itemController

const router = express.Router();  

// Route to create new items
router.post('/items', createItem); 

// Route to get all items
router.get('/items', getItems);  

export default router;
