import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import DocArea from './docarea.js'
import Corrections from './corrections.js'

class TextForm extends React.Component {
    render() {
      return (
        <div className='row'>
          <DocArea />
          <Corrections/>
        </div>
      );
    }
}

export default TextForm;