const { connectToDatabase } = require('../db/mysql');

class WishlistController {
    constructor() {
        this.db = connectToDatabase();
    }

    async saveWishlist(req, res) {
        const { product_id, customer_id, store_id } = req.body;

        try {
            const query = 'INSERT INTO wishlists (product_id, customer_id, store_id) VALUES (?, ?, ?)';
            await this.db.query(query, [product_id, customer_id, store_id]);
            res.status(201).json({ message: 'Wishlist item saved successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error saving wishlist item', error });
        }
    }

    async getWishlist(req, res) {
        const { customerId } = req.params;

        try {
            const query = 'SELECT * FROM wishlists WHERE customer_id = ?';
            console.log(query, [customerId]); // Debugging line to check the query
            const [results] = await this.db.query(query, [customerId]);
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving wishlist', error });
        }
    }
}

module.exports = { WishlistController };