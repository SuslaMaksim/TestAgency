import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import {Box,Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';;

const useStyle = makeStyles({

    modal:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modelPaperContainer:{
        display: 'flex',
        backgroundColor: '#fff',
        flexDirection: 'column',
        width: '395px',
        borderRadius: '3px'
    },
    modelItem: {
        display: 'flex',
        borderBottom: '1px solid #f2f2f2',
        alignItems: 'center',
        minHeight: '60px',
        padding: '15px',
        justifyContent: 'space-between',
        '&:last-child': {
            borderBottom: 'none',
            justifyContent: 'flex-end',
            minHeight: '70px'

        },
        '& .MuiIconButton-root': {
            padding: '0px'
        }

    },
    btn: {
        display: 'block',
        backgroundColor: '#ef5b4c',
        color: 'white',
        textTransform: 'none',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '16px',
        width: '80px',
        padding: '5px 0 5px',
        '&:hover': {
            background: '#ef5b4c',
        }
    }


})


const ModalComponent = (props)=>{

    const classes = useStyle()
    let{modal,setModal} = props;

    return <Modal
        className={classes.modal}
        open={modal}
        disableEnforceFocus
        disableAutoFocus
    >
        <Box className={classes.modelPaperContainer}>
            <div  className={classes.modelItem}>
                <Typography variant='h5' style={{fontFamily:'Open Sans'}}> Congratulations</Typography>
                <IconButton aria-label="upload picture" component="span" onClick={()=> setModal(false)} >
                    <CloseIcon  />
                </IconButton>
            </div>
            <div className={classes.modelItem}>
                <Typography variant='body1' style={{fontFamily:'Open Sans',color: '#595959'}}> You have successfully passed the registration</Typography>
            </div>
            <div className={classes.modelItem}>
                <Button className={classes.btn} onClick={()=> setModal(false)} > Great</Button>
            </div>
        </Box>

    </Modal>
}

export default ModalComponent;