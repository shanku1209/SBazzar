import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import CheckoutSteps from '../component/CheckoutSteps'
function PlaceOrderScreen(props){
    const cart=useSelector(state=> state.cart);
    const {cartItems,shipping,payment}=cart;
    if (!shipping.address) {
        props.history.push("/shipping");
      } else if (!payment.paymentMethod) {
        props.history.push("/payment");
      }
    const dispatch= useDispatch();
    useEffect(()=>{
        
    },[])
    const checkoutHandler=()=>{
      props.history.push('/signin?redirect=/');
    }
    return <div> 
    <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
    <div className="placeorder">
    <div className="placeorder-info">
    <div>
        <h3>Shipping</h3>
    </div>
    <div>
        {cart.shipping.address},{cart.shipping.city},
        {cart.shipping.postalCode},{cart.shipping.country}
    </div>
    <div>
        <h3>Payment</h3>
        <div>
            Payment method:{cart.payment.paymentMethod},
            {cart.payment.paymenttMethod}
        </div>
    </div>
      <div>
      <ul className="cart-list-container">
        <li>
          <h3>
            Shopping Cart
          </h3>
          <div>
            Price
          </div>
        </li>
        {
          cartItems.length === 0 ?
            <div>
              Cart is empty
          </div>
            :
            cartItems.map(item =>
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                

                  </div>
                  <div>
                    Qty:{item.qty} 
                  </div>
                </div>
                <div className="cart-price">
                <Link to={"/product/" +item.product }>
                  Rs{item.price}
                  </Link>
                </div>
              </li>
            )
        }
      </ul>

      </div>
    </div>
    <div className="placeorder-action">
      <h3>
        Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
        :
         Rs {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
      </h3>
      <button onClick={checkoutHandler}  className="button primary full-width" >
        Proceed to Checkout
      </button>

    </div>

  </div>
    </div>
   
}
export default PlaceOrderScreen;