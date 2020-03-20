/* eslint-disable no-case-declarations */


let initialState = {
  categories: ['travel' , 'science','history','poetry'],
  current : '',
};
  
  
//////////////////////////////////////////////////////////////////////////////////////////////////////


export default (state = initialState , action) => {
  
  let {type , payload} = action;
  
  switch(type){
  
  case 'change':
    let current = payload; 
    let categories = state.categories;
    return {categories , current};
  
  default:

    return state ;
  }
  
};
  
  
export const changeSelected = selected  => {
  return { type: 'change' , payload: selected}; 
};