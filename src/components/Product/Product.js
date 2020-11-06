import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)

    const {img,name,seller,price,stock,key}=props.product
    return (
        <div className="product">
           <div className="image">
             <img src={img} alt=""/>

              </div>

              <div className="product-details">
                <h4><Link to= {"/product/" +key}>{name}</Link></h4>
               
                <p><small>{seller}</small></p>
                 <p>${price}</p>
               
                  <p><small>only {stock} left in Stock</small></p>
            
             {props.showAddToCart && <button  
              className="btn"
              onClick={()=>  props.handleAddProduct(props.product)} 
              >
            <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}

              </div>
           
        </div>

         
    );
};

export default Product;