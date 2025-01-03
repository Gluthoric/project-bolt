import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, Camera, ClipboardList, Target } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0">
      <div className="p-4">
        <NavLink to="/" className="flex items-center space-x-2 mb-8">
          <Home size={24} />
          <span>Home</span>
        </NavLink>
        
        <nav className="space-y-4">
          <NavLink to="/browse" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
            <Grid size={20} />
            <span>Browse</span>
          </NavLink>
          
          <NavLink to="/collection" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
            <ClipboardList size={20} />
            <span>Collection</span>
          </NavLink>
          
          <NavLink to="/scanner" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
            <Camera size={20} />
            <span>Scanner</span>
          </NavLink>
          
          <NavLink to="/goals" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
            <Target size={20} />
            <span>Goals (In Development)</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}