import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import Layout from './Layout';
import Home from './Components/Home/Home';



const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home/>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={Router} />
  </StrictMode>
);
