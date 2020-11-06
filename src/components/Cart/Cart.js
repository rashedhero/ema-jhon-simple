import React from 'react';


const Cart = (props) => {
    const cart=props.cart;
    // console.log(cart);
    const total=cart.reduce((total,pd)=>total+pd.price*pd.quantity,0);
  
    let shipping =0;
    if (total>35){
        shipping=0;
    }
    else if (total>15){
        shipping=4.99;
    }
    else if (total>0)
     shipping=12.99;

     const tax =(total/10).toFixed(2);
     const grandtotal=(total+shipping+Number(tax)).toFixed(2);
    return (
    <div>
        <h4 style={{color:'black' }}>Order Summary</h4>
        <h4 style={{color:'black' }}>Order Summary: {cart.length} </h4> 
        <p>product Price:{total}</p>
        <p><small>shipping Cost:{shipping}</small></p>
        <p><small>Tax & Vat:{tax}</small></p>
        <p>Total Price:{grandtotal}</p>
        <br/>
       
        {props.children}
       
        
        </div>
    );
};

export default Cart;