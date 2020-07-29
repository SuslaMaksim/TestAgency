import React from 'react';
import preloader from '../../img/preloader.gif';
import Box from "@material-ui/core/Box";


let Preloader = ()=>{


    return(
        <Box component='div' style={{margin: '130px auto 200px',width:'100px',height:'100px',}}>
                    <img src={preloader} style={{width: '100%'}} />
        </Box>


    )
}


export default Preloader;