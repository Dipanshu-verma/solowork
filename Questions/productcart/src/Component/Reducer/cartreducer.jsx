export const cartReducer=(state, action) =>{
    const { type, payload } = action;

    switch (type) {
      case "CART_LOADING":
        return {
          ...state,
          loading: true,
        };
      case "CART_SUCCESS":
        return {
          ...state,
          loading: false,
          data: payload,
        };
      case "CART_FAIL":
        return {
          ...state,
          loading: false,
          error: payload,
        };
        default: return state;
    }
  }
