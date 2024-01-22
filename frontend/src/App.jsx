import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CreateEval from './pages/createEval';
import ShowEval from './pages/showEval';
import EditEval from './pages/editEval';
import DeleteEval from './pages/deleteEval';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/evaluations/create' element={<CreateEval />} />
      <Route path='/evaluations/details/:id' element={<ShowEval />} />
      <Route path='/evaluations/edit/:id' element={<EditEval />} />
      <Route path='/evaluations/delete/:id' element={<DeleteEval />} />
    </Routes>
  );
};

export default App;