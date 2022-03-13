import axios from "axios";
const GOT_SINGLE_PRODUCT = "GOT_SINGLE_PRODUCT";

const gotSingleProduct = (product) => {
  return {
    type: GOT_SINGLE_PRODUCT,
    product,
  };
};

export const getSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(gotSingleProduct(data));
    } catch (error) {
      console.log("fetchSingleProduct error: ", error);
    }
  };
};

const initialState = {};
export default function SingleProductReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_SINGLE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}