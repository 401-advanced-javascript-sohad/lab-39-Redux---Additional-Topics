/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux' ;
import {BrowserRouter} from 'react-router-dom';
import store from './store/index.js';
import App from './app';



function Main() {

  return(

    <>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </>

  );
  
}

// ====> method to ===> destination //
ReactDOM.render(<Main />, document.getElementById('root'));

