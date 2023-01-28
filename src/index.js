import React from 'react';
import ReactDOM from 'react-dom';
import {  Form, Navbar, NavbarBrand } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import WholeScreen from './components/wholescreen.js';
import './index.css';


ReactDOM.render(
  <WholeScreen />,
  document.getElementById('root')
);

let text_val = document.getElementById('text-area');

console.log(text_val);