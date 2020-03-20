/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react' ;
import {connect} from 'react-redux' ;
import {chooseList , getData} from '../../store/products-store.js';
import {addItem} from '../../store/cart-store.js';

const Status = props => {
  console.log('products props' , props);

  useEffect(()=> {
    console.log('start');
    props.getData() ;
  },[]);



  //////////////////////////////////////////////////////////////////////////////////////////////////////


  return(
    <>
      <h2>{props.selector.current} List</h2>
      <h3>Please Click here To add </h3>
      {props.list.output && props.list.output.map((val , idx) => {
        return  <li key={idx} onClick={()=> props.addItem(val)}>{val}</li>;
      }) }
    </>
  );
};


//////////////////////////////////////////////////////////////////////////////////////////////////////


const mapStateToProps = state => {
  return state ;
};

const mapDispatchToProps = {chooseList , addItem , getData};



export default connect(mapStateToProps, mapDispatchToProps)(Status);