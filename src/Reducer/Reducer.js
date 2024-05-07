const initialState = {
  cartData: [],
};

const cartDataReducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      return {
        cartData: [...state.cartData, action.payload],
      };

      break;

    case "remove_from_cart":
      return {
        ...state,
        cartData: state.cartData.filter((item) => item.id !== action.payload),
      };

      break;

    default:
      break;
  }
};

export { cartDataReducer, initialState };

