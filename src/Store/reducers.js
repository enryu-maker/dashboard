const initialState={
    access:null,
    animal:[]
}


export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          access: action.payload,
        };
      case 'ANIMAL':
        return {
          ...state,
          animal: action.payload,
        };

        default:
      return state;
  }
};