import React, {useState, useEffect} from "react";
import Base from "./Base";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { loadCart } from "./helper/cartHelper";
import CardItem from "./CartItem";
import CartTotal from "./CartTotal";


const Cart = () => {
  const [reload, setReload] = useState(false)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(loadCart());
}, [reload]);

    return (
      <section>
      <div>
         <Base />
         <div class="container">
	       <div class="spec ">
				<h3>My Cart</h3>
					<div class="ser-t">
						<b></b>
						<span><i></i></span>
						<b class="line"></b>
					</div>
			</div>
           
            <div>
              {products.length > 0 ? 
              (
                <div className="continer">
            <CartColumns />
          {products.map( (product, index) => {
          return (
          <div key={index}>
            <CardItem
          key={index}
          product={product}
          removeFromCart={true}
          addtoCart={false}
          reload={reload}
          setReload={setReload} />
          </div>
          );})}
        <br/>
        <br/>
         <CartTotal />
        </div>
              ) :
              (
                <EmptyCart />
              )}
            </div>
        </div>
        </div>
        
        
      </section>
      
    );
};

export default Cart;