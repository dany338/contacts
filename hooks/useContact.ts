import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../entities/Contact';
import { obtainContact } from '../redux/actions/contact';
import useEffectOnce from './useEffectOnce';

const useContact = (id: string) => {
  const dispatch = useDispatch();
  // const [myContact, setMyContact] = useState(contact);
  const { contact: { contact } }: any = useSelector((state) => state);
  const fetchContact = async () => {
    console.log('🚀 ~ file: contact.ts ~ line 29 ~ return ~ fetchContact', id);
    await dispatch<any>(obtainContact(id));
  };

  useEffectOnce(() => {
    console.log('my effect is running');
    fetchContact();
    return () => console.log('my effect is destroying');
  });

  return [ contact ];
};

export default useContact;