import React from "react";
import {Box, Grid, Typography,InputLabel,TextField,FormLabel,RadioGroup,FormControlLabel} from "@material-ui/core";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import StyledRadio from "./StyledRadio";
import Button from "@material-ui/core/Button";
import InputFile from "./InputFile";

const InputField = withStyles({
    root:{
        '& label.Mui-focused':{
            color: 'tomato'
        },
        '& label': {
            color: 'tomato'
        },
        '& .MuiOutlinedInput-root':{
            '& fieldset':{
                borderColor: 'none'
            },
            '&:hover fieldset':{
                borderColor: '#33ccff'
            },
            '&.Mui-focused fieldset':{
                border: '1px solid #33ccff',
                boxShadow: '0px 0px 2px 2px rgb(51, 204, 255,0.3)'
            }
        }
    }

})(TextField)

const useStyle = makeStyles({
    mainContainer: {
        padding: '1px',
        background: '#fff',
        minHeight: '1070px',
        display: 'flex',


    },
    formContainer: {
        margin: '148px auto',
        maxWidth: '550px'


    },
    typographyH1: {
        fontFamily: 'Open Sans',
        lineHeight: '58px',
        fontSize: '50px',
        letterSpacing: '.1px',
        marginBottom: '15px'
    },
    attention: {
        fontFamily: 'Open Sans',
        lineHeight: '24px',
        padding: '0px 45px',
        marginBottom: '32px'
    },
    form: {
        margin: '0px 42px'

    },
    input: {
        marginTop: '24px'
    },
    inputText: {
        fontFamily:'Open Sans',
        margin: "9px 0px 0px",


        '& .MuiOutlinedInput-input': {
            fontSize: '14px',
            fontFamily:'Open Sans',
            paddingTop: '11px',

        },
        '& .MuiFormHelperText-contained': {
            marginLeft: '0px',
            color: 'black',
            marginTop: '5px',
        },
        '& .MuiOutlinedInput-root':{


        }

    },
    radioGrup: {
        marginTop: '22px'
    },
    formLabel: {
        fontFamily: 'Open Sans',
        color: 'black',
        marginBottom: '18px',
        fontSize: '15px',
    },
    radioButton: {
        marginBottom: '9px',
        "& .MuiTypography-body1":{
            fontSize: '14px',
            fontFamily: 'Open Sans',
        },
        '& .PrivateSwitchBase-root-82':{
            padding: '0px 8px 0px 9px'
        },
        "& .MuiIconButton-root": {
            padding: '0px 8px 0px 9px'
        },
        "&:last-child":{
            marginBottom: '0px'
        }
    },
    btn: {
        display: 'block',
        margin: '0 auto',
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


})

const Form = (props)=>{
const classes = useStyle();
    return(
        <Box component='div' className={classes.mainContainer} >
            <Box component='div' className={classes.formContainer}>
                <Typography variant='h2' align='center' className={classes.typographyH1}>
                    Register to get a work
                </Typography>
                <Typography variant='body1' align='center' className={classes.attention}>
                    Attention! After successful registration and alert, update the list of users in the block from the top
                </Typography>
                    <Box component='form' className={classes.form} >
                        <Box component='div' className={classes.input}>
                        <InputLabel shrink htmlFor="bootstrap-input" style={{fontSize: '19px',fontFamily:'Open Sans',color:'black',}}>
                            Name
                        </InputLabel>
                        <InputField
                            className={classes.inputText}
                            id="bootstrap-input"
                            placeholder="Your name"
                            variant="outlined"

                            fullWidth
                            margin="dense"
                        />
                        </Box>
                        <Box component='div' className={classes.input}>
                            <InputLabel shrink htmlFor="bootstrap-input" style={{fontSize: '19px',fontFamily:'Open Sans',color:'black',}}>
                                Email
                            </InputLabel>
                            <InputField
                                className={classes.inputText}
                                id="bootstrap-input"
                                placeholder="Your email"
                                variant="outlined"

                                fullWidth
                                margin="dense"
                            />
                        </Box>
                        <Box component='div' className={classes.input}>
                            <InputLabel shrink htmlFor="phoneNumber" style={{fontSize: '19px',fontFamily:'Open Sans',color:'black',}}>
                                Phone number
                            </InputLabel>
                            <InputField
                                className={classes.inputText}
                                id="phoneNumber"
                                placeholder="+380 XX XXX XX XX"
                                variant="outlined"

                                fullWidth
                                margin="dense"
                                helperText="Enter phone number in open format"
                            />
                        </Box>
                        <Box className='div' className={classes.radioGrup}>
                        <FormLabel component="legend" className={classes.formLabel}>Select your position</FormLabel>
                        <RadioGroup defaultValue="Frontend developer" aria-label="position" name="customized-radios" style={{padding: '2px'}}>
                            <FormControlLabel value="Frontend developer" className={classes.radioButton} control={<StyledRadio/>} label="Frontend developer" />
                            <FormControlLabel value="Backend developer" className={classes.radioButton} control={<StyledRadio/>} label="Backend developer" />
                            <FormControlLabel value="Designer" className={classes.radioButton} control={<StyledRadio/>} label="Designer" />
                            <FormControlLabel value="QA" className={classes.radioButton} control={<StyledRadio/>} label="QA" />
                        </RadioGroup>
                        </Box>
                        <Box component='div' className={classes.fileContainer} style={{marginTop: '18px'}}>
                            <Typography style={{ fontSize:'14px', fontFamily: 'Open Sans, sans-serif'}}> Photo</Typography>
                            <InputFile/>
                            <Button  className={classes.btn} >Sing up now</Button>
                        </Box>



                    </Box>

            </Box>

        </Box>
    )
}

export default Form;