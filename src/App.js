import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/home/Home';
import { ScrumBoard } from './Components/scrumBoard/ScrumBoard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='scrumboard' element={<ScrumBoard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
