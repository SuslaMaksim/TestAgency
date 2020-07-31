import React, {useEffect} from 'react';
import Form from './Form';
import {connect} from 'react-redux';
import {thankCreatorGetToken,thankGetRadioButtonsData} from '../../Reducers/FormReducer'


const FormContainer = (props) => {

    useEffect(()=>{
        props.thankCreatorGetToken();
        props.thankGetRadioButtonsData();
    },[])

    console.log(props)
    return(
        <Form
            modal = {props.modal}
            radioButtonsData = {props.radioButtonsData}
            token = {props.token}
        />
    )

}


let mapStateToProps = (state)=>{
    return{
        token: state.formData.token,
        radioButtonsData: state.formData.radioButtonsData,
        modal: state.formData.modal
    }

}

export default connect(mapStateToProps,{thankCreatorGetToken,thankGetRadioButtonsData})(FormContainer);