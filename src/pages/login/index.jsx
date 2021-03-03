import { Button, CircularProgress, Container, CssBaseline, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';
import * as authReducer from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Login() {
    const classes = useStyles();
    const auth = useSelector((state) => state.auth)
    const history = useHistory()
    const { register, handleSubmit, errors, control } = useForm();
    // Primero declarar dispatcher
    const dispatch = useDispatch()
    
    const onSubmit = (data) => {
        // Llamar a la funcion del actions
        dispatch(authReducer.doLogin(data))
    }

    if (auth.authenticated.data) {
      history.push('/platos')
    }

    const loading = auth.authenticated.loading
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          {auth.authenticated.error.error && (
              <Alert severity="warning" style={{marginTop: '10px', marginButtom: '10px'}}>{auth.authenticated.error.message}</Alert>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ onChange, value }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  disabled={loading}
                  onChange={onChange}
                  value={value}
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  inputRef={register({ required: true })}
                />
              )}
            />
            {errors.email && <span>Email es requerido</span>}
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ onChange, value }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  onChange={onChange}
                  value={value}
                  disabled={loading}
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  autoFocus
                  inputRef={register({ required: true })}
                />
              )}
            />
            {errors.password && <span>Password es requerido</span>}

            <Button type="submit" 
                    fullWidth variant="contained" 
                    color="primary" 
                    disabled={loading}
                    className={classes.submit}
            >
              {loading && <CircularProgress size={14} />}
              {!loading && 'Ingresar'}
            </Button>
          </form>
        </div>
      </Container>
    );
}

export default Login