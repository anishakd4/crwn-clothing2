export const addItemToCart = (cartItems, cartItemToadd) => {
    const existingCartItem = cartItems.find((cartItem) => (cartItem.id ===  cartItemToadd.id));
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === existingCartItem.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }

    return [...cartItems, {...cartItemToadd, quantity: 1}];
};