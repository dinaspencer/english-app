import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reflection from './components/Reflection';
import Taboo from './components/Taboo';
import Prefixes from './components/Prefixes';
import PhrasalVerbs from './components/PhrasalVerbs';
import Topics from './components/Topics';
import Questions from './components/Questions';
import Gerund from './components/Gerund';
import Expressions from './components/Expressions';
import WishHope from './components/WishHope';
import Feelings from './components/Feelings';
import FalseFriends from './components/FalseFriends';
import Confused from './components/Confused';
import Mba from './components/Mba';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path={process.env.PUBLIC_URL + '/'} element={ <App />} />
    <Route path={process.env.PUBLIC_URL + '/reflection'} element={<Reflection />} />
    <Route path={process.env.PUBLIC_URL + '/taboo'} element={<Taboo />} />
    <Route path={process.env.PUBLIC_URL + '/prefixes'} element={<Prefixes />} />
    <Route path={process.env.PUBLIC_URL + '/phrasalverbs'} element={<PhrasalVerbs />} />
    <Route path={process.env.PUBLIC_URL + '/expressions'} element={<Expressions />} />
    <Route path={process.env.PUBLIC_URL + '/topics'} element={<Topics />} />
    <Route path={process.env.PUBLIC_URL + '/questions'} element={<Questions />} />
    <Route path={process.env.PUBLIC_URL + '/gerund'} element={<Gerund />} />
    <Route path={process.env.PUBLIC_URL + '/wish-hope'} element={<WishHope />} />
    <Route path={process.env.PUBLIC_URL + '/feelings'} element={<Feelings />} />
    <Route path={process.env.PUBLIC_URL + '/falsefriends'} element={<FalseFriends />} />
    <Route path={process.env.PUBLIC_URL + '/confusedwords'} element={<Confused />} />
    <Route path={process.env.PUBLIC_URL + '/mba'} element={<Mba />} />

  </Routes>
  </BrowserRouter>

   
  
);


