import style from './NotFound.module.css';
import Link from '@mui/joy/Link';

export default function NotFound() {
    return (
        <div className={style.page}>
            <Link href="/" level="h2" underline="none">
                404 Страница не найдена
            </Link>
        </div>
    );
}