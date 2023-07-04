import {ADD_NOTE} from '../actions/note';

const initialState = {
  notes: [],
};
const Notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: action.notes,
      };
    }
    default: {
      return state;
    }
  }
};
export default Notes;
