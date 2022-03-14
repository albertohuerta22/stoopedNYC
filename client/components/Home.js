import React from 'react';
import { useSelector } from 'react-redux';
import Review from './Review';

/**
 * COMPONENT
 */
const Home = () => {
  const username = useSelector((state) => state.auth.username);

  return username ? (
    <div>
      <h1>Welcome, {username}!</h1>
      <Review />
    </div>
  ) : (
    <div>
      <h1>Welcome, Guest!</h1>
      <Review />
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
