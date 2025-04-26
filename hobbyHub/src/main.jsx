import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../pages/Layout.jsx';
import App from './App.jsx';
import Detail from '../components/Detail.jsx';
import Create from '../components/Create.jsx';
import Edit from '../components/Edit.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route path='/create' element={<Create />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/edit/:id' element= {<Edit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
