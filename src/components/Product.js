import { BsFillCartFill, BsSearch, BsHeart} from 'react-icons/bs'
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  max-width: 400px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;


const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <BsFillCartFill />
        </Icon>
        <Icon>
          <BsSearch />
        </Icon>
        <Icon>
          <BsHeart />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;