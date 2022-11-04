import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Taboo from './components/Taboo';
import Prefixes from './components/Prefixes';
import PhrasalVerbs from './components/PhrasalVerbs';
import Topics from './components/Topics';
import Questions from './components/Questions';
import Gerund from './components/Gerund';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <App />} />
    <Route path="/taboo" element={<Taboo />} />
    <Route path="/prefixes" element={<Prefixes />} />
    <Route path="/phrasalverbs" element={<PhrasalVerbs />} />
    <Route path="/topics" element={<Topics />} />
    <Route path="/questions" element={<Questions />} />
    <Route path="/gerund" element={<Gerund />} />
  </Routes>
  </BrowserRouter>

   
  
);


