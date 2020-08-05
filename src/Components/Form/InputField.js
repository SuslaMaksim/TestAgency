
import React from 'react'
import {Box, TextField} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ErrorsCreator from "../CartUsers/Helper";


const useStyles = makeStyles({
    root: {
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
    },
    Error: {

        '& .MuiOutlinedInput-root':{
            '& fieldset':{
                borderColor: '#ef5b4c'
            },
            '&:hover fieldset':{
                borderColor: '#ef5b4c'
            },
            '&.Mui-focused fieldset':{
                border: '1px solid #ef5b4c',
                boxShadow: '0px 0px 2px 2px rgb(239, 91, 76,0.3)'
            }
        }
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
    }
});


let InputField = (props)=>{
    const classes = useStyles()


    return<>


      { props.errors && <ErrorsCreator type ={props.errors.type} errorsText={props.errorsText} />}
        <TextField  margin="dense"
        className={classes.inputText}
        classes = {{
            root: props.errors ? classes.Error : classes.root,
        }}
                       placeholder={props.placeholder}
                       variant="outlined"
                       fullWidth
                       helperText={props.helperText && props.helperText}
                       name = {props.name}
                       id = {props.id}
                       type={props.type}
                       inputRef = {props.inputRef}



    />
    </>
}

export default InputField;