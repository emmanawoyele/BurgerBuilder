import React, { Component } from 'react';
//import style from './BuildControl.module.css'
//import  style from './BuildControl/BuildControl.module.css';
import BuildControl from './BuildControl/BuildControl';
import style from '../BuildControls/buildcontrols.module.css'
const controls=[
    {label:'Salad', food:'Salad'},
    {label:'Bacon', food:'Bacon'},
    {label:'Cheese',food:'Cheese'},
    {label:'Meat',  food:'Meat'},
    {label:'Tomatoes', food:'Tomatoes'},
    {label:'Pickle', food:'Pickle'},
    
]


const buildControls =(props)=>(
<div className={style.BuildControls}>
<p>Current Price:<strong>{props.Total_price.toFixed(2)}</strong><br></br>
</p>
<span>Current Calories:<strong>{props.BurgerCalories}</strong></span>
{controls.map((crtl,index)=>(
    <BuildControl key={index} 
    label={crtl.label}
    RemoveHandler={()=>{
        props.RemoveCalories(crtl.food)
        props.Remove(crtl.food)

    }}
     ingredient_Remove={()=>props.Remove(crtl.food)}

     calories_Ingredient={()=>{
        props.Added(crtl.food);
        props.TotalCalories(crtl.food)
     }}
    
     disableButton={props.disabled[crtl.food]}
     
   
   />
))}

<button className={style.OrderButton}
disabled={!props.checkOut}
onClick={props.ordered}>Order Now</button>
</div>
);
export default buildControls;