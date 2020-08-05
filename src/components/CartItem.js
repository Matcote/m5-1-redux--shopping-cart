import React from "react";
import styled from "styled-components";

const CartItem = ({ quantity, name }) => {
  return (
    <Wrapper>
      <Top>
        <h2>{name}</h2>
        <button>X</button>
      </Top>
      <p>
        Quantity: <input type="text" value={quantity} />
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border: 2px dashed darkgray;
  margin-top: 15px;
  h2 {
    padding-left: 15px;
    display: inline-block;
  }
  p {
    margin: 0;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.25);
    color: darkgray;
  }
  input {
    background: transparent;
    border: none;
    border-bottom: 3px solid white;
    color: white;
    font-weight: bold;
    width: 25px;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    font-size: x-large;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    width: 60px;
  }
`;

export default CartItem;
