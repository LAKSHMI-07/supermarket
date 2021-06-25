import React, {useState, useEffect} from "react";
import PaymentB from "./PaymentB";
import { loadCart } from "./helper/cartHelper";
import Base from "./Base";

const Checkout = () => {
  const [reload, setReload] = useState(false)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(loadCart());
}, [reload]);


const loadCheckout = () => {
    return (
        <div>
            <h1>Checkout</h1>
        </div>
    );
};
      return (
        <section>
        <div>
           <Base />
           <br />
           <br />
           <div class="container">
             <div class="spec ">
                  <h4>Make your Payment</h4>
                      <div class="ser-t">
                          <b></b>
                          <span><i></i></span>
                          <b class="line"></b>
                      </div>
              </div>
              <br />
              <br />

            <div> 
              <div className="col-15">
              <PaymentB products={products} loadcheckout={loadCheckout} setReload={setReload} />
              </div>
          </div>
          </div>
          
          </div>
        </section>
        
      );
  };
  
  export default Checkout;