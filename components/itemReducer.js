const initialState = {
    items : [],
    cart : []
}

export const itemReducer = (state = initialState, param) => {
    switch (param.type) {
        case  "fetchitemlist" :
        return {
            ...state,
            items: [...state.items, ...param.payload]
           }
           case  "resetitemlist" :
           return {
               ...state,
               items: param.payload
              }
        default : return state;
    }
}

export const cartReducer = (state = initialState, param) => {
    switch (param.type) {
        case  "additemlist" :
        let params = [];
        params.push(param.payload);
        return {
            ...state,
            cart: [...state.cart, ...params]
           }

        case "remove":
                return {
                    ...state,
                    cart: state.cart.filter((cart) => cart.id !== param.payload)
                }
           
        default : return state;
    }
}