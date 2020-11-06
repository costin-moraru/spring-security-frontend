import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from 'react-i18next';
// import CssBaseline from '@material-ui/core/CssBaseline';
import LeftSideNav from './LeftSideNav';
import { setAuthentication, selectAuth } from '../reducers/authenticationReducer';
import LoginDialog from './account/LoginDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function MainToolBar(props) {
    const classes = useStyles();
    const authentication = useSelector(selectAuth);
    const dispatch = useDispatch();
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    // const [isAuthenticated, setAuth] = useState(false);

    const openLoginDialog = () => {
        setLoginDialogOpen(true);
    };

    const loginSuccess = (data) => {
        console.log(data);
    }

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Trans>Repair Mangement</Trans>
                    </Typography>
                    <Button color="inherit" onClick={openLoginDialog}>Login</Button>
                </Toolbar>
            </AppBar>
            { authentication &&
                <LeftSideNav />
            }
            <LoginDialog dialogState={loginDialogOpen} setDialogState={setLoginDialogOpen} onLoginSuccess={loginSuccess}/>
        </div>

    )
}

export default MainToolBar;


// onClick={() => {
//     dispatch(setAuthentication(!authentication));
// }}
