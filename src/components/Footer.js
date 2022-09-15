import styled from "styled-components"
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn, FaMapMarkerAlt} from 'react-icons/fa'
import {AiFillPhone, AiOutlineMail} from 'react-icons/ai'
import { mobile } from "../responsive"
const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.h1`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })};
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })};
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>WESLEY.</Logo>
            <Desc></Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <BsFacebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <BsInstagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <BsTwitter />
                </SocialIcon>
                <SocialIcon color="0e76a8">
                    <FaLinkedinIn />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links úteis</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Xbox</ListItem>
                <ListItem>PS4</ListItem>
                <ListItem>PC</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <FaMapMarkerAlt style={{marginRight:"10px"}}/> Rua Três Fronteiras, 455 - 02679-100
            </ContactItem>
            <ContactItem>
                <AiFillPhone style={{marginRight:"10px"}}/> +55 11 9460-11417
            </ContactItem>
            <ContactItem>
                <AiOutlineMail style={{marginRight:"10px"}}/> wesleymarquees329@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer