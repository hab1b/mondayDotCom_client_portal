import React from 'react';

const Sidebar = ({ pages, onSelectPage }) => {
  return (
    <div className="sidebar">
      <h2>Client Portal</h2>
      <ul>
        {pages.map((page, index) => (
          <li key={index} onClick={() => onSelectPage(index)}>
            {page.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;