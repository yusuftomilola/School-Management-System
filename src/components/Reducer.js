import React, { useReducer } from 'react';
import DashboardUsers from '../pages/DashboardUsers';

const initialState = {
  searchValue: '',
  category: '',
  filteredData: [],
  error:'',
};

// Reducer function
function Reducer(state, action) {
  switch (action.type) {
    case 'SETSEARCH':
      return {
        ...state,
        searchValue: action.payload,
      };
    case 'SETCATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    case 'FILTER_DATA':
      const filteredData = DashboardUsers.filter(
        (teacher) =>
          teacher.name.toLowerCase().includes(state.searchValue.toLowerCase()) ||
          teacher.subject.toLowerCase().includes(state.searchValue.toLowerCase())
      );
      return {
        ...state,
        filteredData,
        error: filteredData.length ===0 ? 'No record found' : ''
      };
    default:
      return state;
  }
}
