import React, { Component } from 'react';
import Navigationitem from '../Navigationitems/Navigationitem/Navigationitem'
import style from '../Navigationitems/Navigationitems.module.css'

const navigationitems=()=>{
    return(
      <ul className={style.Navigationitems}>
        <Navigationitem links={'/'} active={true}>Burger builder</Navigationitem> 
        <Navigationitem links={'/'}>Check</Navigationitem>
        
      </ul>
    )
}
export default navigationitems;