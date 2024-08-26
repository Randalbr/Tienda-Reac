import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from "./NavBar.jsx";
import Home from "./Home.jsx";
import SobreNostros from "./SobreNostros.jsx";
import Cliente from "./Clientes.jsx";
import Contacto from "./Contacto.jsx";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactsIcon from '@mui/icons-material/Contacts';

const navegationLinks = [
  {
    title: "Inicio",
    path: "/",
    icon: <InboxIcon />,
  },
  {
    title: "Sobre Nosotros",
    path: "/SobreNostros",
    icon: <DraftsIcon />,
  },
  {
    title: "Clientes",
    path: "/Clientes",
    icon: <AccountCircleIcon />,
  },
  {
    title: "Contactenos",
    path: "/Contacto",
    icon: <ContactsIcon />,
  },
];

export default function App() {
  return (
    <>
      <Navbar navegationLinks={navegationLinks} />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/SobreNostros"
            element={<SobreNostros />}
          />
          <Route
            path="/Clientes"
            element={<Cliente />}
          />
          <Route
            path="/Contacto"
            element={<Contacto />}
          />
        </Routes>
      </Container>
    </>
  );
}