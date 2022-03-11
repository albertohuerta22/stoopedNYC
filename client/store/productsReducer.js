import axios from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS';

const getProducts = (products) => ({ type: GET_PRODUCTS, products });

const
