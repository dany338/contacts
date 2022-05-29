import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { obtainContacts } from '../../redux/actions/contact';
import useValidation from '../../hooks/useValidation';
import { validateSearch } from '../../utils/validations';
import ErrorInput from '../../components/ErrorInput';

export interface ISearchProps {}

const intialState = {
  query: ''
};

const Search: React.FC<ISearchProps> = () => {
  const [valores, errors, handleChange, handleSubmit] = useValidation(
    intialState,
    validateSearch,
    () => onSearchContact()
  );

  const onSearchContact = async () => {
    obtainContacts(10, 1, null, 'firstName_contains', valores.query);
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <Stack spacing={2} direction="row">
        <TextField
          id="query"
          name='query'
          label="Search by contacts"
          variant="standard"
          onChange={handleChange}
          value={valores.query}
        />
        {errors.query && <ErrorInput text={errors.query} />}
        {/* <Button variant="text" className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </Button> */}
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={() => handleSubmit()}
        >
          <SearchIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Search;

// export async function getServerSideProps(context: any) {
//   const { params } = context;
//   console.log("el parametro es: ", params);
//   const contacts = await obtainContacts(10, 1, null, 'firstName_contains', null);

//   return {
//     props: {
//       contacts,
//     },
//   };

// }