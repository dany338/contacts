import { SAVE_CONTACT, FILL_CONTACTS, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SET_LOADING } from "../types/contact";
import { IContact, IContactResults} from "../../entities/Contact";

export interface IInitialStateProps {
  contacts: IContactResults | null,
  addOk: boolean,
  editOk: boolean,
  viewOk: boolean,
  deleteOk: boolean,
  contact: null | IContact
}

const intialState: IInitialStateProps = {
  contacts: null,
  addOk: false,
  editOk: false,
  viewOk: false,
  deleteOk: false,
  contact: null
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
        contact: null
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
        deleteOk: true,
        contacts: state.contacts?.results ? ({ ...state.contacts, results: state.contacts.results.filter((contact: IContact) => contact.id !== action.payload)}) : []
      }

    default:
      return state
  }
}
