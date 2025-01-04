import React from 'react';
import { createRoot } from 'react-dom/client';
import "./styles/mian.css";
import { UserApp } from './UserApp';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserApp />
  </React.StrictMode>,
);


 
