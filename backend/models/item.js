import mongoose from "mongoose"; // Importing mongoose

// Defining the item schema
const itemSchema = new mongoose.Schema({
    name: {
        type: String, // The name field
        required: true, // This field is required
    }, 
    email: {
        type: String, // The email field
        required: true, // This field is required
        unique: true, // Ensures that the email is unique across documents
    }, 
    phone: {
        type: String, // The phone field
        required: true, // This field is required
    }, 
    description: {
        type: String, // The description field
        required: true, // This field is required
    },
});

// Creating the Item model based on the schema
const Item = mongoose.model('Item', itemSchema); 

// Exporting the model for use in other files
export default Item;
