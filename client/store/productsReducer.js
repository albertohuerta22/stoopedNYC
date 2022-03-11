import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';

const setProducts = (products) => ({ type: SET_PRODUCTS, products });

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      // const token = localStorage.getItem('token');
      const { data: products } = await axios.get('/api/products', {
        // headers: { Authorization: token },
      });
      dispatch(setProducts(products));
    } catch (error) {
      console.error(error);
    }
  };
};

const productsReducer = (products = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;

    default:
      return products;
  }
};

export default productsReducer;
