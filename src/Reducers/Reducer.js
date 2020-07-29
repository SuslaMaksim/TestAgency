import {DataApi} from '../API/api'
const DOWNLOAD_CARDS = 'DOWNLOAD_CARDS';
const GET_NEXT_CARD = 'GET_NEXT_CARD';
const SET_DISABLE = 'SET_DISABLE';

let InitialState = {
        usersCards: null,
        nextUrl: '',
        disable: false
}

let MainReducer = (state = InitialState, action)=>{
    switch(action.type){
        case DOWNLOAD_CARDS:
            return {
                ...state,
                usersCards: [...action.usersCards],
                nextUrl: action.nextUrl
        }
        case GET_NEXT_CARD:
            return {
                ...state,
                usersCards: [...state.usersCards,...action.nextCards],
                nextUrl: action.nextUrl

            }
        case SET_DISABLE:
            return {
                ...state,
                disable: action.bool

            }

        default: return state
    }


}

export default MainReducer;

 const getUsersCardsCreator = (usersCards,nextUrl) =>({type: DOWNLOAD_CARDS,usersCards,nextUrl })
 const getNextUsersCreator = (nextCards,nextUrl) =>({type: GET_NEXT_CARD,nextCards,nextUrl })
 const setDisable = (bool) =>({type: SET_DISABLE, bool })




export const thankCreatorGetUsersCard = () => async(dispatch)=>{

    let data  = await DataApi.getUsersCardsData();
    dispatch(getUsersCardsCreator(data.users,data.links.next_url));


}

export const thankCreatorGetNextCards = () => async(dispatch,getState)=>{

     dispatch(setDisable(true))
     let url = getState().mainData.nextUrl;

     try{
         let response = await DataApi.getNextCardsData(url);
         let{data} = response;
         dispatch(getNextUsersCreator(data.users,data.links.next_url));
         dispatch(setDisable(false))
     } catch (error) {
         dispatch(setDisable(false))
         dispatch(getNextUsersCreator([],null));
     }












}



