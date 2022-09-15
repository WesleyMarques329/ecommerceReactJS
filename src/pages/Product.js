import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

import {IoIosRemove} from 'react-icons/io'
import {GrAdd} from 'react-icons/gr'
import { mobile } from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })};
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })};
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })};
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`
const Filter = styled.div`
    display: flex;
    align-items; center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterPlat = styled.option`

`
const FilterEdition = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterEditionOption = styled.option`

`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span` 
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &hover: {
        background-color: #f8f4f4;
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
            <Image src="https://sm.ign.com/ign_pt/news/e/elden-ring/elden-ring-has-been-designed-to-reduce-player-stress-without_ke3p.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>hahahahahah</Title>
                <Desc></Desc>
                <Price>R$: 190,00</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Plataforma</FilterTitle>
                        <FilterEdition>
                            <FilterPlat>PC</FilterPlat>
                        </FilterEdition>
                    </Filter>
                    <Filter>
                        <FilterTitle>Edição</FilterTitle>
                        <FilterEdition>
                            <FilterEditionOption>Deluxe Edition</FilterEditionOption>
                        </FilterEdition>
                    </Filter>
                </FilterContainer>
                <AddContainer>

                    <AmountContainer>
                        <IoIosRemove />
                        <Amount>1</Amount>
                        <GrAdd />
                    </AmountContainer>
                    <Button>CARRINHO</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product