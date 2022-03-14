import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = ({ handleClick, isLoggedIn }) => {
  const dispatch = useDispatch();
  const { username, isAdmin } = useSelector((state) => state.auth);

  return (
    <div className="nav">
      <div className="title">
        <h1>Stooped NYC</h1>
      </div>
      <nav>
        {!isLoggedIn ? (
          <div>
            {/* The navbar will show these links before you log in */}

            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Search</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        ) : isAdmin ? (
          <div>
            <h2>hello Admin {username}</h2>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/admin/users">Users</Link>
            <Link to="/products">Search</Link>
            <Link to="/createproduct">New Item</Link>

            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            <h2>Hello, {username}</h2>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Search</Link>
            <Link to="/createproduct">New Item</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
