import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";
// ------state
const initialState = {
  basketNumbers: 0,
};
// ------state
export default (state = initialState, action) => {
  //
  // this is to cover the type of action i am going to receive
  //   and the action i am going to pass is : ADD_PRODUCT_BASKET
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      return {
        basketNumbers: this.basketNumbers + 1,
      };

    default:
      return state;
  }
};
