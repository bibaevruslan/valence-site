import {FC} from 'react';
import SignUpForm from "@/components/SignUpForm/SignUpForm.tsx";

import style from './SignUpPage.module.css';

const SignUpPage: FC = () => {
    return (
        <div className={style.page}>
            <SignUpForm/>
        </div>

    );
};

export default SignUpPage;