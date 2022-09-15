import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Super oferta!! Na compra do 1° pedido você recebe 1 Coca 1lt gratis.
    </Container>
  )
}

export default Announcement