import React from 'react'
import {Avatar, Box, Card, CardContent, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {sliceEmail} from './Helper'

const useStyle = makeStyles((theme) => ({

    userContainer: {
        marginTop: '25px'
    },
    card: {
        maxWidth: '204px',
        boxShadow: 'none',
        background: 'none'
    },
    commonFoText: {
        wordBreak: 'break-word',
        fontFamily: 'Open Sans'

    },
    avatarContainer: {
        marginBottom: '13px'
    },
    avatar: {
        margin: '0 auto',
        width: theme.spacing(9),
        height: theme.spacing(9),

    },
    cardContent: {
        padding: '0px'
    }


}))

const UserCard = (props)=>{
    let classes = useStyle();
    let{name,email,phone,position,photo}= props


    return(
        <Grid xs={4} item justify='center' container style={{padding: '0px 24px',  color: '#4D4D4D'} } className={classes.userContainer}>
            <Card className={classes.card} >
                <Box component='div' className={classes.avatarContainer} >
                    <Avatar  alt='avatar' src={photo} className={classes.avatar}/>
                </Box>

                <CardContent className={classes.cardContent}>
                    <Typography variant='h5' align='center' className={classes.commonFoText} style={{marginBottom: '10px',lineHeight: '29px'}}>{name}</Typography>
                    <Typography variant='subtitle1' align='center' className={classes.commonFoText} style={{marginBottom: '6px',lineHeight: '25px'}}>{position}</Typography>
                    <Typography variant='subtitle1' align='center' title={email} className={classes.commonFoText} style={{marginBottom: '4px',lineHeight: '10px',letterSpacing: '.1px',cursor: 'pointer'}} >{sliceEmail(email)}</Typography>
                    <Typography variant='subtitle1' align='center' className={classes.commonFoText}>{phone}</Typography>
                </CardContent>

            </Card>

        </Grid>
    )
}

export default UserCard;