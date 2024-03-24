import {FC} from 'react';
import {useAuth} from "@/services/AuthContext.tsx";
import ListItemButton from "@mui/joy/ListItemButton";
import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import SignInForm from "@/components/SignInForm/SignInForm.tsx";

const AutListItemButton: FC = () => {

    const {userIsAuthenticated} = useAuth()
    const [openLoginForm, setOpenLoginForm] = React.useState<boolean>(false);
    const [openRegistrationForm, setOpenRegistrationForm] = React.useState<boolean>(false);


    return (
        <>
            {
                userIsAuthenticated() ? (
                    <ListItemButton
                        role="menuitem"
                        component="a"
                        href="/accounts"
                        aria-label="Profile"
                    >
                        Личный кабинет
                    </ListItemButton>
                ) : (
                    <ListItemButton
                        role="menuitem"
                        component="a"
                        // onClick={() => setOpenLoginForm(true)}
                        href="/accounts/signIn"
                        aria-label="Profile"
                    >
                        Войти
                    </ListItemButton>
                )}
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={openLoginForm}
                onClose={() => setOpenLoginForm(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <ModalDialog>
                    <DialogTitle>Create new project</DialogTitle>
                    <DialogContent>Fill in the information of the project.</DialogContent>
                    <SignInForm/>
                </ModalDialog>
            </Modal>
        </>
    )
};

export default AutListItemButton;