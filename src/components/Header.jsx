import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 60,
        
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
         
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="absolute">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        COVIT-19 TRACKER APP
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;
