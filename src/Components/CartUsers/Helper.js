import React from "react";

 export let ErrorsCreator = ({type,errorsText})=>{



     return <>
     {type === 'required'
         ? <Error errorsText = {errorsText.emptyField}  />
         : <Error errorsText = {errorsText.validationFailed}  />}
  </>

}

export default ErrorsCreator;

let Error = ({errorsText})=>{
     return <span style={{color: 'tomato',position: "absolute",fontSize: '12px',top: '5px',right: '0px'}}>{errorsText}</span>
}




export let sliceEmail = (name)=>{
    if(name.length > 19){
      return name.slice(0,17) + '...'
    }
    return name
}

