import React from "react";
import {Box,Grid,Typography,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import frontEnd from '../../img/man-laptop-v1.svg'

const useStyle = makeStyles(theme=>({
    boxContainer: {
        padding: '1px',
        background: '#fff',
        minHeight: '720px'
    },
    boxInfo: {
        marginTop: '150px'
    },
    typographyH1: {
        fontFamily: 'Open Sans',
        lineHeight: '56px',
        fontSize: '50px',
        letterSpacing: '-0.6px'

    },
    imgContainer: {
        display: 'flex',
        height: '286px',
        margin: '10px 10px',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        },
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
    },
    infoContainer: {
        padding: '6px 28px 0px 17px',
        '& .MuiTypography-body1':{
            fontFamily: 'Open Sans',
        }
    },
    commonText: {
        fontFamily: 'Open Sans',
        lineHeight: '24px',
        marginBottom: '23px'
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
                        <Grid item container xs={12} justify='center' style={{marginTop:'60px'}}>
                            <Grid item xs={12} md={5}>
                                <Box component='div' className={classes.imgContainer}>
                                    <img src={frontEnd} alt="frontend" className='img'/>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box component='div' className={classes.infoContainer}>
                                    <Typography variant='h5' style={{ fontFamily: 'Open Sans',lineHeight: '30px',marginBottom: '20px'}}>I am  cool frontend developer</Typography>
                                    <Typography variant='body1'  align='justify' className={classes.commonText}>
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