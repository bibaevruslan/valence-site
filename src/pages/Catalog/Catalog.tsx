import style from './Catalog.module.css';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState, useEffect, ChangeEvent} from "react";
import Tooltip from '@mui/joy/Tooltip';
import Input from "@mui/joy/Input";

import {IconButton} from "@mui/joy";
import {Search} from "@mui/icons-material";

interface Publication {
    title: string,
    author: string,
    description: string,
    category: string
}

export default function Catalog() {

    const [publications, setPublications] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        setPublications([])
    }, [searchTerm]);

    const results: Publication[] = searchPublication(searchTerm, publications);

    return (
        <Grid container spacing={2} sx={{flexGrow: 1}}>
            <Grid xs={6}>
                <Input sx={{ '--Input-decoratorChildHeight': '45px' }}
                       placeholder="Поиск"
                       value={searchTerm}
                       onChange={handleChange}
                       required
                       endDecorator={
                    <Tooltip title="Вы можете указать название, автора, описание или категорию публикации" variant="solid">
                        <IconButton
                            variant="solid"
                            color="neutral"
                            type="submit"
                            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                        >
                            <Search/>
                        </IconButton>
                    </Tooltip>
                }/>
            </Grid>
        </Grid>
    );
}

function searchPublication(searchTerm: string, publications: Publication[]): Publication[] {
    return !searchTerm
        ? publications
        : publications.filter(publication =>
            publication.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            publication.author.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            publication.description.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            publication.category.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
}