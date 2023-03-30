export const ADD_ARRAY = 'ADD_ARRAY';

export interface AddArrayAction {
  type: typeof ADD_ARRAY;
  payload: string[];
}

export const addArray = (array: string[]): AddArrayAction => {
  return {
    type: ADD_ARRAY,
    payload: array
  };
};