import React, { Component } from 'react';
import Auxilary from '../../../hoc/Auxilary/Auxilary';
import Button from '../../Ul/Modal/Button/Button'
class Ordersummary extends Component{
    render(){
    let ingredientsSummary =Object.keys(this.props.ingredients).map(igKey=>{
    return<li>
        <span style={{textTransform:"capitalize"}}>{igKey}:</span>{this.props.ingredients[igKey]}
        
        </li>

    })
    return(
<Auxilary>
    <h3> Your order</h3>
    <p>A delicious burger with the following ingredients</p>
    <ul>
        {ingredientsSummary}
    </ul>
    <p><span style={{textTransform:"capitalize",fontWeight:"bold"}}>Total Price:</span>${this.props.Total_price.toFixed(2)}</p>
    <p> <span style={{textTransform:"capitalize",fontWeight:"bold"}}>Total Calories:{this.props.TotalCalories}</span></p>
    <p>Continue to checkout</p>
    <Button clicked={this.props.purchasedContinueHandler} btnType="Success">Continue</Button>
    <Button clicked={this.props.purchasedCancelHandler}  btnType="Danger">Cancel</Button>
    
</Auxilary>)

    } 
};


export default Ordersummary;