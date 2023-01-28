import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Corrections extends React.Component {
    render() {
      return (
        <div className='col-sm-4' id='accordion'>
          Suggestions
          <div className='p-2'>
            <div className='card bg-white shadow'>
              <div className='card-header'>
                <a className='btn' data-bs-toggle='collapse' href='#collapseOne'>
                  misspelled word #1
                </a>
              </div>
              <div id='collapseOne' className='collapse' data-bs-parent='#accordion'>
                <div className='card-body'>
                  comlete -> complete
                </div>
              </div>
            </div>
            <div className='card bg-white shadow'>
              <div className='card-header'>
                <a className='btn' data-bs-toggle='collapse' href='#collapseTwo'>
                  misspelled word #2
                </a>
              </div>
              <div id='collapseTwo' className='collapse' data-bs-parent='#accordion'>
                <div className='card-body'>
                  lw -> law
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default Corrections;