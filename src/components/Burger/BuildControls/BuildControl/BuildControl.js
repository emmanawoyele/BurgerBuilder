import React, { Component } from 'react';
//import style from '../BuildControl/BuildControl.module.css'
import style from './BuildControl.module.css'
const BuildControl=(props)=>{
return <div className={style.BuildControl}>
    <div>{props.label}</div>
    <button className={style.Less}
     onClick={props.RemoveHandler}
     disabled={props.disableButton}>less</button>
    <button className={style.More} onClick={props.calories_Ingredient}
  >More</button>
   
</div>
}
 export default BuildControl;