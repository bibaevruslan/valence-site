import * as React from 'react';
import {ReactElement, ReactNode} from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';

interface BasicModalProps {
    open: boolean,
    setOpen: () => boolean,
    children?: ReactNode,

}

const BasicModal = ({open, setOpen, children}: BasicModalProps) => {
    return (
        <React.Fragment>
            <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                Open modal
            </Button>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                {children}
            </Modal>
        </React.Fragment>
    );
}

export default BasicModal;