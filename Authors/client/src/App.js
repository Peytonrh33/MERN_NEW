import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import CreatePage from './views/create';
import DashboardPage from './views/dashboard';
import DetailsPage from './views/details';
import UpdatePage from './views/update';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <div>
        <Link to='/authors'>Dashboard</Link>
        <Link to='/authors/new'>Create Page</Link>
      </div>
      <Routes>
        <Route path='/authors' element={<DashboardPage />} />
        <Route path='/authors/new' element={<CreatePage />} />
        <Route path='/authors/:id' element={<DetailsPage />} />
        <Route path='/authors/:id/edit' element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
