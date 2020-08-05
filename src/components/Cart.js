import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);
  let totalPrice = 0;
  storeItems.forEach((item) => {
    totalPrice = totalPrice + item.price * item.quantity;
  });
  return (
    <Wrapper>
      <Top>
        <H2>Your Cart</H2>
        <P>0 Item</P>
        <ul>
          {storeItems.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </ul>
      </Top>
      <Bottom>
        <span>Total: ${totalPrice / 100}</span>
        <button>Purchase</button>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: sticky;
  top: 0px;
  min-width: 300px;
  height: 100vh;
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background: rgb(64, 31, 67);
`;

const Top = styled.div`
  margin: 0 10px;
  ul {
    padding: 5px;
  }
`;
const H2 = styled.h2`
  margin-left: 20px;
  margin-bottom: -8px;
`;
const P = styled.p`
  margin-left: 20px;
  color: lightgray;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  span {
    font-size: xx-large;
  }
  button {
    color: white;
    background-color: #ff406e;
    padding: 8px;
    border-radius: 12px;
    font-size: x-large;
  }
`;

export default Cart;
