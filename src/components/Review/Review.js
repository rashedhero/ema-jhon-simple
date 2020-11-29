import React, { useEffect, useState } from 'react';
import {  getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import ReviewItem from '../reviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import image from '../../images/giphy.gif'
import { useHistory } from 'react-router-dom';
const Review = () => {
 const [cart,setCart]  = useState([])
 const [orderPlaced,setOrderPlaced]=useState(false)
 const history=useHistory()
 const handleProceedOrder=()=>{
  history.push('/shipment')
  
 }
  const handleRemove=(productKey)=>{
  const newCart=cart.filter(pd=>pd.key!==productKey)
  setCart(newCart)
 removeFromDatabaseCart(productKey)
 }
   useEffect(()=>{
   const savedCart=getDatabaseCart();
   const productsKeys=Object.keys(savedCart)
 
   const cartProducts=productsKeys.map( key =>{
     const product=fakeData.find( pd =>pd.key===key );
     product.quantity=savedCart[key]
     return product;
    });

    setCart(cartProducts)


   }, []);

   let thankyou;
   if (orderPlaced){
     thankyou=<img src={image} alt=""/>
   }
    return (
        <div className="same-container">
         
          <div className="product-container">
          {
               cart.map(pd=><ReviewItem 
                handleRemove={handleRemove}
                product={pd}></ReviewItem>)
           }
           {thankyou}
          </div>
          <div className="cart-container">
           <Cart cart={cart}>
             <button onClick={handleProceedOrder} className="btn">Procced Checkout</button>
           </Cart>
          </div>
        </div>
    );
};

export default Review;