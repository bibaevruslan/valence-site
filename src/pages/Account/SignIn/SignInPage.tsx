import {FC} from 'react';
import SignInForm from "@/components/SignInForm/SignInForm.tsx";

import style from './SignInPage.module.css';

const SignInPage: FC = () => {
    return (
        <div className={style.page}>
            <SignInForm/>
        </div>
    );
};

export default SignInPage;