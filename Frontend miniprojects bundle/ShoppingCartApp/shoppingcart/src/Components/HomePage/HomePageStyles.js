import styled from "styled-components";

export const ContentContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const StyledLi = styled.div`
  border: 1px solid #a3cef1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledUl = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

export const ItemName = styled.div`
  font-weight: bold;
  font-family: cursive;
  gap: 10px;
`;

export const ItemPrice = styled.div`
  font-family: sans-serif;
`;
export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export const StyledForm = styled.form`
  display: none;
  margin-top: 10px;

  &.visible {
    display: block;
  }
`;
