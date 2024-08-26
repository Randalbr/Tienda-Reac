import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Contacto() {
  return (
    
    <Box sx={{width:500 ,background:'white', ml:40}}>

        <center><h1>Contacto</h1></center>
        
      <Box sx={{ display: 'flex', alignItems: 'flex-end',float:'left' }}>

        <AccountCircle sx={{ color: 'black', mr: 1, my: 0.5 }} />

        <TextField id="input-with-sx" label="Nombre" variant="standard" />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end', float:'right' }}>

        <AlternateEmailIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />

        <TextField id="input-with-sx" label="Correo Electronico" variant="standard" />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end',float:'left' }}>

        <LocalPhoneIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />

        <TextField id="input-with-sx" label="Telefono" variant="standard" />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end',float:'right' }}>

        <WhatsAppIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />

        <TextField id="input-with-sx" label="WhatsApp" variant="standard" />
      </Box>

      <Button sx={{background:'black',color:'white', m:5,ml:25}} variant="contained" endIcon={<SendIcon />}>
        Enviar
      </Button>
    </Box>
  );
  }