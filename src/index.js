import React from 'react';
import ReactDOM from 'react-dom';

import { GifExpertApp } from './components/GifExpertApp';

import './index.css';

const defaultCategories = ['Demon Slayer'];

ReactDOM.render(
  <GifExpertApp defaultCategories={defaultCategories} />,
  document.getElementById('root')
);
