/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';

const status = props => {

  return(
    
    <>
      <h2>My Cart({props.items.inCart.length})</h2>
      {props.items.inCart.map((val , idx)=>{
        return <li key={idx}>{val}</li>;
      })}
    </>
  );
};



const mapStateToProps = state => {
  return{items: state.cart};
};


export default connect(mapStateToProps)(status);

