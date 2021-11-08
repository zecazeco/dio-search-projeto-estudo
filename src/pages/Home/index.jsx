import React, { useState } from "react";
import Slider from "react-slick";

import TextField, { Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Wrapper, Aside, HeaderSection, Logo, CarouselSection, Map, Title, ListSection } from "./styles";

const Home = () => {
  const [inputValue, setImputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Aside>
        <HeaderSection>
          <Logo src={logo} alt='logo do aplicativo' />
          <TextField
            label='Pesquisar'
            outlined
            //onTrailingIconSelect={() => this.setState({value: ''})}
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setImputValue(e.target.value)} />
          </TextField>        
        </HeaderSection>
        <CarouselSection>
          <Title>Resultado:</Title>
          <Slider {...settings}>
            <div><img src={restaurante} alt='imagem padrao do carrossel' /></div>
            <div><img src={restaurante} alt='imagem padrao do carrossel' /></div>
            <div><img src={restaurante} alt='imagem padrao do carrossel' /></div>
            <div><img src={restaurante} alt='imagem padrao do carrossel' /></div>
            <div><img src={restaurante} alt='imagem padrao do carrossel' /></div>
          </Slider>
        </CarouselSection>
        <ListSection>
          <li>item</li>
        </ListSection>
      </Aside>
      <Map />
    </Wrapper>
  );

};

export default Home;
