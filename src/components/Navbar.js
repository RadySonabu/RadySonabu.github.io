import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SimpleModal from './Modal';


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ boxShadow: 0, color: red, backgroundColor: '#000000'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Ardy Ubanos
          </Typography>
          <Button color="inherit"><SimpleModal /></Button>
          <Button color="inherit"  href='https://github.com/RadySonabu/' target='blank'><GitHubIcon/></Button>
          <Button color="inherit" href='https://www.linkedin.com/in/ardy-ubanos-5050881a9/' target='blank'><LinkedIn/></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
