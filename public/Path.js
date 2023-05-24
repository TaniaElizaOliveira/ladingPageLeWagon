import './App.css';
import * as React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login';
import FiveList from './FiveList';



function Path() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/chooseFinalist' element={<FiveList />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );

}

export default Path;