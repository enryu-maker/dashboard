const initialState={
    access:"null",
}


export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          access: action.payload,
        };

        default:
      return state;
  }
};