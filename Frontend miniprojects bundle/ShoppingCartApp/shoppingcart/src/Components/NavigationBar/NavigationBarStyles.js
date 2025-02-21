import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavigationBar = styled.nav`
  background-color: #e0fbfc;
  color: white;
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const StyledLi = styled.li`
  margin: 0 20px;
`;

export const StyledLink = styled(Link)`
  color: #253237;
  text-decoration: none;
  transition: ease-in 0.4s;

  &:hover {
    background-color: #9db4c0;
  }
`;
