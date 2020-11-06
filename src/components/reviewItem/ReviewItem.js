import React from 'react';

const ReviewItem = (props) => {

    const {name,quantity,key,price}=props.product;
    const{handleRemove}=props.handleRemove
    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'


    }
    return (
        <div style={reviewItemStyle} className="review-item">
          <h4>{name}</h4> 
          <p>quantity:{quantity}</p> 
    <p><small>{price}</small></p>
          <br/>
          <button  className="btn" onClick={()=>(props.handleRemove(key))}>
              Remove item</button>
        </div>
    );
};

export default ReviewItem;