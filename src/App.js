import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />}>
            
        </Route>
        <Route path='search' element={<SearchPage />}>
            
        </Route>
      </Routes>
    </div>
  );
}

export default App;
