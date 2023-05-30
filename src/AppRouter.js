import './App.css';
import * as React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Welcome from './Welcome';
import Game from './Game';



function AppRouter() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/' element={<Welcome />} />            
            <Route path='/game' element={<Game />} />
            
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );

}

export default AppRouter;