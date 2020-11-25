import React, { Component } from 'react';
import style from './Modal.module.css';
import Auxilary from '../../../hoc/Auxilary/Auxilary'
import  Backdrop from '../Modal/Backdrop/Backdrop'

class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.Show !== this.props.Show
    }
    componentDidMount(){
        console.log('[Modal wil update]')
    }
    render(){
        return(<Auxilary>
            <Backdrop openBackDrop={this.props.Show} closeModal={this.props.close}
            />
          <div className={style.Modal}
          style={{
              //if show is true? then translateY(0) if show is  not true: translateY(-100vh)
              
              transform:this.props.Show? 'translateY(0)': 'translateY(-100vh)',
              opacity: this.props.Show ?'1': '0'
          }}> 
              <div>
          {this.props.children}
      </div>
      
          </div>
          </Auxilary>
      )

        
    }

   
};
export default Modal;