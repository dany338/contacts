export interface IContact {
  _id: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string | null;
}

export interface IContactCreate {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

class Contact implements IContact {
  _id: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string | null;

  constructor(contact: IContact) {
    this._id = contact._id;
    this.firstName = contact.firstName;
    this.lastName = contact.lastName;
    this.email = contact.email;
    this.phone = contact.phone;
    this.createdAt = contact.createdAt;
    this.updatedAt = contact.updatedAt;
    this.__v = contact.__v;
    this.id = contact.id;
  }
}

export interface IContactResults {
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  results: Contact;
}

export interface IPagination {
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
}

export default Contact;