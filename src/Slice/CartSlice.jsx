import { createSlice } from '@reduxjs/toolkit';
import all_product from  '../Components/Assets/all_product';

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: getDefaultCart(),
        products: all_product
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems[action.payload]++;
        },
        removeFromCart: (state, action) => {
            if (state.cartItems[action.payload] > 0) {
                state.cartItems[action.payload]--;
            }
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const getTotalCartAmount = (state) => {
    let totalAmount = 0;
    for (const item in state.cart.cartItems) {
        if (state.cart.cartItems[item] > 0) {
            let itemInfo = state.cart.products.find(product => product.id === Number(item));
            totalAmount += itemInfo.new_price * state.cart.cartItems[item];
        }
    }
    return totalAmount;
};

export const getTotalCartItems = (state) => {
    let totalItems = 0;
    for (const item in state.cart.cartItems) {
        if (state.cart.cartItems[item] > 0) {
            totalItems += state.cart.cartItems[item];
        }
    }
    return totalItems;
};

export default cartSlice.reducer;
