import styled from "styled-components";

export const StyledHomeContainer = styled.div`
    font-family: ${props => props.theme.fonts.body};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const StyledChartsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

export const StyledPeopleContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const StyledUl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none; 
  border : ${props => props.theme.border};
  border-radius: 5px;
  padding: 0; 
  margin-bottom: 10px;
  height: 400px;
  margin-top: 0;
  overflow-y: auto;
`

export const StyledUlPagination = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  border: ${props => props.theme.border};
  border-radius: 5px;
  padding: 0;
  margin-bottom: 10px;
  height: 50px;
  width: 300px;
  margin-top: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap; 
`;

export const StyledLi = styled.div`
flex: 0 0 auto;
display: flex;
overflow: none;
border : ${props => props.theme.border};
border-radius: 1px;
border-width: 1.5px;

&:hover {
    background-color: ${props => props.theme.colors.background};
}
`

export const StyledElementContainer = styled.div`
`


export const TwoColumnLabelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 10px; 
  align-items: center; 

  label {
    text-align: right; 
  }
`;