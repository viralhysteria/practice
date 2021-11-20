import React from 'react';
//import CoinbaseCommerceButton from 'react-coinbase-commerce';
//import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';

const Landing = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h3>full stack project</h3>
      <img
        alt=''
        src='https://psychedelictimes.com/wp-content/uploads/2016/02/5-MeO-DMT-molecule-vs-DMT.png'
        style={{width:'50%'}}
      />
      <br/>
      <p>
        placeholder text
      </p>
      <br/>
      <a 
        className='btn btn-primary donate-with-crypto'
        href='https://commerce.coinbase.com/checkout/0997eef9-bb72-4338-964a-7814aeff3a8e'
      >
        <span>Donate with Crypto</span>
      </a>
      <script src='https://commerce.coinbase.com/v1/checkout.js?version=201807'>
      </script>
    </div>
  );
};

export default Landing;