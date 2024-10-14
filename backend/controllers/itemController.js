import Item from '../models/item.js';
import { errorHandler } from '../middleware/error.js';

export const createItem = async (req, res, next) => {
    console.log('POST request received');
    const { name, email, phone, description } = req.body;  

    try {
        const newItem = new Item({ name, email, phone, description }); 
        const newDeatails = await newItem.save(); 
        res.status(201).json(newDeatails);
    } catch (error) {
        console.error('Error saving item:', error);
        next(errorHandler(500, "Failed to form deatails"));
    }
}

export const getItems = async (req, res, next) => {
    try {
        const items = await Item.find(); 
        res.status(200).json(items);
    } catch (error) {
        next(errorHandler(500, "Failed to retrive details"));
    }
}
