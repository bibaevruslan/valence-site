import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

import { useNavigate } from "react-router-dom";
import FormHelperText from '@mui/joy/FormHelperText';

import InfoOutlined from '@mui/icons-material/InfoOutlined';
import {FormLabel, IconButton} from "@mui/joy";
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod'

import {useForm, SubmitHandler} from "react-hook-form"
import {FC, useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

import style from './SignInForm.module.css';

interface SignInFormData {
    login: string
    password: string
}

const loginFormSchema = z
    .object({
        login: z.string()
            .min(4, {message: 'Минимальное количество символов 4'})
            .max(32, {message: 'Максимальное количество символов 32'}),
        password: z.string().min(4).max(20)
    })
    .required()

const SignInForm: FC = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<SignInFormData>({resolver: zodResolver(loginFormSchema)});

    const onSubmit: SubmitHandler<SignInFormData> = (data: SignInFormData) => {
        alert(JSON.stringify(data));
        navigate('/');
    };

    const [showPassword, setShowPassword] = useState<boolean>();

    const onHandleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onHandleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
            <form
                id={style.signInForm}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Stack spacing={1}>
                    <Typography level="h4" textAlign="center">Вход в учётную запись</Typography>
                    <FormLabel>Логин</FormLabel>
                    <Input {...register("login")} placeholder="Введите логин" required/>
                    {errors.login && <div>
                        <FormHelperText>
                            <InfoOutlined/>
                            {errors.login.message}
                        </FormHelperText>
                    </div>}
                    <FormLabel>Пароль</FormLabel>

                    <Input {...register("password")}
                           type={showPassword ? 'text' : 'password'}
                           placeholder="Введите пароль"
                           endDecorator={
                               <IconButton
                                   aria-label="toggle password visibility"
                                   onClick={onHandleClickShowPassword}
                                   onMouseDown={onHandleMouseDownPassword}
                               >
                                   {showPassword ? (
                                       <VisibilityOff fontSize="small"/>
                                   ) : (
                                       <Visibility fontSize="small"/>
                                   )}
                               </IconButton>
                           }
                           required
                    />
                    {errors.password && <div>
                        <FormHelperText>
                            <InfoOutlined/>
                            {errors.password.message}
                        </FormHelperText>
                    </div>}
                    <Button color="primary" type="submit">Войти</Button>
                    <Typography>
                        У вас нет учётной записи? &nbsp;
                        <Link href="/accounts/signUp">Создайте её</Link>
                    </Typography>
                </Stack>
            </form>
    );
}

export default SignInForm;