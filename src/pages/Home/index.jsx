import React, { useState } from "react";
import Slider from "react-slick";

import TextField, { Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { ImageCard, RestaurantCard, Modal } from "../../components";

import { Wrapper, Aside, HeaderSection, Logo, CarouselSection, CarouselItems, Map, Title, ListSection } from "./styles";

const Home = () => {
  const [inputValue, setImputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

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
          <CarouselItems {...settings}>
            <ImageCard photo={restaurante} title="nome do restaurante" />
            <ImageCard photo={restaurante} />
            <ImageCard photo={restaurante} />
            <ImageCard photo={restaurante} />
            <ImageCard photo={restaurante} />
            <ImageCard photo={restaurante} />
            <ImageCard photo={restaurante} />
          </CarouselItems>
          <button onClick={() => setModalOpened(true)}>Abrir modal</button>
        </CarouselSection>
        <ListSection>
          <RestaurantCard />
        </ListSection>
      </Aside>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );

};

export default Home;
