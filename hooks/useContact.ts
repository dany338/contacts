import { useState } from 'react';
import Contact from '../entities/Contact';

const useContact = (contact: Contact) => {
  const [myContact, setMyContact] = useState(contact);

  return [ myContact, setMyContact ];
};

export default useContact;