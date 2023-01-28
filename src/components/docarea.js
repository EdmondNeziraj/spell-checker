import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class DocArea extends React.Component {
    render() {
      return (
        <div className='col-sm-8'>
          Document
          <div className='p-2'>
            <textarea className='form-control shadow p-3' rows='15' cols='col-md-2' id='text-area'>Write here...</textarea>
          </div>
          <button type='button' className='btn btn-info'>
            Submit
          </button>
          {/* <div> */}
            {/* Or upload file
          </div>
          <div className='p-2'>
            <div class="input-group mb-3 shadow">
              <label class="input-group-text" for="inputGroupFile01">Upload</label>
              <input type="file" class="form-control" id="inputGroupFile01" />
            </div>
          </div> */}
      </div>
      )
    }
  }

  export default DocArea;