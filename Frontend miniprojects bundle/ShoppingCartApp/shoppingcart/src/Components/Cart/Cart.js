import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { ContentContainer } from "../HomePage/HomePageStyles";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  resetCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../ReduxParts/actions/cartActions";
import { updateNumOfItems } from "../../ReduxParts/actions/updateNumOfItems";
import { StyledUl, StyledLi } from "./CartStyles";
import { StyledButton } from "../HomePage/HomePageStyles";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const numOfItems = useSelector((state) => state.numOfItems.numOfItems);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [cartItems]);

  const handleCalculateTotal = () => {
    alert(`You bought items of total price: $${totalPrice.toFixed(2)}`);
    dispatch(resetCart());
    dispatch(updateNumOfItems(0));
  };

  const handleDecreaseQuantity = (element) => {
    dispatch(decreaseQuantity(element));
    const newNumOfItems = numOfItems - 1;
    if (newNumOfItems < 0) {
      dispatch(updateNumOfItems(0));
    } else {
      dispatch(updateNumOfItems(newNumOfItems));
    }
  };

  const handleIncreaseQuantity = (element) => {
    dispatch(increaseQuantity(element));
    const newNumOfItems = numOfItems + 1;
    dispatch(updateNumOfItems(newNumOfItems));
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div>
        <NavigationBar />
        <ContentContainer>
          <p>Your cart is empty.</p>
        </ContentContainer>
      </div>
    );
  }

  return (
    <div>
      <NavigationBar />
      <ContentContainer>
        <StyledUl>
          {cartItems.map((item, index) => (
            <StyledLi key={index}>
              Item: {item.element.title}, Quantity: {item.quantity}, Total
              Price: {item.totalPrice.toFixed(2)}
              <button onClick={() => handleIncreaseQuantity(item.element)}>
                +
              </button>
              <button onClick={() => handleDecreaseQuantity(item.element)}>
                -
              </button>
            </StyledLi>
          ))}
        </StyledUl>
        <StyledButton onClick={handleCalculateTotal}>
          Calculate Total
        </StyledButton>
      </ContentContainer>
    </div>
  );
};

export default Cart;
