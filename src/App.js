import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './App.css';

const App = () => {
  return (
    <div className='main-content-warp'>
      <div className='container'>
        <h1> ঘরে বসেই রান্নার মাধ্যমে আয় করুন ২০,০০০ থেকে ২৫,০০০ টাকা</h1>

        <Popup trigger={<button className="button"> Open Modal </button>}
          modal
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Modal Title </div>
              <div className="content">
                <div class="login-warp">
                  <input type="text" name="" id="" /><br />
                  <input type="password" />
                  <button>login</button>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>



    </div>
  );
};

export default App;