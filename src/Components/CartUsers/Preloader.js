import React from 'react';
import preloader from '../../img/preloader.gif';
import Box from "@material-ui/core/Box";


let Preloader = (props)=>{

    let{width,height,margin} = props
    return(
        <Box component='div' style={{margin: `${margin}`,width:`${width}`,height:`${height}`,}}>
                    <img src={preloader} style={{width: '100%'}} />
        </Box>


    )
}


export default Preloader;