import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
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
  const [ paginates, setPaginates ] = useState<IPagination>(initialPagination);
  const dispatch = useDispatch();
  // const [ , setDidMount] = useState<boolean>(false);
  const { contact: { contacts, loading, deleteOk } }: any = useSelector((state) => state);

  const fetchContacts = async (perPage = 10, page = 1, _sort = null, field = null, search = null) => {
    console.log('🚀 ~ file: contact.ts ~ line 29 ~ return ~ fetchContacts', perPage, page, _sort, field, search);
    await dispatch<any | unknown>(obtainContacts(perPage, page, _sort, field, search));
  };


  const handleChangePage = async (event: React.ChangeEvent<unknown>, page: number) => {
    await dispatch<any | unknown>(obtainContacts(10, page, null, null, null));
    setPaginates((prevPagination: IPagination) => ({ ...prevPagination, currentPage: page }));
  }

  // useEffect(() => {
  //   if (deleteOk) {
  //     Router.push("/");
  //   }
  // }, [deleteOk]);

  // useEffectOnce(() => {
  //   // setDidMount(true);
  //   fetchContacts();
  //   return () => {
  //     // setDidMount(false);
  //   };
  // }, []);

  // do this:
  useEffectOnce( ()=> {
    console.log('my effect is running');
    fetchContacts();
    return () => console.log('my effect is destroying');
  });

  return [ contacts, loading, handleChangePage, paginates ];
};

export default useContacts;