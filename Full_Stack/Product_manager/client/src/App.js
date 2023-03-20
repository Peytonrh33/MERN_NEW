import React from 'react';
import  {Routes, Route, Link}  from 'react-router-dom';
import './App.css';
import Main from './views/Product_Main';
import Detail from './views/Detail';


function App() {
  return (
    <div className="App">
      <h1>Project Manager</h1>
      <Link to="/products">Dashboard</Link>
      <Routes>
        <Route element={<Main/>} path="/products" />
        <Route element={<Detail/>} path="/products/:id" />
      </Routes>
    </div>
  );
}

export default App;
