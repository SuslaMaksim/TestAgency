import React from "react"
import {Button,Typography,Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    btnContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    btn: {
        backgroundColor: '#ef5b4c',
        color: 'white',
        textTransform: 'none',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '16px',
        width: '210px',
        padding: '5px 0 5px',
        marginBottom: '20px',
        '&:hover': {
            background: '#ef5b4c',
        }


    }
}))

const LastUsersButton = (props)=>{
    const classes = useStyle();
    return(
        <Box component='div' className={classes.btnContainer}>
            <Button disabled={props.nextUrl === null ? true : props.disable} className={classes.btn} onClick={props.getNextUsers}>Show more</Button>
            {props.nextUrl === null && <Typography variant='body1' style={{color:'tomato',marginTop: '20px'}}>Your have't more users yet !!!</Typography>}
        </Box>
        )


}

export default LastUsersButton;