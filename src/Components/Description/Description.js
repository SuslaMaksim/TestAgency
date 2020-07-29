import React from "react";
import {Box,Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import img from '../../img/banner-photo.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    boxContainer: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(' + img + ')',
        minHeight: '600px',
        padding: '1px 30px'
    },
    boxDescription: {
        color: '#fff',
        marginTop: '106px',
        maxWidth: '530px',
    },
    devPosition: {
        textTransform: 'uppercase',
        fontFamily: 'Open Sans',
        lineHeight: '54px',
        fontSize: '50px',
        marginBottom: '25px',
        letterSpacing: '-0.6px'
    },
    body1: {
        fontFamily: 'Open Sans, sans-serif',
        marginBottom: '34px',
        fontStyle: 'normal'
    },
    btn: {
        backgroundColor: '#ef5b4c',
        color: 'white',
        textTransform: 'none',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '16px',
        width: '210px',
        padding: '5px 0 5px',
        '&:hover': {
            background: '#ef5b4c',
        }



    }

}));


const Description = ()=>{
    const classes = useStyles();


    return(
        <div  className={classes.boxContainer}  >
            <div  className={classes.boxDescription}>
                <Typography variant="h3" className={classes.devPosition} > Test assignment for frontend developer position</Typography>
                <Typography variant="body1" className={classes.body1}>We kindly remind you that your test assignment should be submitted as a link to
                    github/bitbucket repositiry.Please be patient,we consider and respond every application that meets mimimum requirements.
                    We look forward to your submission.Good luck! The photo has to scale in the banner area on the different screens
                </Typography>
                <Button  className={classes.btn} >Sing up now</Button>
            </div>
        </div>
    )
}

export default Description;