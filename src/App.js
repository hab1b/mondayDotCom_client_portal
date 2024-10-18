import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Page from './Page';
import './App.css';

function App() {
  const [pages] = useState([
    { name: 'Home', content: <p>Welcome to the Home Page</p> },
    {
      name: 'Projects',
      content: (
        <ul>
          <li>Project A - Status: In Progress</li>
          <li>Project B - Status: Completed</li>
          <li>Project C - Status: Pending</li>
        </ul>
      )
    },
    {
      name: 'Clients',
      content: (
        <ul>
          <li>Client X</li>
          <li>Client Y</li>
          <li>Client Z</li>
        </ul>
      )
    }
  ]);

  const [selectedPageIndex, setSelectedPageIndex] = useState(0);

  return (
    <div className="app">
      <Sidebar pages={pages} onSelectPage={setSelectedPageIndex} />
      <Page page={pages[selectedPageIndex]} />
    </div>
  );
}

export default App;