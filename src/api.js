import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQxNTExMzIxOSwiYWFpIjoxMSwidWlkIjo2NjU0NTY1NSwiaWFkIjoiMjAyNC0wOS0yNFQyMDo0MTowMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6NDk0NjY0LCJyZ24iOiJ1c2UxIn0.yNKbNpkd_-KBnXY4RDpYBc2O_fdnMJQiDw-cuhvR3HY';  // Replace with your actual API key
const BASE_URL = 'https://api.monday.com/v2';

export function fetchProjects() {
  return axios({
    url: BASE_URL,
    method: 'post',
    headers: {
      Authorization: API_KEY,
    },
    data: {
      query: `
        {
          boards {
            id
            name
            items {
              name
              column_values {
                title
                text
              }
            }
          }
        }
      `,
    },
  })
    .then(response => response.data.data.boards)
    .catch(error => {
      console.error('Error fetching data from monday.com:', error);
      return [];
    });
}