import React, { Component } from 'react'
import style from '../Backdrop/Backdrop.module.css'



//props.show ? <div className={style.backdrop}></div>:null
 const  backdrop =(props)=> (
      props.openBackDrop ? <div className={style.backdrop} onClick={props.closeModal}></div>:null

     
  

         
     
 )
  

 
 


 export default backdrop;