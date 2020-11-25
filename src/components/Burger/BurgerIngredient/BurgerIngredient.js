import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from '../BurgerIngredient/BurgerIngredient.module.css'
import Ordersummary from '../OrderSummay/ordersummary';

class BurgerIngredient  extends  Component{
    componentDidMount(){
        console.log('[Ordersummary] DidMount')
    }
    render(){
        let ingredient = null;
            switch (this.props.food){
                case ('Bread-bottom'):
                ingredient=<div className={style.BreadBottom}></div>;
                break;

                case('Bread-top'):
                ingredient =(
                    <div className={style.BreadTop}>
                        <div className={style.Seeds1}></div>
                        <div className={style.Seeds2}></div>
                    </div>
                );
                break;

                case('Meat'):
        
                ingredient = <div className={style.Meat}></div>;
                
                break;
                case ('Cheese'):
                    ingredient=<div className={style.Cheese}></div>;
                    break;
        
                    case ('Salad'):
                        ingredient=<div className={style.Salad}></div>
                        
                        break;
                    case('Bacon'):
                    ingredient = <div className={style.Bacon}></div>;
                    break;
                    case('Tomatoes'):
                    ingredient=<div className={style.Tomatoes}></div>
                    break;
                    default:
                        ingredient =null;   

    };

    return ingredient;
 
    }
    
};
BurgerIngredient.propTypes={
    food:PropTypes.string.isRequired
};


export  default BurgerIngredient;