import React from 'react';

const SimpleComponent = ({ first, last, favFood }) => (
  <div>
    <h1>Hello there!</h1>
    <h2>Welcome!</h2>
    <p>First Name - {first}</p>
    <p>Last Name - {last}</p>
    <p>Favorite Food - {favFood}</p>
  </div>
);

export default SimpleComponent;