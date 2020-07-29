import React from 'react';
import form from './Form';
import {connect} from 'react-redux'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const FormContainer = (props) => {


    return(
        <Form/>
    )

}


let mapStateToProps = (state)=>{
    return{

    }

}

export default connect()(FormContainer);