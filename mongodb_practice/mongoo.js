const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydatabase")
    .then(async () => {
        console.log("MongoDB connected successfully");
        await getItems(); // Fetch items only after successful connection
    })
    .catch(err => console.log("Database connection error:", err));

// Define Schema and Model
const ItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
});
const Item = mongoose.model("items", ItemSchema); // Ensure "items" matches your collection name

// Function to fetch and print items
async function getItems() {
    try {
        console.log("Fetching items from database...");
        const items = await Item.find();
        console.log("Fetched items:", JSON.stringify(items, null, 2)); // Pretty print
    } catch (error) {
        console.log("Error fetching items:", error);
    }
}
