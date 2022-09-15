import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import RoutesStore from './routes/routes';

function App() {
  return (
    <div className="App">
      <Routes>
        {Object.values(RoutesStore).map((route) => (
          <Route path={route.path} element={<route.component/>} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
