import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.2),
         rgba(255,255,255,0.2)
         ),
         url("https://nosbastidores.com.br/wp-content/uploads/2020/11/thumb-1920-1077272.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
    `
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })};
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 15px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CRIE UMA CONTA</Title>
            <Form>
                <Input placeholder="Nome" />
                <Input placeholder="Usuário" />
                <Input placeholder="E-mail" />
                <Input placeholder="CPF" />
                <Input placeholder="Senha" />
                <Input placeholder="Confirmação de Senha" />
                <Agreement>
                Ao criar uma conta, você concorda com as nossas Politicas de Privacidade.
                </Agreement>
                <Button>CREATE</Button>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register