import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from "next/router";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export interface INavegacionProps {
  pages: any;
  isLogged: boolean;
}

const Navegacion: React.FC<INavegacionProps> = ({ pages, isLogged }) => {
  const [localPath, setLocalPath] = useState<string | unknown>("");

  const classPath = (path: string) => {
    return `nav-item ${localPath === path ? "active" : ""}`;
  };

  useEffect(() => {
    setLocalPath(Router?.router?.asPath);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.filter((item: any) => item.isLogged === isLogged).map((page: any, index: any) => (
        <Link href={page.route} key={index}>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page.name}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default Navegacion;
