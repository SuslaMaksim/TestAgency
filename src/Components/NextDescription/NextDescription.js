import React from "react";
import {Box,Grid,Typography,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import frontEnd from '../../img/man-laptop-v1.svg'

const useStyle = makeStyles(theme=>({
    boxContainer: {
        padding: '1px',
        background: '#fff',
        minHeight: '720px',
        [theme.breakpoints.down('sm')]: {
            minHeight: '656px',
        }
    },
    boxInfo: {
        marginTop: '150px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '112px'
        }

    },
    typographyH1: {
        fontFamily: 'Open Sans',
        lineHeight: '56px',
        fontSize: '50px',
        letterSpacing: '-0.6px',
        [theme.breakpoints.down('sm')]: {
            lineHeight: '44px',
            fontSize: '40px',
            letterSpacing: '-0.4px',
        }

    },
    imgContainer: {
        display: 'flex',
        margin: '12px 5px 0 0 ',
        maxWidth: '290px',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '245px',
        },
    },
    img: {
        display: 'block',
        width: '100%',
    },
    photoContainer:{
        marginLeft: '30px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '30px'
        },
    },
    infoGridContainer:{
        [theme.breakpoints.down('sm')]: {
            marginLeft: '20px',
        },
    },
    infoContainer: {
        padding: '6px 28px 0px 17px',
        '& .MuiTypography-body1':{
            fontFamily: 'Open Sans',
        },
        [theme.breakpoints.down('sm')]: {
          padding: '6px 15px 0px 0px'
        },
    },
    commonText: {
        fontFamily: 'Open Sans',
        lineHeight: '24px',
        marginBottom: '23px',
        letterSpacing: '-0.1px'
    },
    btn: {
        textTransform: 'none',
        color: '#ef5b4c',
        fontFamily: 'Open Sans',
        fontSize: '16px',
        fontWeight: 'bolder',
        padding: '5px 0px'

    }
}))

const AboutTest = ()=>{
    const classes = useStyle();

    return(

        <Box component='div' className={classes.boxContainer}>
            <Box component='div' className={classes.boxInfo}>
                <Grid container>
                        <Grid item container xs={12} justify='center'>
                            <Typography variant='h2' className={classes.typographyH1}>
                                Let's get acquainted
                            </Typography>
                        </Grid>
                        <Grid item container xs={12}  style={{marginTop:'60px'}}>
                            <Grid item xs={12} sm={4} md={4} className={classes.photoContainer}>
                                <Box component='div' className={classes.imgContainer}>
                                    <img src={frontEnd} alt="frontend" className={classes.img}/>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={7} md={7} className={classes.infoGridContainer}>
                                <Box component='div' className={classes.infoContainer}>
                                    <Typography variant='h5' style={{ fontFamily: 'Open Sans',lineHeight: '30px',marginBottom: '20px'}}>I am  cool frontend developer</Typography>
                                    <Typography variant='body1'  align='justify'  className={classes.commonText}>
                                        We will evaluate how clean your approach to writing CSS and javascript code is. You
                                        can use any CSS and Javascript 3rd party libraries without any restriction
                                    </Typography>
                                    <Typography variant='body1'  align='justify' className={classes.commonText}>
                                        If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus point.If you use any
                                        task ranner (gulp/webpack) you will get bonus points as well.Slice service directory page PSD mockup into HTML/CSS3

                                    </Typography>
                                    <Button className={classes.btn}>Sing up now</Button>
                                </Box>
                            </Grid>

                       </Grid>


                </Grid>
            </Box>


        </Box>
    )
}

export default AboutTest;