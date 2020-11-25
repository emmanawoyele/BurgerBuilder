import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Ul/Modal/Modal';
import Ordersummary from '../../components/Burger/OrderSummay/ordersummary';

//import { object } from 'prop-types';

const INGREDIENT_PRICE={
    Salad:0.5,
    Cheese:0.5,
    Bacon:0.9,
    Meat:1.9,
    Tomatoes:0.4,
    Pickle:0.4
}

const INGREDIENT_calories={
    Salad:150,
    Cheese:600,
    Bacon:800,
    Meat:1500,
    Tomatoes:10
    
    
}

class BurgerBuilder extends Component{

   state={
       ingredients:{Salad:0, Bacon:0, Cheese:0,Meat:0,Tomatoes:0,Pickle:0},

       currentCalorie:400,
       TotalPrice:4,
       purchased:false,
       purchasing:false

   }

   purchaseingHandler=()=>{
this.setState({
    purchasing:true
})
   }
purchasedCancelHandler=()=>{
    this.setState({
        purchasing:false
    })
}


purchasedContinueHandler=()=>{
    alert('you continue')
}

   burgerPurchased=(i)=>{
       //burgerPurchased received a parameters(ingredients)
       //Object.keys turn object into arrays//
       const sum = Object.keys(i).map((igk)=>{ 
return i[igk]
       })
       
     .reduce(function( sum ,el){
           return sum + el
       },0)
       console.log(sum)
       this.setState({
           purchased:sum > 0
       })
   }
  addCalories=(ingredient)=>{
    const OldCalories=this.state.currentCalorie
    const NewCalories = OldCalories + INGREDIENT_calories[ingredient]
    console.log(NewCalories)
    this.setState({
        currentCalorie:NewCalories
    })
    
  }

  RemoveCalories=(ingredient)=>{
    const OldCalories=this.state.currentCalorie
    const NewCalories = OldCalories - INGREDIENT_calories[ingredient]
    console.log(NewCalories)
    this.setState({
        currentCalorie:NewCalories
    })
    
  }
   addIngredientsHandler=(extras)=>{
   const oldIngredient = this.state.ingredients[extras];
   console.log(oldIngredient);
   const updatedCount = oldIngredient+1;
   console.log(updatedCount);
   const updatedIngredient ={...this.state.ingredients};
   updatedIngredient[extras]=updatedCount
   console.log(oldIngredient)
const priceAdded = INGREDIENT_PRICE[extras];
const oldprice =this.state.TotalPrice;
const NewPrice= oldprice + priceAdded ;
console.log(NewPrice)
   this.setState({
       ingredients:updatedIngredient,
       TotalPrice :NewPrice
   })
   this.burgerPurchased(updatedIngredient)
  
   }

   removeIngredientsHandler=(extras)=>{
    const oldIngredient = this.state.ingredients[extras];
    if(oldIngredient <=0){
return;
    }
    const updatedCount = oldIngredient-1;
    const updatedIngredient ={...this.state.ingredients};
    updatedIngredient[extras]=updatedCount
    console.log(updatedIngredient)
 const priceAdded = INGREDIENT_PRICE[extras];
 const oldprice =this.state.TotalPrice;
 const NewPrice= oldprice - priceAdded;
 console.log(NewPrice)
    this.setState({
        ingredients:updatedIngredient,
        TotalPrice :NewPrice})
        this.burgerPurchased(updatedIngredient)
   }


    render(){
        const disableInfo={...this.state.ingredients}; 
        for(let Key in disableInfo){
        disableInfo[Key] = disableInfo[Key] <=0
        console.log(disableInfo[Key])
       };
       
        return(
            <Auxilary>
            
                <Modal Show={this.state.purchasing} 
                close={this.purchasedCancelHandler}>
                    <Ordersummary ingredients={this.state.ingredients}
                    purchasedContinueHandler={this.purchasedContinueHandler}
                    purchasedCancelHandler={this.purchasedCancelHandler}
                    Total_price={this.state.TotalPrice}
                    TotalCalories={this.state.currentCalorie}

                    />
                </Modal>
                 <Burger ingredients={this.state.ingredients}/>
              
           
                
                 <BuildControls 
                 Added={this.addIngredientsHandler}
                  Remove={this.removeIngredientsHandler}
                  disabled={disableInfo}
                  Total_price={this.state.TotalPrice}
                  BurgerCalories={this.state.currentCalorie}
                  TotalCalories={this.addCalories}
                  RemoveCalories={this.RemoveCalories}
                  checkOut={this.state.purchased}
                   ordered={this.purchaseingHandler}/>
                  
              
            </Auxilary>
        );
    }
}
export default BurgerBuilder;