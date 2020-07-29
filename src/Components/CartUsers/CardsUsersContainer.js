import React, {useEffect} from "react";
import CardsUsers from './CartUsers';
import {connect} from 'react-redux';
import {thankCreatorGetUsersCard,thankCreatorGetNextCards} from '../../Reducers/Reducer'



let CardsUsersContainer = (props)=>{

    useEffect(()=>{
        props.thankCreatorGetUsersCard()
    },[])
    let getNextUsersData = ()=>{
        props.thankCreatorGetNextCards()
    }
    return(

        <CardsUsers usersCards = {props.usersCards}
                    nextUrl = {props.nextUrl}
                    disable = {props.disable}
                    getNextUsers = {getNextUsersData}/>

    )
}

let mapStateToProps = (state)=>{

    return{
        usersCards: state.mainData.usersCards,
        nextUrl: state.mainData.nextUrl,
        disable: state.mainData.disable
    }
}

export default connect(mapStateToProps,{thankCreatorGetUsersCard,thankCreatorGetNextCards})(CardsUsersContainer)