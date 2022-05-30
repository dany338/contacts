import React from 'react';
import Box from '@mui/material/Box';

export interface IErrorInputProps {
  text: string;
}

const ErrorInput: React.FC<IErrorInputProps> = ({ text }) => <Box component="span" sx={{ fontSize: "14px", color: "red" }}>{text}</Box>;

export default ErrorInput;
