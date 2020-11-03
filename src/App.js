
import './App.css';
import Paypal from './components/PayPal';
import { useState } from 'react';
import React from 'react';

function App() {

  const [checkout,setCheckOut] = useState(false);
  return (
    <div className="App">
      {checkout ? (
        <Paypal />
      ) : (
          <button
            onClick={() => {
              setCheckOut(true);
              console.log(checkout);
            }}
          >
            Checkout
          </button>
        )}
    </div >
  );

}

export default App;
