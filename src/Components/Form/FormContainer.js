import React, {useEffect} from 'react';
import Form from './Form';
import {connect} from 'react-redux';
import {thankCreatorGetToken,thankGetRadioButtonsData,thankCreatorSetDataInfo,setModal} from '../../Reducers/FormReducer'


const FormContainer = (props) => {

    useEffect(()=>{
        props.thankCreatorGetToken();
        props.thankGetRadioButtonsData();
    },[])

    return(
        <Form
            modal = {props.modal}
            radioButtonsData = {props.radioButtonsData}
            token = {props.token}
            disableButton = { props.disableButton}
            errorMessage = {props.errorMessage}
            successMessage = {props.successMessage}

            thankCreatorSetDataInfo={props.thankCreatorSetDataInfo}
            setModal = {props.setModal}
        />
    )

}


let mapStateToProps = (state)=>{
    return{
        token: state.formData.token,
        radioButtonsData: state.formData.radioButtonsData,
        modal: state.formData.modal,
        disableButton: state.formData.disableButton,
        errorMessage: state.formData.errorMessage,
        successMessage: state.formData.successMessage
    }

}

export default connect(mapStateToProps,{thankCreatorGetToken,thankGetRadioButtonsData,thankCreatorSetDataInfo,setModal})(FormContainer);