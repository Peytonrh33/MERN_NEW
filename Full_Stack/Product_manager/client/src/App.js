import React from 'react';
import  {Routes, Route, Link}  from 'react-router-dom';
import './App.css';
import Main from './views/Product_Main';
import Detail from './views/Detail';
import Update from './views/Update';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Link to="/products">Dashboard</Link>
      <Routes>
        <Route element={<Main/>} path="/products" />
        <Route element={<Detail/>} path="/products/:id" />
        <Route element={<Update />} path="/products/:id/edit"/>
      </Routes>
    </div>
  );
}

export default App;
