import React from 'react';
import ReactDOM from 'react-dom';
import TextForm from './textform';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class WholeScreen extends React.Component {
  render() {
    return (
      <div className='container'>
        <TextForm />
      </div>
    )
  }

}

export default WholeScreen;