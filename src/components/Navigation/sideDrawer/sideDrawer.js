import React, { Component } from 'react'
 import Logo from '../../logo/Logo'
 import Navigationitems from '../Navigationitems/Navigationitems'
 import style  from '../sideDrawer/sideDrawer.module.css'
 import Backdrop from '../../Ul/Modal/Backdrop/Backdrop'
 import Auxilary from '../../../hoc/Auxilary/Auxilary'



const sideDrawer =(props)=> {
  
  let sidedrawerCloser= [style.sidedrawer, style.Close]
  if(props.open){
    sidedrawerCloser= [style.sidedrawer, style.Open]
    
  }
    return (
      
        <Auxilary>
          
          <Backdrop openBackDrop={props.open} closeModal={props.closebackdrop} />
          
        
          <div className={sidedrawerCloser.join(' ')}  >
               <div className={style.Logo}>
                 <Logo/>
               </div>
         
       <nav>
          
         <Navigationitems/>
     </nav>
        </div>
        </Auxilary>

      );
  
}
 
export default sideDrawer;


 