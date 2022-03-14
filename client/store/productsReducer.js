import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT'

const setProducts = (products) => ({ type: SET_PRODUCTS, products });
export const productCreate = (product) => ({ type: CREATE_PRODUCT, product });
export const productDelete = (product) => ({ type: DELETE_PRODUCT, product });

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
export const createProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/products', product);
      dispatch(productCreate(data));
    } catch (err){
      console.log(err)
    }
  };
}
export const deleteProduct = (product) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/products/${product.id}`, product);
      dispatch(productDelete(product));
    } catch (err){
      console.log(err)
    }
  };
}

const productsReducer = (products = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
      case CREATE_PRODUCT:
        return [...products, action.product]
      case DELETE_PRODUCT:
        return products.filter((product) => product.id !== action.product.id)
    default:
      return products;
  }
};

export default productsReducer;
