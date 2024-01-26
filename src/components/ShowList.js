// ShowList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowList = ({ history }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setShows(response.data))
      .catch(error => console.error('Error fetching shows:', error));
  }, []);

  const showDetails = (showId) => {
    // Use history.push from react-router-dom
    history.push(`/show/${showId}`);
  };

  return (
    <div>
      <h1>Show List</h1>
      <ul>
        {shows.map(show => (
          <li key={show.show.id}>
            <div>
              <h3>{show.show.name}</h3>
              {/* Use Link from react-router-dom to navigate to show details */}
              <Link to={`/show/${show.show.id}`}>Show Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
