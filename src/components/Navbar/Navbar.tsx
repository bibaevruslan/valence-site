import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';


import style from './Navbar.module.css';
import AuthListItemButton from "../AuthListItemButton/AuthListItemButton.tsx";

export default function Navbar() {

  return (
    <Box className={style.navbar} component="nav" aria-label="My site">
      <List role="menubar" orientation="horizontal">
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/">
            Valence
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/publications">
            Публикации
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <AuthListItemButton/>
        </ListItem>
      </List>
    </Box>
  );
}