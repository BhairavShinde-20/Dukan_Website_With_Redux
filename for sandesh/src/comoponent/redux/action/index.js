// for add item to cart
export const addCart = ()=>{
    return{
        type:"ADDITEM",
        payload:"product"
    }
}

// for delete item from cart
export const delCart = ()=>{
    return{
        type:"DELITEM",
        payload:"product"
    }
}