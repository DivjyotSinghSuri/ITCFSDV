import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Registration from './component/Registration';
import Dashboard from './component/Dashboard';
import FinalLayout from './component/FinalLayout';


function App() {
  return (
    <> {/* React Fragment */}
      <BrowserRouter>
        <Routes>
          {/* Define the route and its component */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/finallayout" element={<FinalLayout/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;