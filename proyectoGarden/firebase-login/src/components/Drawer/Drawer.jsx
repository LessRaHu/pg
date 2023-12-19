import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { SwipeableDrawer } from "@mui/material";


const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MainDrawer({ open, handleDrawerClose }) {
  const theme = useTheme();
  const navigate = useNavigate();

  function logout() {
    return auth.signOut();
  }

  return (
    <SwipeableDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "linear-gradient(45deg, #000000 30%, #393941 90%)",
          color: "white",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          transition: "width 0.5s ease-in-out",
          // Agregar propiedades para la transición y efectos visuales
          "&.MuiDrawer-paperAnchorLeft": {
            borderRight: "none",
            borderTopRightRadius: "none",
            borderBottomRightRadius: "none",
          },
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >

      <DrawerHeader>
  <IconButton
    onClick={handleDrawerClose}
    sx={{ color: "white" }}
  >
    <MenuIcon />
  </IconButton>
</DrawerHeader>
      <Divider />
      <List>
        <ListItem key={"Home"} disablePadding onClick={() => navigate("/home")}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>

        <ListItem
          key={"Reports"}
          disablePadding
          onClick={() => navigate("/reportes")}
        >
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Reports"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"Integrantes"} disablePadding onClick={() => navigate("/integrantes")}>
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Members"} />
          </ListItemButton>
        </ListItem>

        {/* Agrega más elementos ListItem con sus respectivos iconos y textos */}
        
        <ListItem key={"Logout"} disablePadding onClick={logout}>
          <ListItemButton>
            <ListItemIcon>
              <ExitToAppIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
      </SwipeableDrawer>
  );
}
