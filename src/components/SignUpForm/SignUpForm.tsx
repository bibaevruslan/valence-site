import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from '@mui/joy/Link';


import {FC, useState} from "react";
import {z} from "zod";
import {FormLabel} from "@mui/joy";
import FormHelperText from "@mui/joy/FormHelperText";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import {IconButton} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

import style from './SignUpForm.module.css';

const registerFormSchema = z
    .object({
        firstName: z.string().min(1, {message: 'Строка должна содержать не менее 2 символов'}),
        lastName: z.string().min(1),
        fatherName: z.string().optional(),

        login: z.string().min(1)
            .min(6, {message: 'Поле должно содержать не менее 6 символов'})
            .max(64, {message: 'Поле должно содержать не более 64 символов'}),
        password: z.string().min(4).max(20),
        passwordConfirm: z.string()
    }).refine((values) => values.password === values.passwordConfirm, {
        message: "Пароли не совпадают",
        path: ["passwordConfirm"],
    });

type RegisterFormSchemaType = z.infer<typeof registerFormSchema>;


const SignUpForm: FC = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<RegisterFormSchemaType>({resolver: zodResolver(registerFormSchema)});

    const onSubmit: SubmitHandler<RegisterFormSchemaType> = (data: RegisterFormSchemaType) => {
        alert(JSON.stringify(data));
    };

    const [showPassword, setShowPassword] = useState<boolean>();

    const onHandleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onHandleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [value, setValue] = useState('');
    const minLength = 12;

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <form
            id={style.signUpForm}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Stack spacing={1} sx={{
                '--hue': Math.min(value.length * 10, 120),
            }}>
                <Typography level="h4" textAlign="center">Создайте учётную запись</Typography>
                <FormLabel>Имя</FormLabel>
                <Input {...register("firstName")} placeholder="Введите имя" required/>
                {errors.firstName && <div>
                    <FormHelperText>
                        <InfoOutlined/>
                        {errors.firstName.message}
                    </FormHelperText>
                </div>}
                <FormLabel>Фамилия</FormLabel>
                <Input {...register("lastName")} placeholder="Введите фамилию" required/>
                {errors.lastName && <div>
                    <FormHelperText>
                        <InfoOutlined/>
                        {errors.lastName.message}
                    </FormHelperText>
                </div>}
                <FormLabel>Отчество</FormLabel>
                <Input {...register("fatherName")} placeholder="Введите отчество"/>
                {errors.fatherName && <div>
                    <FormHelperText>
                        <InfoOutlined/>
                        {errors.fatherName.message}
                    </FormHelperText>
                </div>}
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
                       value={value}
                       onChange={onChangePassword}
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
                       required/>
                <LinearProgress
                    determinate
                    size="sm"
                    value={Math.min((value.length * 100) / minLength, 100)}
                    sx={{
                        backgroundColor: 'background.level3',
                        color: 'hsl(var(--hue) 80% 40%)',
                    }}
                />
                <Typography
                    level="body-xs"
                    sx={{alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)'}}
                >
                    {value.length < 3 && 'Очень слабый'}
                    {value.length >= 3 && value.length < 6 && 'Слабый'}
                    {value.length >= 6 && value.length < 10 && 'Сильный'}
                    {value.length >= 10 && 'Очень сильный'}
                </Typography>
                {errors.password && <div>
                    <FormHelperText>
                        <InfoOutlined/>
                        {errors.password.message}
                    </FormHelperText>
                </div>}
                <FormLabel>Подтверждение пароля</FormLabel>
                <Input {...register("passwordConfirm")} placeholder="Повторите пароль"
                       type={showPassword ? 'text' : 'password'}
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
                {errors.passwordConfirm && <div>
                    <FormHelperText>
                        <InfoOutlined/>
                        {errors.passwordConfirm.message}
                    </FormHelperText>
                </div>}
                <Button color="primary" type="submit">Зарегистрироваться</Button>
                <Typography>
                    У вас уже есть учётная запись? &nbsp;
                    <Link href="/accounts/signIn">Войти</Link>
                </Typography>
            </Stack>
        </form>
    );
};

export default SignUpForm;
