export interface IContact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
  id: string;
}

class Contact implements IContact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
  id: string;

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

export default Contact;