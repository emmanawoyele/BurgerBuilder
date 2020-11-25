import React, { Component } from 'react';
import style from '../Button/button.module.css'

const button=(props)=>{
return(    
<button onClick={props.clicked} className={[style.Button, style[props.btnType]].join(' ')}>
   
    {props.children}
    
    </button>
    );
}

export default button;
