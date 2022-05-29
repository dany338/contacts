import { SAVE_CONTACT, FILL_CONTACTS, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "../types/contact";
import { IContact } from "../../entities/Contact";

export interface IInitialStateProps {
  contacts: IContact[] | [],
  addOk: boolean,
  editOk: boolean,
  viewOk: boolean,
  deleteOk: boolean,
  contact: object | IContact
}

const intialState: IInitialStateProps = {
  contacts: [],
  addOk: false,
  editOk: false,
  viewOk: false,
  deleteOk: false,
  contact: {}
}

export interface IActionProps {
  type: string;
  payload: any | unknown;
}

export const contactReducer = (state = intialState, action: IActionProps) => {
  switch (action.type) {
    case SAVE_CONTACT:
      return {
        ...state,
        addOk: action.payload
      }

    case FILL_CONTACTS:
      return {
        ...state,
        addOk: false,
        editOk: false,
        deleteOk: false,
        contacts: action.payload,
        contact: {}
      }

    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      }

    case UPDATE_CONTACT:
      return {
        ...state,
        editOk: action.payload
      }

    case DELETE_CONTACT:
      return {
        ...state,
        deleteOk: action.payload
      }

    default:
      return state
  }
}
