const DOWNLOAD_TOKEN = 'DOWNLOAD_TOKEN';
const RADIO_BUTTON_DATA = 'RADIO_BUTTON_DATA';


let InitialState = {
    token: '',
    radioButtonsData: null,
    modal: false
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


        default: return state
    }


}

export default FormReducer;

const getTokenCreator = (token) =>({type: DOWNLOAD_TOKEN,token });
const getRadioButtonsDataCreator = (radioData) =>({type: RADIO_BUTTON_DATA,radioData });


export let thankCreatorGetRadioButtonsData = ()=> async(dispatch,getState)=> {


}