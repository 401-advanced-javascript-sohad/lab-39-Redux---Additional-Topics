/* eslint-disable no-unused-vars */
import React from 'react' ;
import {connect} from 'react-redux' ;
import {changeSelected} from '../../store/categories-store.js';
import {chooseList} from '../../store/products-store.js';



////////////////////////////////////////////////////////////////////////////////////////////////////////

const status = props => {
  console.log('props.', props);
  return(
    <>

      <h2>My Cart({props.items.inCart.length})</h2>

      <h2> Current Cart {props.current.current} </h2>
      
      {      props.current.categories.map( (val , idx) => {
        return  <button key={idx} onClick={()=> {props.changeSelected(val);
          props.chooseList(val);}}> {val} </button>;
      })
      }      </>
  );
};


///////////////////////////////////////////////////////////////////////////////////////////////////

const mapStateToProps = state =>{
  return {current: state.selector , items: state.cart};
};


const mapDespatchToProps = {changeSelected,chooseList} ;


export default connect(mapStateToProps,mapDespatchToProps)(status);