import React from 'react';
import Link from "next/link";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

export interface IButtonsProps {
  pages: any;
  isLogged: boolean;
  close: (e: any) => void;
  handleOpenUserMenu: (e: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  anchorElUser: null | HTMLElement;
  classPath: (path: string) => string;
}

const Buttons: React.FC<IButtonsProps> = ({ pages, isLogged, close, handleOpenUserMenu, handleCloseUserMenu, anchorElUser, classPath }) => (
  <Box sx={{ flexGrow: 0 }}>
    <Tooltip title="Open settings">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
    </Tooltip>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {pages.filter((item: any) => item.isLogged === isLogged).map((page: any, index: any) => (
        <Link href={page.route} key={`buttons-${index}`} className={classPath(page.route)}>
          <MenuItem onClick={close}>
            <Typography textAlign="center">{page.name}</Typography>
          </MenuItem>
        </Link>
      ))}
    </Menu>
  </Box>
);

export default Buttons;
