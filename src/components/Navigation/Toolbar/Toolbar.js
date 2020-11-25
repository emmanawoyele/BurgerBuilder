import React, { Component } from 'react';
import style from '../Toolbar/Toolbar.module.css';
import Logo from '../../logo/Logo'
import Navigationitem from '../Navigationitems/Navigationitems'
import DrawToggleButton from '../sideDrawer/DrawToggleButton/DrawtoggleButton'




const toolbar=(props)=>{
    return( <header className={style.Toolbar}>
      <DrawToggleButton closeModal={props.toggleButton} />
      <div className={style.Logo}>
        <Logo/>
      
      </div>
     
    
      <nav className={style.DesktopOnly}>
      <Navigationitem/>
      </nav>
  
      
    </header>)
}
export default toolbar;