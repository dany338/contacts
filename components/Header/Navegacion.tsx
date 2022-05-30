import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export interface INavegacionProps {
  pages: any;
  isLogged: boolean;
  classPath: (path: string) => string;
}

const Navegacion: React.FC<INavegacionProps> = ({ pages, isLogged, classPath }) => (
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {pages.filter((item: any) => item.isLogged === isLogged).map((page: any, index: any) => (
      <Link href={page.route} key={`navigation-${index}`} className={classPath(page.route)}>
        <Button
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page.name}
        </Button>
      </Link>
    ))}
  </Box>
);

export default Navegacion;
