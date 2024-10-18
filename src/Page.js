import React, { useState, useEffect } from 'react';
import { fetchProjects } from './api';  // Import the real API call

const Page = ({ page }) => {
  const [filter, setFilter] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (page.name === 'Projects') {
      // Fetch real projects from monday.com API
      fetchProjects().then(data => {
        const projectItems = data.length > 0 ? data[0].items : [];
        setProjects(projectItems);
      });
    }
  }, [page.name]);

  if (page.name === 'Projects') {
    const filteredProjects = projects.filter(project =>
      project.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="page-content">
        <h2>{page.name}</h2>
        <input
          type="text"
          placeholder="Filter projects"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <ul>
          {filteredProjects.map((project, index) => (
            <li key={index}>
              {project.name} - Status: {
                project.column_values.find(col => col.title === 'Status')?.text
              }
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="page-content">
      <h2>{page.name}</h2>
      {page.content}
    </div>
  );
};

export default Page;