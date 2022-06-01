import { SAVE_CONTACT, FILL_CONTACTS, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SET_LOADING } from '../types/contact';
import Contact, { IContactCreate } from '../../entities/Contact';
import { getContacts, getContact, createContact, updateContact, deleteContact } from '../../services/contacts';

export const saveContact = (contact: IContactCreate) => {
  return async (dispatch: any) => {
    console.log("el contact será: ", contact);
    try {
      const response = await createContact(contact);
      console.log('🚀 ~ file: contact.ts ~ line 11 ~ return ~ response', response)
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
      const contacts: Contact[] | unknown = await getContacts(perPage, page, _sort, field, search);
      console.log('🚀 ~ file: contact.ts ~ line 29 ~ return ~ contacts obtainContacts', contacts)
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
      console.log('🚀 ~ file: contact.ts ~ line 57 ~ return ~ response', response)
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
      console.log('🚀 ~ file: contact.ts ~ line 72 ~ return ~ contact', contact)
      dispatch({
        type: DELETE_CONTACT,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
