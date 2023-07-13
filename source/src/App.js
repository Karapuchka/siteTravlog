import { useState, useEffect } from 'react';

import Header from './components/header/Header.js';
import Preloader from './components/preloader/Preloader.js';

import './App.scss';

function App() {

  return (

    <div className='wrapper'>

      <Preloader />

      <div className='wrapper-container'>
        <Header />
      </div>

    </div>

  )
}

export default App;