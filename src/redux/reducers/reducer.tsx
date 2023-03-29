import { ADD_ARRAY, AddArrayAction } from '../actions/actions';

const initialState: MyState = {
  myArray: []
};

export const myReducer = (state = initialState, action: AddArrayAction): MyState => {
  switch (action.type) {
    case ADD_ARRAY:
      return {
        ...state,
        myArray: [...state.myArray, ...action.payload]
      };
    default:
      return state;
  }
};