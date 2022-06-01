import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import useContacts from '../../hooks/useContacts';
import { IContactResults, IPagination } from '../../entities/Contact';

export interface IPaginationProps {
  contacts: IContactResults;
  handleChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
  paginates: IPagination;
}

const Paginate: React.FC<IPaginationProps> = ({ contacts, handleChangePage, paginates }) => {
  const [currentPage, setCurrentPage] = useState(contacts.currentPage || 1);

  useEffect(() => {
    console.log("currentPage: ", currentPage);
  }, [currentPage]);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        margin: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      }}
    >
      <Stack
        spacing={8}
        sx={{
          margin: '3rem',
        }}
      >
        <Pagination
          count={contacts.totalPages}
          defaultPage={paginates.currentPage}
          page={paginates.currentPage}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          onChange={(event: React.ChangeEvent<unknown>, page: number) => handleChangePage(event, page) }
        />
      </Stack>
    </Grid>
  );
};

export default Paginate;
  