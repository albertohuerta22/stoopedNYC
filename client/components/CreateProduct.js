import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { me } from '../store/auth';
import { createProduct } from '../store/productsReducer';
import useForm from './utils/useForm';
import { useHistory } from 'react-router-dom';

function CreateProduct() {
  //const product = useSelector((state) => state.singleProduct);
  const { isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let history = useHistory();
  const [values, handleChange] = useForm();

  const create = (e) => {
    e.preventDefault();
    dispatch(createProduct(values));
    history.push('/products');
  };
  return (
    <div id="formFormat" align="center">
      <main>
        <form onSubmit={create}>
          <div className="row">
            <div className="column">
              <label className="labels" id="productName">
                Product Name
              </label>
              <input
                name="name"
                value={values.name || ''}
                onChange={handleChange}
                className="inputs"
                type="text"
                id="pname"
                placeholder="text here"
              />
            </div>
            <div className="column">
              <label className="labels" id="description">
                Description
              </label>
              <input
                name="description"
                value={values.description || ''}
                onChange={handleChange}
                className="inputs"
                type="text"
                id="desc"
                placeholder="text here"
              />
            </div>
            <div className="column">
              <label className="labels" id="location">
                location
              </label>
              <input
                name="location"
                value={values.location || ''}
                onChange={handleChange}
                className="inputs"
                type="text"
                id="location"
                placeholder="text here"
              />
            </div>
            <div className="column">
              <label className="labels" id="lat">
                latitude
              </label>
              <input
                name="lat"
                value={values.lat || ''}
                onChange={handleChange}
                className="inputs"
                type="text"
                id="lat"
                placeholder="text here"
              />
            </div>
            <div className="column">
              <label className="labels" id="lng">
                longitude
              </label>
              <input
                name="lng"
                value={values.lng || ''}
                onChange={handleChange}
                className="inputs"
                type="text"
                id="lng"
                placeholder="text here"
              />
            </div>
            <div className="column">
              <label className="labels" id="imageUrl">
                Product Image URL
              </label>
              <input
                name="imageUrl"
                value={values.imageUrl || ''}
                onChange={handleChange}
                className="inputs"
                type="text"
                id="iurl"
                placeholder="link here"
              />
            </div>
          </div>
          <button style={{ backgroundColor: '#30D5C8' }}>Create Product</button>
        </form>
      </main>
    </div>
  );
}

export default CreateProduct;
