import { Avatar, Button, CircularProgress, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout'
import {Edit, Delete} from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../redux/actions/users'
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

const FORM_MODAL = {
    nombres: '',
    apellidos: '',
    fechaNac: '',
    urlFoto: ''
}

const TYPE_MODAL_EDIT = 'edit'
const TYPE_MODAL_ADD = 'add'

function Usuarios() {
    const [openModal, setOpenModal] = useState(false);
    const [typeForm, setTypeForm] =  useState(null)
    const [formModal, setFormModal] = useState(FORM_MODAL)

    const state = useSelector((state) => state.usuarios)
    const classes = useStyles();

    const dispatch = useDispatch()

    const getClientes = () => {
        dispatch(userActions.getUsers())
    }

    useEffect(() => {
        getClientes()
    }, [])

    const onDelete = (data) => {
        const idUser = data.id
        dispatch(userActions.deleteUsers(idUser, state))
    }

    const onOpenModalUser = () => {
        setTypeForm(TYPE_MODAL_ADD)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setFormModal(FORM_MODAL)
    }

    const onEdit = (data) => {
        setTypeForm(TYPE_MODAL_EDIT)
        
        setFormModal(data)
        setOpenModal(true)

    }

    const onUpdateInput = (val, id) => {
        const newValue = val.target.value
        setFormModal((state) => {
            return {
                ...state,
                [id]: newValue
            }
        })
    }

    const OnSubmitFormModal = () => {

        if (typeForm === TYPE_MODAL_ADD) {
            dispatch(userActions.addNewUser(formModal, state))
        }else{
            dispatch(userActions.editUser(formModal, state))
        }
        handleCloseModal()
    }



    return (
        <Layout>
            <Grid item xs={12} md={12}>
                <Typography variant="h4" gutterBottom>
                    Lista de Clientes
                </Typography>
                <Button variant="contained" 
                        color="primary" 
                        disableElevation
                        onClick={onOpenModalUser}>
                    Agregar Cliente
                </Button>
                <div className={classes.demo}>
                    <List dense={false}>
                        {!state.usuarios.data && <CircularProgress color="inherit" />}
                        {state.usuarios.data && state.usuarios.data.map((data, index) => (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar src='https://material-ui.com/static/images/avatar/1.jpg' />
                                </ListItemAvatar>
                                <ListItemText
                                    primary= {`${data.nombres} ${data.apellidos}`}
                                    secondary={data.fechaNac}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit"  onClick={() => onEdit(data)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => onDelete(data)}>
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Grid>
            <Dialog open={openModal} maxWidth="xs" onClose={handleCloseModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    {typeForm === TYPE_MODAL_ADD ? 'Agregar': 'Editar'} Cliente
                </DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        onChange={(val) => onUpdateInput(val, 'nombres')}
                        value={formModal.nombres}
                        name="nombres"
                        id="nombres"
                        margin="dense"
                        label="Nombres"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        required
                        onChange={(val) => onUpdateInput(val, 'apellidos')}
                        value={formModal.apellidos}
                        name="apellidos"
                        id="apellidos"
                        margin="dense"
                        label="Apellidos"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        required
                        onChange={(val) => onUpdateInput(val, 'fechaNac')}
                        value={formModal.fechaNac}
                        name="fechaNac"
                        id="fechaNac"
                        margin="dense"
                        label="Fecha de Nacimiento"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={OnSubmitFormModal} variant="contained" color="primary">
                        Agregar
                    </Button>
                </DialogActions>
            </Dialog>
        </Layout>
    )
}

export default Usuarios