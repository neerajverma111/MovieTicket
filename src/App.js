// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';
import MovieBookingForm from './components/MovieBookingForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/show/:id" element={<ShowDetail />} />
        <Route path="/book-ticket" element={<MovieBookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;
