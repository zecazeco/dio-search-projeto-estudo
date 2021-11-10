import styled from 'styled-components';
import Slider from "react-slick";

export const Wrapper = styled.div`
  display: flex;
`;

  //background-color: ${(props) => props.theme.colors.background};
export const Aside = styled.aside`
  background-color: #ffffff;
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  max-width: 100%;
  width: 150px;
  margin: 20px auto;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  margin: 5px 0px;
`;

export const CarouselSection = styled.section`
  padding: 16px;
`;

export const CarouselItems = styled(Slider)`
  .slick-slide {
    margin-right: 10px;
  }
`; 

export const ListSection = styled.section`
  font-family: ${(props) => props.theme.fonts.regular};
  margin: 5px 0px;
`;

export const Map = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  text-transform: none;
  line-height: 19px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  text-transform: none;
  line-height: 19px;
  font-size: 16px;
  font-weight: normal;
`;
