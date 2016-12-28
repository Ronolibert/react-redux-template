import { render } from 'react-dom';
import React from 'react';
import './stylesheets/base.scss';

const Homepage = () => (
  <div>
    hello world
  </div>
)

render(<Homepage /> , document.getElementById('app'));
