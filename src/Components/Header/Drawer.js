import React, {useState} from 'react';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {Box, IconButton,List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {Apps, AssignmentInd, ContactMail, Home} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";


 let items = [
    {
        listText: 'About Me',
        listIcon: <Home/>,
        listLink: '/'
    },
    {
        listText: 'Relationships',
        listIcon: <AssignmentInd/>,
        listLink: '/resume'
    },
    {
        listText: 'Requirements',
        listIcon: <Apps/>,
        listLink: '/portfolio'
    },
    {
        listText: 'Users',
        listIcon: <ContactMail/>,
        listLink: '/contacts'
    },
     {
         listText: 'Sing Up',
         listIcon: <ContactMail/>,
         listLink: '/'
     },
]

let useStyles = makeStyles(theme =>({

    slyderContainer: {
        width: '250px',
        backgroundColor: '#511',
        height: '100%'
    },
    listItemColor: {
        color: 'tan'
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

            <Box className={classes.slyderContainer} component='div' onClick={toggleSlider("right",false)}>
                <List>
                    {items.map((item,key)=>{
                        return <ListItem  button key = {key} >
                            <ListItemIcon className={classes.listItemColor} >{item.listIcon}</ListItemIcon>
                            <ListItemText className={classes.listItemColor} primary={item.listText}/>
                        </ListItem>
                    })}
                </List>

            </Box>

        </MobileRightMenuSlider>
            </>

    )
}
export default Drawer;
