import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='app__newsletter-imput flex__center'>
      <input type="email" placeholder='Enter your email address' />
      <button type='button' className='custom__button'>Suscribe</button>    
    </div>
  </div>
);

export default Newsletter;
