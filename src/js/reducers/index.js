import { DELETE_ITEM, ADD_NOTES } from "../constants/action-types";
const initialState = {
  notes: []
};
function rootReducer(state = initialState, action) {
  console.log(action);
  if (action.type === ADD_NOTES) {
    return Object.assign({}, state, {
      notes: state.notes.concat(action.payload)
    });
  } else if (action.type === DELETE_ITEM) {
    return Object.assign({}, state, {
      notes: [...state.notes.filter(item => item.id !== action.id)]
    });
  }
  return state;
}
export default rootReducer;
