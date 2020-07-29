import React from 'react'
import css from './InputFile.module.css'



const InputFile = (props)=>{

    return(
        <div className={css.field__wrapper}>
        <input
            accept="image/*"
            className={css.field__file }
            id="contained-button-file"
            multiple
            type="file"
        />
        <label htmlFor="contained-button-file" className={css.field__fileWrapper}>
            <div className={css.field__fileFake}> Upload your photo</div>
            <div className={css.field__fileButton}>Вrowse</div>
        </label>
        </div>
    )
}

export default InputFile