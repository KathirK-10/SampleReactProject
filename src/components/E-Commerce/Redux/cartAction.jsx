export const addtocart = (product)=>{
    return{
        type:"ADD_TO_CART",
        payload:product,
    }
}
export const removeFromCart = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: id,
    }
};
export const increaseQty = (id) => {

    return {
        type: "INCREASE_QTY",
        payload: id,
    };
};

export const decreaseQty = (id) => {

    return {
        type: "DECREASE_QTY",
        payload: id,
    }
};