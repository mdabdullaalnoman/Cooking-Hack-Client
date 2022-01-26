import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import LoginInfo from './Components/LoginInfo/LoginInfo';

const App = () => {
  return (
    <div className='main-content-warp'>
      <div className='container'>
        <Header/>
        <LoginInfo />
      </div>
    </div>
  );
};

export default App;