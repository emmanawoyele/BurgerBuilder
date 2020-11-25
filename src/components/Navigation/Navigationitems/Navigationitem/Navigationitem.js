import React, { Component } from 'react';
import style from '../Navigationitem/Navigationitem.module.css'



const navigationitem =(props)=>{
    return (
   
    <li className={style.Navigationitem}>
        <a href={props.links} className={props.active ? style.active: null}>{props.children}</a>
        </li>
    


        
    )
}
export default navigationitem