export const ADD_NOTE = 'ADD_NOTE';
export const addNote = notes => {
  return {
    type: ADD_NOTE,
    notes,
  };
};
