import { SAVE_CONTACT, FILL_CONTACTS, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SET_LOADING } from '../types/contact';
import Contact, { IContactCreate, IContactResults } from '../../entities/Contact';
import { getContacts, getContact, createContact, updateContact, deleteContact } from '../../services/contacts';

export const saveContact = (contact: IContactCreate) => {
  return async (dispatch: any) => {
    try {
      const response = await createContact(contact);
      dispatch({
        type: SAVE_CONTACT,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtainContacts = (perPage: number, page: number, _sort: string | null, field: string | null, search: string | null) => {
  return async (dispatch: any) => {
    try {
      const contacts: IContactResults | unknown = await getContacts(perPage, page, _sort, field, search);
      dispatch({
        type: FILL_CONTACTS,
        payload: contacts,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtainContact = (id: string) => {
  return async (dispatch: any) => {
    try {
      const contact: Contact | unknown = await getContact(id);
      dispatch({
        type: GET_CONTACT,
        payload: contact,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editContact = (contact: Contact) => {
  return async (dispatch: any) => {
    try {
      const response: Contact | unknown = await updateContact(contact);
      dispatch({
        type: UPDATE_CONTACT,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const eraseContact = (id: string) => {
  return async (dispatch: any) => {
    try {
      const contact: Contact | unknown = await deleteContact(id);
      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
