import React from 'react'
import styled from "styled-components";
import { BsSearch } from 'react-icons/bs'
import { BsFillCartFill} from 'react-icons/bs'
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
`;

const SearchContainer = styled.div `
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  font-family: 'Urbanist';font-size: 25px;
  text-transform: uppercase;
  ${mobile({ fontSize: "24px" })};
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })};
`
const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder='Search'/>
          <BsSearch style={{color:'black', fontSize:15}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>Wesley.</Logo></Center>
        <Right>
            <MenuItem>Cadastro</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>
            <BsFillCartFill />
            </MenuItem>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar