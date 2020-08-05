import StyledRadio from "./StyledRadio";
import {FormControlLabel} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/styles";

 const useStyle = makeStyles({
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


 })



const RadioButtonContainer = (props)=>{
    const classes = useStyle()
    let {name,register,id} = props;


    return(
        <FormControlLabel  defaultValue={false} value={props.id.toString()} name={name} className={classes.radioButton} control={<StyledRadio/>} label={props.value} inputRef={register}/>
    )
}

export default RadioButtonContainer;