import React from "react";
import {Box, Grid, Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import UserCard from "./UserCard";
import LastUsersButton from "./LastUsersButton";
import Preloader from './Preloader'


const useStyle = makeStyles((theme) => ({

    mainContainer: {
        padding: '1px',
        minHeight: '1105px',
        background: "#f9f9f3",
        [theme.breakpoints.down('sm')]: {
            minHeight: '1028px',
        }
    },
    cartUsersContainer: {
        marginTop: '150px',
        marginBottom: '50px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '112px',
        }
    },
    typographyH1: {
        fontFamily: 'Open Sans',
        lineHeight: '58px',
        fontSize: '50px',
        letterSpacing: '.1px',
        marginBottom: '15px',
        [theme.breakpoints.down('sm')]: {
            lineHeight: '44px',
            fontSize: '40px',
            letterSpacing: '.1px',
            marginBottom: '17px',
        }


    },
    attention: {
        fontFamily: 'Open Sans',
        lineHeight: '24px',


    },
    usersContainer: {
        margin: '51px 15px 5px',
    },

    btn: {
        backgroundColor: '#ef5b4c',
        color: 'white',
        textTransform: 'none',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '16px',
        width: '210px',
        padding: '5px 0 5px',
        marginBottom: '50px',
        '&:hover': {
            background: '#ef5b4c',
        }


    }
}))
const CartUsers = (props)=>{

    const classes = useStyle();

    return(
        <Box component='div' className={classes.mainContainer}>
            <Box component='div' className={classes.cartUsersContainer}>
                <Grid container >
                    <Grid xs={12} container item justify='center' direction='column' alignItems='center'>
                        <Typography variant='h2' className={classes.typographyH1}>
                            Our cheerful users
                        </Typography>
                        <Typography variant='body1' align='justify' className={classes.attention}>
                            Attention! Sorting users by registration date
                        </Typography>
                    </Grid>

                    <Grid   container item spacing={6} className={classes.usersContainer}>
                        {props.usersCards === null ? <Preloader  width = '100px'
                                                                 height = '100x'
                                                                 margin = '130px auto 220px' /> : props.usersCards.map( card => <UserCard key = {card.id} {...card}/> ) }
                    </Grid>

                    <Grid xs={12} container item justify='center' >
                        <LastUsersButton nextUrl = {props.nextUrl}
                                         disable = {props.disable}
                                         getNextUsers = {props.getNextUsers}

                        />
                    </Grid>
                </Grid>
            </Box>

        </Box>

    )
}

export default CartUsers;