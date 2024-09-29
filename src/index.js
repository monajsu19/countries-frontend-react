import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';

import App from './App';


// Create the root and use the new router structure
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Use `element` prop instead of `component` */}
        <Route path="/" element={<App />} />
        <Route path="/country/:countryCode" element={<CountryDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
