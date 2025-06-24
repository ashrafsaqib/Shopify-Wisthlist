export interface WishlistItem {
    product_id: number;
    customer_id: number;
    store_id: number;
}

export interface CustomerWishlist {
    customer_id: number;
    items: WishlistItem[];
}