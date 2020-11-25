import React, { Component } from 'react';
import style from './BurgerIngredient/Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger=(props)=>{
    let transformed_ingredient2array= Object.keys(props.ingredients).map(ingredientskey=>{ 
        //Object.key convert the object to Array so that we can use map method 
        
        return [...Array(props.ingredients[ingredientskey])].map((_,i)=>{
        
     return <BurgerIngredient key={ingredientskey + i} food={ingredientskey}/>
     
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    
    if(transformed_ingredient2array.length==0){
        transformed_ingredient2array="pls add your ingredients"
    }
    console.log(transformed_ingredient2array)
    return(
        <div className={style.Burger}>
             
            <BurgerIngredient food='Bread-top'/>
          {transformed_ingredient2array}
            <BurgerIngredient food="Bread-bottom"/>
    
        </div>
    )
}
export default burger;