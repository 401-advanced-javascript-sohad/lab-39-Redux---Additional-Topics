/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
let API = 'https://swapi.co/api/people' ;

let initialState = {
  category:{
    travel  : ['The Alchemist' , 'Love With a Chance of Drowning' , 'On the Road' ,'The Lost City'],
    science : ['The Feynman Lectures on Physics', 'Surely You\'re Joking', 'A Short History of Nearly Everything', 'The Greatest Show on Earth'],
    history : ['The Crusades', 'A World Lit Only' , 'Steel'],
    poetry: ['Love Poems of Lord Byron','Bright Star','The Ink Dark Moon']},
  output:[], 
};



//////////////////////////////////////////////////////////////////////////////////////////////////////

export default (state = initialState , action) => {
  let {type , payload} = action ;
  console.log('action', action);
  let category = state.category ;
  let output; 
  switch(type){

  case 'update':

    category.STARWARS = payload ;
    return {category , output};
      
  case 'choose':
    category = state.category ;
    output = state.category[payload];
    return {category,output} ;


  default :
    let empty = ['Select A Category!'];
    return state ;
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////

export const chooseList = (clicked) => {
  return {type : 'choose' , payload: clicked};
};

/////////////////////////////////////////////////////////////////////////////////////////////////////

export const updateData = (data) => {
  return {type: 'update' , payload: data}; 
};


/////////////////////////////////////////////////////////////////////////////////////////////////////


export const getData = () => async dispatch => {

  let response = await fetch(API);
  let toJson = await response.json();
  let arrOfName = [];
  toJson.results.map(val => {
    arrOfName.push(val.name);
  });
  
  dispatch(updateData(arrOfName));

};