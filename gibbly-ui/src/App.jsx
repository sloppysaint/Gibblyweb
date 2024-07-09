import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settingcard';
import Upgrade from './Pages/Upgrade';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/pages/Settingcard" element={<Settings />} />
          <Route path="/pages/Upgrade" element={<Upgrade />} />
          
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
