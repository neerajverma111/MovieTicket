// ShowDetail.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => setShow(response.data))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  const bookTicket = () => {
    // Implement the logic to open the movie booking form
    // and store show details in local storage
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      {/* Display other details as needed */}
      <button onClick={bookTicket}>Book Movie Ticket</button>
    </div>
  );
};

export default ShowDetail;
