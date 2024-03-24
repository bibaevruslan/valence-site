import { FC } from 'react'
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

import style from './Footer.module.css';
import ListSubheader from "@mui/joy/ListSubheader";

const Footer: FC = () => {
    return(
        <div className={style.footer}>
            <List>
                <ListSubheader sticky>Проект Книжные памятники</ListSubheader>
                <ListItem>Реестр книжных памятников</ListItem>
                <ListItem>Новости проекта</ListItem>
                <ListItem>Профессионалам</ListItem>
                <ListItem>Глоссарий</ListItem>
                <ListItem>О проекте</ListItem>
            </List>
            <List>
                <ListSubheader sticky>Проект Книжные памятники</ListSubheader>
                <ListItem>Реестр книжных памятников</ListItem>
                <ListItem>Новости проекта</ListItem>
                <ListItem>Профессионалам</ListItem>
                <ListItem>Глоссарий</ListItem>
                <ListItem>О проекте</ListItem>
            </List>
            <List>
                <ListSubheader sticky>Тематические разделы</ListSubheader>
                <ListItem>Славянские кириллические книги</ListItem>
                <ListItem>Книгоиздание России</ListItem>
                <ListItem>Специальные разделы</ListItem>
                <ListItem>Изобразительные материалы</ListItem>
            </List>
        </div>
    );
   
};

export default Footer;