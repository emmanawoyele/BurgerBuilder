import React, { Component } from 'react';
import style from '../DrawToggleButton/DrawToggleButton.module.css'


const drawToggleButton=(props)=>{
    return(

        <div  className={style.DrawerToggle }onClick={props.closeModal}>
            <div></div>
            <div></div>
            <div></div>
            </div>
    )
}
export default drawToggleButton