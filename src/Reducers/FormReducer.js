import {DataApi} from '../API/api';
import {thankCreatorGetUsersCard } from './Reducer'

const DOWNLOAD_TOKEN = 'DOWNLOAD_TOKEN';
const RADIO_BUTTON_DATA = 'RADIO_BUTTON_DATA';
const SET_DISABLE_BUTTON = 'SET_DISABLE_BUTTON';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE ';
const SET_SUCCESS_MESSAGE = 'SET_SUCCESS_MESSAGE';
const SET_MODAL = 'SET_MODAL';



let InitialState = {
    token: '',
    radioButtonsData: null,
    modal: false,
    errorMessage: undefined,
    successMessage: undefined,
    disableButton: false
}

let FormReducer = (state = InitialState, action)=>{
    switch(action.type){
        case RADIO_BUTTON_DATA:
            return {
                ...state,
                radioButtonsData: [...action.radioData],

            }
        case DOWNLOAD_TOKEN:
            return {
                ...state,
                token: action.token,

            }
        case SET_DISABLE_BUTTON:
            return {
                ...state,
                disableButton: action.bool

            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.message

            }
        case SET_SUCCESS_MESSAGE:
            return {
                ...state,
                successMessage: action.message

            }
        case SET_MODAL :
            return {
                ...state,
                modal: action.bool

            }





        default: return state
    }


}

export default FormReducer;

const getTokenCreator = (token) =>({type: DOWNLOAD_TOKEN,token });
const getRadioButtonsDataCreator = (radioData) =>({type: RADIO_BUTTON_DATA,radioData });
const setDisableButton = (bool) =>({type: SET_DISABLE_BUTTON, bool });
const setErrorMessage= (message) =>({type: SET_ERROR_MESSAGE, message });
const setSuccessMessage= (message) =>({type: SET_SUCCESS_MESSAGE, message })
export const setModal= (bool) =>({type: SET_MODAL, bool })


export let thankCreatorGetToken= ()=> async(dispatch,getState)=> {

    let data = await DataApi.getToken();
    dispatch(getTokenCreator(data.token))

}

export let thankGetRadioButtonsData= ()=> async(dispatch,getState)=> {

    let data  = await DataApi.getRadioButtonsData();
    dispatch(getRadioButtonsDataCreator(data.positions))

}

export let thankCreatorSetDataInfo= (name,email,phone,position,photo,token)=> async(dispatch,getState)=> {
    dispatch(setDisableButton(true))
    let response = await DataApi.setDataForm(name,email,phone,position,photo,token);
    if(response.success === true) {
        dispatch(thankCreatorGetUsersCard())
        dispatch(setSuccessMessage(response.message))
        dispatch(setErrorMessage(undefined))
        dispatch(setModal(true))
        dispatch(setDisableButton(false))


    }else{
        dispatch(setDisableButton(false))
        dispatch(setErrorMessage(response.message))

    }
    return response




}