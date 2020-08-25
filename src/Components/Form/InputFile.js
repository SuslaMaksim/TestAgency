import React from 'react'
import css from './InputFile.module.css'
import classnames from 'classnames'

let errorFileFake = classnames(
    css.field__fileWrapper,
    css.error

)
let errorFileButton = classnames(
    css.field__fileButton,
    css.errorFileButton

)


const InputFile = (props)=>{

    let{name,register,error,errorsText} = props
    return(

        <div className={css.field__wrapper}>
            {error && <span style={{color: 'tomato',position: "absolute",fontSize: '12px',top: '-23px',right: '0px'}}>{errorsText}</span>}
            <input
            accept="image/*"
            className={css.field__file }
            id="contained-button-file"
            name = {name}
            multiple
            type="file"
            ref={register}
        />
        <label htmlFor="contained-button-file" className={error ? errorFileFake : css.field__fileWrapper}>
            <div className={css.field__fileFake}> Upload your photo</div>
            <div className={error ? errorFileButton : css.field__fileButton}>Вrowse</div>
        </label>
        </div>
    )
}

export default InputFile