import api from './api';
import Contact, { IContactCreate } from '../entities/Contact';
import { CONTACTS } from '../constants/backend';

export const getContacts = (perPage: number, page: number, _sort: string | null, field: string | null, search: string | null): Promise<Contact[] | unknown> => new Promise( async (resolve, reject) => {
  try {
    let params = { perPage, page };
    if (_sort) {
      params = {
        ...params,
        [_sort]: _sort
      };
    }
    if (field) {
      params = {
        ...params,
        [`_${field}_contains`]: search
      };
    }
    const response = await api.get(CONTACTS, { params });
    if (response.status === 200) {
      const newContacts = response.data.map((contact: Contact) => new Contact(contact));
      resolve(newContacts);
    }
  } catch (error) {
    reject(error);
  }
});

export const getContact = (id: string): Promise<Contact | unknown> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.get(`${CONTACTS}/${id}`);
    if (response.status === 200) {
      const contact = response.data;
      resolve(contact);
    }
  } catch (error) {
    reject(error);
  }
});

export const createContact = (data: IContactCreate): Promise<Contact | unknown> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.post(CONTACTS, data);
    if (response.status === 201 || response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const updateContact = (data: Contact): Promise<Contact | unknown> => new Promise( async (resolve, reject) => {
  try {
    const { _id, id, createdAt, updatedAt, __v, ...contact } = data;
    const response = await api.put(`${CONTACTS}/${id}`, contact);
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const deleteContact = (id: string): Promise<Contact | unknown> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.delete(`${CONTACTS}/${id}`);
    if (response.status === 200) {
      const contact = response.data;
      resolve(contact);
    }
  } catch (error) {
    reject(error);
  }
});