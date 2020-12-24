import React, { useEffect,useState } from 'react';

const USeEffectMousePositionComponent=()=>{

    const [x,setX]=  useState(0);
    const [y,setY] =  useState(0);


    const getPostions=(evt)=> {
        setX(evt.clientX);
        setY(evt.clientY);
        console.log(`Mouse x = ${x} && Mouse y = ${y}`);
    }


    useEffect(()=>{
        // implementation for componentDidMount
        window.addEventListener('mousemove', getPostions);
        
        // implementation like componentWillUnMount
        return()=>{
            console.log('Released');
            window.removeEventListener('mousemove', getPostions);
        }
    },[]);

    return(
        <div>
           x: {x} && y : {y}
        </div>    
    );

}

export default USeEffectMousePositionComponent;