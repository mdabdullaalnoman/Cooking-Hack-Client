import React from 'react';
import './App.css';
import LoginInfo from './Components/LoginInfo/LoginInfo';

const App = () => {
  return (
    <div className='main-content-warp'>
      <div className='container'>
        <h1> ঘরে বসেই রান্নার মাধ্যমে আয় করুন ২০,০০০ থেকে ২৫,০০০ টাকা</h1>
        <LoginInfo />
      </div>
    </div>
  );
};

export default App;