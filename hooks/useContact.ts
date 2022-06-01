import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../entities/Contact';
import { obtainContact } from '../redux/actions/contact';
import useEffectOnce from './useEffectOnce';

const useContact = (id: string) => {
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState<boolean>(false);
  const { contact: { contact } }: any = useSelector((state) => state);
  const fetchContact = async () => {
    setLoading(true);
    await dispatch<any>(obtainContact(id));
    setLoading(false);
  };

  useEffectOnce(() => {
    fetchContact();
    return () => console.log('my effect is destroying');
  });

  return [ contact, loading ];
};

export default useContact;