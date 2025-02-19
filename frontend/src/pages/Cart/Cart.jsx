import React, { useContext, useEffect } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom'

const cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalAmount, url } = useContext(StoreContext);


  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            let quantity = cartItems[item._id];
            if (quantity > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={url + '/images/' + item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{quantity}</p>
                    <p>{item.price * quantity}</p>
                    <p onClick={() => { removeFromCart(item._id) }} className='cross'>X</p>
                  </div>
                  <hr />
                </div>
              )
            }
          })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivey fee</p>
              <p>₹{getTotalAmount() === 0 ? 0 : 20}</p>
            </div>
            <hr />
            <div className="cart-total-details bold">
              <p>Total</p>
              <p>₹{getTotalAmount() === 0 ? 0 : getTotalAmount() + 20}</p>
            </div>
            
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promocode , enter it here</p>
          <div className="promocode-input">
            <input type="text" placeholder='enter promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cart