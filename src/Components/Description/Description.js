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
        padding: '1px 30px',
        [theme.breakpoints.down("sm")]:{
            minHeight: '500px',
        },
        [theme.breakpoints.down("xs")]:{
            minHeight: '500px',
            padding: '1px 20px',
        }
    },
    boxDescription: {
        color: '#fff',
        marginTop: '106px',
        maxWidth: '530px',
        [theme.breakpoints.down("sm")]:{
            marginTop: '58px',
            maxWidth: '430px'
        },
        [theme.breakpoints.down("xs")]:{
            margin: '68px 0px',
            maxWidth: '100%'
        }
    },
    devPosition: {
        textTransform: 'uppercase',
        fontFamily: 'Open Sans',
        lineHeight: '54px',
        fontSize: '50px',
        marginBottom: '25px',
        letterSpacing: '-0.6px',
        [theme.breakpoints.down("sm")]:{
            lineHeight: '44px',
            fontSize: '40px',
            marginBottom: '28px',
        },
        [theme.breakpoints.down("xs")]:{
            lineHeight: '34px',
            fontSize: '30px',
            letterSpacing: '0px',
            marginBottom: '20px',
            textAlign: 'center'
        }
    },
    body1: {
        fontFamily: 'Open Sans, sans-serif',
        marginBottom: '34px',
        fontStyle: 'normal',
        [theme.breakpoints.down("sm")]:{
           fontStyle: 'none',
            fontFamily: 'sans-serif'
        },
        [theme.breakpoints.down("xs")]:{
            textAlign: 'center',
            marginBottom: '20px'
        }
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
        },
        [theme.breakpoints.down("xs")]:{
            display: 'block',
            margin: '0 auto'
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