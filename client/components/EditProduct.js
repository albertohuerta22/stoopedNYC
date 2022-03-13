import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { me } from '../store/auth';


function EditProduct () {
    const product = useSelector((state) => state.singleProduct);
    const { isAdmin } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(me())
    },[]);
        return isAdmin ? (
        <div id="formFormat" align="center">
            <main>
                <form>
                    <div className="row">
                        <div className="column">
                            <label className="labels" id="productName">Product Name</label>
                            <input className="inputs" type="text" id="pname" placeholder="text here" />
                        </div>
                        <div className="column">
                            <label className="labels" id="description">Description</label>
                            <input className="inputs" type="text" id="desc" placeholder="text here" />
                        </div>
                        <div className="column">
                            <label className="labels" id="location">Location</label>
                            <input className="inputs" type="text" id="location" placeholder="text here" />
                        </div>
                        <div className="column">
                            <label className="labels" id="imageUrl">Product Image URL</label>
                            <input className="inputs" type="text" id="iurl" placeholder="link here" />
                        </div>
                    </div>
                </form>
                <button type="submit" style={{backgroundColor: '#30D5C8'}}>Save Changes</button>
            </main>
        </div>
        ) : ( <>{ null }</> )
    }


export default EditProduct;