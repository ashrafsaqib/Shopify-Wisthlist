const express = require('express');
const { WishlistController } = require('../controllers/wishlistController');

const router = express.Router();
const wishlistController = new WishlistController();

router.post('/wishlist', wishlistController.saveWishlist.bind(wishlistController));
router.get('/wishlist/:customerId', wishlistController.getWishlist.bind(wishlistController));

function setRoutes(app) {
    app.use('/api', router);
}

module.exports = { setRoutes };