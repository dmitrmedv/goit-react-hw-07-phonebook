const { createSlice } = require('@reduxjs/toolkit');

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.filter(({ name }) => name === action.payload.name).length) {
          alert(`${action.payload.name} is already in contacts.`);
          return;
        }
        state.push(action.payload);
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
