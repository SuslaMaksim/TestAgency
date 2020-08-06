import React from 'react'
import {AppBar,Toolbar,Box,ListItem,List,ListItemText,IconButton} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../img/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
    appBar:{
        background: '#fff'
    },
    toolBar: {
        justifyContent: 'space-between',
        minHeight: '55px',
        paddingLeft: '30px',
        paddingRight: '30px',
        [theme.breakpoints.down('sm')]: {
            minHeight: '60px',
            alignItems: 'center'
        }
    },

    logoContainer: {
        display: 'flex',
        marginBottom: "6px",
        [theme.breakpoints.down('sm')]: {
            marginBottom: "0px"
        }
    },
    listContainer:{
        display: 'flex',
        flexDirection: 'row',
        color: 'black',
        marginBottom: "5px",
        [theme.breakpoints.down('sm')]: {
           display: 'none'
        },

    },
    containerDrawer: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    listItem:{
        width: 'auto',
        cursor: 'pointer',
        marginLeft: '27px',
        padding: '0px',
    },
    listItemText: {
        '& .MuiTypography-root':{
            fontSize: '14px',
            fontFamily: 'Open Sans',
            transition: 'all .3s linear',
            '&:hover':{
                color: '#ef5b4c'
            }

        }
    }

}));


const Header = (props)=>{

    const classes = useStyles();
    return(
        <div>

            <AppBar position='static' className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <Box component='div' className={classes.logoContainer}>
                        <img src={logo} alt="logo"/>
                    </Box>
                    <Box className={classes.containerDrawer}>
                      <Drawer/>
                    </Box>


                    <List component='nav' className={classes.listContainer}>
                        <ListItem className={classes.listItem}>
                            <ListItemText className={classes.listItemText}  primary='About me'/>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <ListItemText className={classes.listItemText} primary='Relationships'/>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <ListItemText className={classes.listItemText} primary='Requirements'/>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <ListItemText className={classes.listItemText} primary='Users'/>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <ListItemText className={classes.listItemText} primary='Sign Up'/>
                        </ListItem>
                    </List>

                </Toolbar>
            </AppBar>

        </div>

    )
}

export default Header;