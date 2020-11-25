import React, { Component } from 'react';
import Original from '../../assets/images/original.png'
import style from '../logo/logo.module.css'

const logo =(props)=>{
    return(

    <div className={style.Logo} >
        <img src={Original} alt="MyBurger"/>
    </div>

    )
}

export default logo