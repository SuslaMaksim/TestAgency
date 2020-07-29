import React from "react";
import {Box,Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        minHeight: '60px',
        borderTop: '1px solid #f2f2f2',
        fontFamily: 'Open sans',
    }
})



const Footer = ()=>{
const classes = useStyles()

    return(
        <Box component='div'  className={classes.footer}>
            <Typography variant='body1' > & abz.agency specially for the test task </Typography>
        </Box>
    )
}

export default Footer;