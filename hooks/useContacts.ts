import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { IPagination }  from '../entities/Contact';
import { obtainContacts } from '../redux/actions/contact';
import useEffectOnce from './useEffectOnce';

const initialPagination = {
  count: 0,
  perPage: 10,
  currentPage: 1,
  totalPages: 0,
};

const useContacts = () => {
  const router = useRouter();
  const [ paginates, setPaginates ] = useState<IPagination>(initialPagination);
  const [ loading, setLoading ] = useState<boolean>(false);
  const dispatch = useDispatch();
  // const [ , setDidMount] = useState<boolean>(false);
  const { contact: { contacts, deleteOk } }: any = useSelector((state) => state);

  const fetchContacts = async (perPage = 10, page = 1, _sort = null, field = null, search = null) => {
    setLoading(true);
    await dispatch<any | unknown>(obtainContacts(perPage, page, _sort, field, search));
    setLoading(false);
  };


  const handleChangePage = async (event: React.ChangeEvent<unknown>, page: number) => {
    setLoading(true);
    await dispatch<any | unknown>(obtainContacts(10, page, null, null, null));
    setPaginates((prevPagination: IPagination) => ({ ...prevPagination, currentPage: page }));
    setLoading(false);
  };

  // do this:
  useEffectOnce( ()=> {
    fetchContacts();
    return () => console.log('my effect is destroying');
  });

  // useEffect(() => {
  //   if (deleteOk) {
  //     router.replace("/");
  //   }
  // }, [deleteOk, contacts]);

  return [ contacts, loading, handleChangePage, paginates, deleteOk ];
};

export default useContacts;