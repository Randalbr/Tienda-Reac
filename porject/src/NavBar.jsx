import { AppBar, Button, Drawer,IconButton,Toolbar,Typography} from "@mui/material";
import NavListDrawer from "./NavListDrawer.jsx";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";

import { NavLink } from "react-router-dom";

export default function Navbar({ navegationLinks }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" 
      sx={{background:'black'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
           
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1}}
          >
            Camisas Urbanas
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navegationLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
       
      >
        <NavListDrawer
          navegationLinks={navegationLinks}
          component={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}