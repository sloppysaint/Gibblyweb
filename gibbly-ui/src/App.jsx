import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settingcard';
import Upgrade from './Pages/Upgrade';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Class from './Pages/Class'
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/pages/Settingcard" element={<Settings />} />
          <Route path="/pages/Upgrade" element={<Upgrade />} />
          <Route path="/pages/Class" element={<Class />} />
          <Route path="/pages/Login" element={<Login />} />
          <Route path="/pages/Register" element={<Register />} />
          
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
