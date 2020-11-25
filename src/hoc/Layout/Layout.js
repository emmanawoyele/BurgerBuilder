import React, { Component } from 'react';
import Auxilary from '../Auxilary/Auxilary';
import style from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/sideDrawer/sideDrawer'
import DrawToggleButton from '../../components/Navigation/sideDrawer/DrawToggleButton/DrawtoggleButton'


class Layout extends Component{
  state={
showSideDraw:false,


  }

  SideDrawerClosedHandler =()=>{
this.setState({
  showSideDraw:false
})
  }

  toggleButton=()=>{
   
 this.setState((prevState)=>{
  return{showSideDraw:!prevState.showSideDraw}
 })
   }
  
 
      
render(){

return(

    <Auxilary>
  
  <Toolbar toggleButton={this.toggleButton}/>
  <SideDrawer open={this.state.showSideDraw}
   closebackdrop={this.SideDrawerClosedHandler}
 />
   
    <main className={style.Content}>
        {this.props.children}
    </main>
    
    </Auxilary>
)
}
}
export default Layout