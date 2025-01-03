import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Browse from './pages/Browse';
import Collection from './pages/Collection';
import Scanner from './pages/Scanner';
import SetDetails from './pages/SetDetails';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/sets/:setCode" element={<SetDetails />} />
          <Route path="*" element={<Browse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;