import React, { useState } from 'react';

import USeEffectMousePositionComponent from './useEffectMousePostionComponent';

const USeEffectTogle=()=>{
    const [show, setShow] = useState(true);

    return (
        <div>
          <button onClick={()=>setShow(!show)}>Toggle</button>
          {
               show && <USeEffectMousePositionComponent></USeEffectMousePositionComponent>      
          }
        </div>
    );
}

export default USeEffectTogle;