import React, {useState} from 'react';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {Box, IconButton,List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {Apps, AssignmentInd, ContactMail, Home} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import logo from '../../img/logo.svg';
import Divider from "@material-ui/core/Divider";


 let items = [
    {
        listText: 'About Me',
        listIcon: <Home/>,
        listLink: '/'
    },
    {
        listText: 'Relationships',

    },
    {
        listText: 'Requirements',

    },
    {
        listText: 'Users',

    },
     {
         listText: 'Sing Up',
         listIcon: <ContactMail/>,
         listLink: '/'
     },
     {
         listText: 'How it works',

     },
     {
         listText: 'Partnership',

     },
     {
         listText: 'Help',

     },
     {
         listText: 'Leave testimonial',

     },
     {
         listText: 'Contact us',

     },
     {
         listText: 'Articles',

     },
     {
         listText: 'Our news',

     },
     {
         listText: 'Testimonial',

     },
     {
         listText: 'Licenses',

     },
     {
         listText: 'Privacy Policy',

     }

]

let useStyles = makeStyles(theme =>({

    slyderContainer: {
        width: '250px',
        backgroundColor: '#FFF',
        height: '100%'
    },
    listItem: {
        '&:nth-child(5n+5)':{
            borderBottom: '1px solid  rgba(0, 0, 0, 0.12)'
        },
        '&:last-child':{
            borderBottom: 'none'
        }
    },
    listItemColor: {
        color: 'black',
        fontFamily: 'Open-sans',
    },
    iconButton: {
        padding: '0px',
        color: '#001a66',
        '& .MuiSvgIcon-root': {
            fontSize: '30px',
            display: 'flex',
            justifyContent: 'flex-end'

        }
    },
    logoContainer: {
        display: 'flex',
        margin: "15px",
        [theme.breakpoints.down('sm')]: {
        }
    },

}))


const Drawer = (props)=>{
    let classes = useStyles();
    const[state,setState] = useState({right:false});

    const toggleSlider = ((slider,open) => ()=> {
        setState({...state,[slider]:open})
    })

    return(
        <>
        <IconButton className={classes.iconButton} onClick={toggleSlider('right',true)}>
            <MenuIcon />
        </IconButton>
        <MobileRightMenuSlider open={state.right} anchor='right' onClose={toggleSlider('right',false)}>
            <Box component='div' className={classes.logoContainer}>
                <img src={logo} alt="logo"/>
            </Box>
            <Divider/>

            <Box className={classes.slyderContainer} component='div' onClick={toggleSlider("right",false)}>
                <List>
                    {items.map((item,key)=>{
                        return <ListItem  button key = {key} className = {classes.listItem}>
                            <ListItemText className={classes.listItemColor}  primary={item.listText}/>
                        </ListItem>
                    })}
                </List>

            </Box>

        </MobileRightMenuSlider>
            </>

    )
}
export default Drawer;
