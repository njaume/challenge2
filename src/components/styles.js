import styled from "styled-components";

// Styled component named StyledButton
export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 1em;
`;

export const ListItemImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 1em;
`;

export const ProductListTitle = styled.h2`
  color: black;
  text-align: left;
`;

export const ProductListPrice = styled.div`
  text-align: left;
  color: gray;
  font-weight: 600;
`;

export const RoundedButton = styled.button`
  border: 1px solid black;
  text-align: center;
  background-color: green;
  color: white;
  border-radius: 4px;
  padding: 0.5em 1em;
  font-size: 20px;
`;

export const ItemLeftContent = styled.div`
  display: flex;
  width: 70%;
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5em;
  border-radius: 4px;
  margin-bottom: 1em;
`;

export const DetailImage = styled.img`
  min-width: 400px;
  min-height: 400px;
  margin-right: 2em;
`;

export const DetailDescription = styled.div`
  word-wrap: break-word;
  font-weight: lighter;
  text-align: left;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  border-radius: 4px;
  margin-bottom: 1em;
  background-color: green;
  opacity: .5;
  color: white;
`;
