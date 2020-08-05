import React, {useState} from "react";
import {Box, Typography,InputLabel,FormLabel,RadioGroup} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import InputFile from "./InputFile";
import Preloader from "../CartUsers/Preloader";
import RadioButtonContainer from "./RadioButtonContainer";
import {useForm}  from 'react-hook-form';
import InputField from './InputField'
import ModalComponent from "./Modal";




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
    inputsContainer: {
        marginTop: '24px',
        position: 'relative'
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
    fileContainer: {
        marginTop: '18px',
        position: 'relative'
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
    },
    error: {
        position: 'absolute',
        top: '60%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: 'tomato',
        fontSize: '14px',
    }

})

const Form =(props)=>{
const classes = useStyle();
const{register,handleSubmit,errors,reset} = useForm();




let onSubmit = (data,e)=>{
    let{name,email,phone,position,photoFile}= data;
    let photo = photoFile[0];
    let positionToNumber = Number(position)
    props.thankCreatorSetDataInfo(name,email,phone,positionToNumber,photo,props.token)
        .then(response=>{
            response.success && e.target.reset()
        })


}

    return(
        <Box component='div' className={classes.mainContainer} >
            <ModalComponent
                setModal = {props.setModal}
                modal = {props.modal}
            />
            <Box component='div' className={classes.formContainer}>
                <Typography variant='h2' align='center' className={classes.typographyH1}>
                    Register to get a work
                </Typography>
                <Typography variant='body1' align='center' className={classes.attention}>
                    Attention! After successful registration and alert, update the list of users in the block from the top
                </Typography>
                    <Box component='form'  className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <Box component='div' className={classes.inputsContainer}>
                        <InputLabel shrink htmlFor="name" style={{fontSize: '19px',fontFamily:'Open Sans',color:'black',}}>
                            Name
                        </InputLabel>
                        <InputField
                            id="name"
                            placeholder="Your name"
                            name = 'name'
                            inputRef = {register({ required: true, minLength: 2 , maxLength: 60})}
                            errors = {errors.name}
                            errorsText = {{emptyField:'Please Enter Name!',validationFailed: 'The name must be at least 2 characters!'}}
                        />
                        </Box>
                        <Box component='div' className={classes.inputsContainer}>
                            <InputLabel shrink htmlFor="Email" style={{fontSize: '19px',fontFamily:'Open Sans',color:'black',}}>
                                Email
                            </InputLabel>
                            <InputField
                                id="Email"
                                placeholder="Your email"
                                name = 'email'
                                inputRef = {register({ required: true,minLength: 2,maxLength:100,pattern: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/ })}
                                errors = {errors.email}
                                errorsText = {{emptyField:'Please Enter Email!',validationFailed: 'The email must be a valid email address!'}}
                                type='email'

                            />
                        </Box>
                        <Box component='div' className={classes.inputsContainer}>
                            <InputLabel shrink htmlFor="phoneNumber" style={{fontSize: '19px',fontFamily:'Open Sans',color:'black',}}>
                                Phone number
                            </InputLabel>
                            <InputField
                                id="phoneNumber"
                                placeholder="+380 XX XXX XX XX"
                                name = "phone"
                                helperText="Enter phone number in open format"
                                inputRef = {register({ required: true,pattern: /^[\+]{0,1}380([0-9]{9})$/ })}
                                errors = {errors.phone}
                                errorsText = {{emptyField:'Please Enter Phone number!',validationFailed: 'User phone number, should start with code of Ukraine +380 and have 12 numb'}}
                            />
                        </Box>
                        <Box className='div' className={classes.radioGrup}>
                        <FormLabel component="legend" className={classes.formLabel}>Select your position</FormLabel>
                        <RadioGroup aria-label="position" name="customized-radios" style={{padding: '2px'}}>
                            { props.radioButtonsData === null
                                ?
                                <Preloader
                                    width = '50px'
                                    height = '50x'
                                    margin = '20px auto 35px'
                                />
                                : props.radioButtonsData.map( radioData =>
                                <RadioButtonContainer

                                id = {radioData.id}
                                value = {radioData.name}
                                key = {radioData.id}
                                register = {register({ required: true })}
                                name = 'position'


                                /> )
                            }
                            {errors.position && <span style={{color: 'tomato',fontSize: '14px',}}>Your must choose Profession</span> }

                        </RadioGroup>
                        </Box>
                        <Box component='div' className={classes.fileContainer} style={{marginTop: '18px'}}>
                            <Typography style={{ fontSize:'14px', fontFamily: 'Open Sans, sans-serif'}}> Photo</Typography>
                            <InputFile name = 'photoFile'
                                       register={ register({ required: true })}
                                       error = {errors.photoFile}
                                       errorsText = 'Your must choose Avatar image'
                            />
                            {props.errorMessage && <span className={classes.error}>{props.errorMessage}</span>}
                            <Button type = 'submit' disabled={props.disableButton} className={classes.btn} >Sing up now</Button>
                        </Box>



                    </Box>

            </Box>

        </Box>
    )
}

export default Form;