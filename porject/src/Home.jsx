import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Ropa } from './Ropa.jsx';

const images = [
  {
    url: 'https://www.nostress.com.co/wp-content/uploads/2023/03/oversize.jpg',
    title: 'Oversize',
    width: '33%',
  },
  {
    url: '/src/img/aa48a1267b05a435b845a8658993b26a.jpg',
    title: 'Pantalones',
    width: '33%',
  },
  {
    url: 'https://media.gq.com.mx/photos/610bfd280a160134ff7d011d/16:9/w_2560%2Cc_limit/Accesorios%252030.jpg',
    title: 'Accesorios',
    width: '33%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));


export default function Home() {
    return (
      <div>
        <center><h1>Bienvenido</h1></center>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    <main>
      <hr />
        <Ropa nombre='Camisa Oversize Negro Ilustracion Talla L' precio='102.000' img='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1_VdkXxktk4PcqGOchWSVAg2tTmoIoN1uhGJQMruAVkv3kqT-hKOuBCFlYHD8z3Xsvz03jB5HaPl026d5JtP8ZdC761uEj5u_DGXeOk1lyKTLgDIdgmr3Fw&usqp=CAE'></Ropa>
        <Ropa nombre='Camisa Oversize Verde Talla M' precio='50.000' img='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ3pwfn_Wk3hHQaVbOwEvYB2CWXtn7lszOSzyj8NjNB2j45sDL1T-01GHqG95oiN6eBT4o0ASzbfcwxBZYQIwFHpAmQTT0X2iM5hAs0svKSiC3Xn2ICeemrjw&usqp=CAE'></Ropa>
        <Ropa nombre='Camisa Oversize GAIA Talla XL' precio='50.000' img='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQs6s6J_DfSvQmijjPdSl93PDjq_IS6HRDMlIVYRyZ7B4fS-GhLlPevy_nlKrUZrktRFuRMhVCYvel65ksHA4TGpHsGkRCyR08FT293vNmlRn113J6AAl5Hcw&usqp=CAE'></Ropa>
        <Ropa nombre='Pantalon Cargo Talla XL' precio='50.000' img='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSXeV9pOf6V5tbn-OzcztP1YX3hX8xiRjp5l8ObAbTnID5FhwQXhNPEPwhWf1YRT2QXUtRrUoR2mgzcEzJdz2-F2xdLAGW61YJpLp4-ITUK--ZMHmDT8CAe&usqp=CAE'></Ropa>
        <Ropa nombre='Pantalon Cargo Talla XL' precio='50.000' img='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbZzaJL3NDdzVkAo7pjrC27CWhZQQAFACfReD7RX2jDVDyh6CY2rS43CTXZSUO1nPhJ349GGPS2DOwd14bNxKadFr3eBdI6aRO5yxQGlxjyaWV0QpO5hx5&usqp=CAE'></Ropa>
        <Ropa nombre='Pantalon Cargo Talla XL' precio='50.000' img='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQCWGyqHKx4DBFl-QGsykMIKb6uhfjEXBOIYlisLTvZZt_obBP1B05WHKwcqSG-fPFXKtQ_x9zbLSsY5_DitGzf-BXLJwIFBL8tYjroerO6&usqp=CAE'></Ropa>
        <Ropa nombre='Cadena Tipo Militar Para Hombre' precio='50.000' img='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRUmowYQJlT4mwr5hmsnH8rEicCj_WybK4RQ73xu6UnkKJT6n6zk6GfkC3hBNkZh2uelQR-vP8if3XurU9Nav45r0TWqU3dOod0ncSdG7rq&usqp=CAE'></Ropa>
        <Ropa nombre='Cadena Gruesa Para Hombre' precio='50.000' img='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTohfqaiuIPnAFejYusmDaqqcpEPbUC5efLX216OhNKtk2P1bl0dzl9d3401UrT2pyWQFtm1BoWzbehlbc7XUH9IRLzZ6zuoMmAN_1fvffmS-DiierFYjG0&usqp=CAE'></Ropa>
        <Ropa nombre='Pulsera Wrist Para Hombre' precio='50.000' img='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBc3cb06rlNvHySSZGID5lC2_DocjGi2qafI9xJBtRy4lnjnTtvXjKC6Kth5yGq-B1UNvE7biATmy7mPRcRSEm1Hg48zfokCEE6el4UUevaCg-Lh6vlHHU&usqp=CAE'></Ropa>
    </main>
      </div>
    );
  }
  