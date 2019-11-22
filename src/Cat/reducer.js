const intitalListState = {items: []}
const reducer = (state = intitalListState, action) => {
    switch (action.type) {
    case 'ADD_CAT':
        return {...state, items: state.items.concat(action.payload)}
    case 'ADD_MEOW':
        return {...state, items: state.items.map(item => item.catId === action.payload.catId ? {...item, meows: item.meows +1 } : item)};
    case 'ADD_COMMENTARY':
        return {...state, items: state.items.map(item => item.catId === action.payload.catId ? 
            {...item, comments: item.comments.concat(
                {userName: action.payload.userName, commentary: action.payload.commentary}) 
            } : item)};
    default:
        return state;
    }
  };
  
  export default reducer;