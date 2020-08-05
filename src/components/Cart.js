import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Wrapper>
      <Top>
        <H2>Your Cart</H2>
        <P>0 Item</P>
        <ul>
          <CartItem name="Hello World" quantity={1} />
        </ul>
      </Top>
      <Bottom></Bottom>
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

const Bottom = styled.div``;

export default Cart;
