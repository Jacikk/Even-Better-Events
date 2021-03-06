import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function EventAutentication() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div type="button" onClick={handleOpen}>
                <TouchAppIcon fontSize="Large" /><br></br>
                Confirmar presença em evento
      </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Digite o código de autentificação do evento:</h2>
                        <p id="transition-modal-description">
                            <TextField
                                fullWidth
                                label="Numero"
                                className={classes.textField}
                                variant="outlined"
                            /></p>
                        <Link to="/PageNotFound" style={{ textDecoration: 'none' }}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick= {handleClose} /*Adicionar carregamento da confirmação e mensagem de exito ou falha*/
                        >
                            Confirmar
                        </Button>
                        </Link>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}