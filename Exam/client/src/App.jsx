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
      <h1>Store Finder</h1>
      <div>
        <Link to='/'>go back home</Link>
        <Link></Link>
      </div>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/stores/new' element={<CreatePage />} />
        <Route path='/stores/:id' element={<DetailsPage />} />
        <Route path='/stores/:id/edit' element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
