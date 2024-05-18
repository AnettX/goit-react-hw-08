import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
import { selectNameFilter } from "./selectors";

const INITIAL_STATE = {
  name: "",
  number: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter(
      (contact) =>
        contact.name?.toLowerCase().includes(filters.toLowerCase()) ||
        contact.number?.includes(filters)
    );
  }
);

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
