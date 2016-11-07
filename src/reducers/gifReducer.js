export default function( state = [], action) {
  if(action.error) {
    return state;
  }

  switch(action.type) {
    case 'GIF_ADD_FULFILLED':
    return [action.payload];
    console.log('action.payload: ', action.payload)
    default:
    return state;
  }

}
