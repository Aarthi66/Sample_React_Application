import {ADD_NOTES, DELETE_ITEM} from "../constants/action-types";

export function addNotes(payload) {
    return { type: ADD_NOTES, payload }
  };

export function delItem(id) {
  return {type : DELETE_ITEM, id:id,}
}