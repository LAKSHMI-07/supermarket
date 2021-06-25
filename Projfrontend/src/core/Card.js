import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper";


const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  reload = undefined,
  setReload = f => f,
  //function(f) {return f}
}) => {
  const [redirect, setRedirect] = useState(false);

  const cardTitle = product ? product.name : "A photo from pexels";
  const cartDescription = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "Default price";

    const addToCart = () => {
      if (isAuthenticated()) {
        addItemToCart(product, ()=> setRedirect(true));
        console.log("Added to cart");
      } else {
        console.log("login Please!");
        alert("please login to continue shopping")
      }
    };

    const getAredirect = redirect => {
      if (redirect) {
        return <Redirect to="/cart" />;
      }
    };

    const showAddToCart = (addToCart) => {
      return(
        addtoCart && (
          <button
            onClick={addToCart}
            className="btn btn-warning aab"
          >
            Add to Cart
          </button>
        )
      );
    };

    const showRemoveFromCart = (removeFromCart) => {
      return(
        removeFromCart && (
          <button
            onClick={() => {
              //TODO : Handle this too
              removeItemFromCart(product.id);
              setReload(!reload)
              console.log("Product remove from cart");
            }}
            className="btn btn-danger mt-2 mb-2"
          >
            Remove from cart
          </button>
        )
      );
    };
    
    return (
        <div>
          <div className="card" >
            {getAredirect(redirect)}
            <ImageHelper product={product}/>
            
           <div className="mid-1">
            <div className="women">
              <h5>
              {cardTitle}
              </h5>
            </div>
            </div>
            <div className="mid-2">
            <div className="women">
              <h6> 
              {cartPrice}
              </h6>
            </div>
            </div>
            <br />
            <div className="row">
              <div className="col-15">
                {showAddToCart(addToCart)}
              </div>
              <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
              </div>
              </div>
            
            
            
              
            
            </div>
          </div>
        
      );
    };
  export default Card;