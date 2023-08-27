import React from 'react';

function Header({ title, date }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>Date: {date}</p>
    </div>
  );
}

export default Header;
