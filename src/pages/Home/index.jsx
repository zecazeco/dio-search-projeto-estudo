import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Slider from "react-slick";

import TextField, { Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { ImageCard, RestaurantCard, Modal, Map } from "../../components";

import { Wrapper, Aside, HeaderSection, Logo, CarouselSection, CarouselItems, Title, ListSection } from "./styles";

const Home = () => {
  const [inputValue, setImputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery] = useState('');
  const { restaurants } = useSelector((state) => state.restaurants);
  
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
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
            <Input 
              value={inputValue} 
              onKeyPress={handleKeyPress} 
              onChange={(e) => setImputValue(e.target.value)} 
            />
          </TextField>        
        </HeaderSection>
        <CarouselSection>
          <Title>Resultado:</Title>
          <CarouselItems {...settings}>
            {restaurants.map((restaurant) => (
              <ImageCard 
                key={restaurant.place_id}
                photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon}
                title={restaurant.name ? restaurant.name : 'nome'}
              />
            ))}
          </CarouselItems>
        </CarouselSection>
        <ListSection>
          {restaurants.map((restaurant) => (
            <RestaurantCard
            key={restaurant.place_id}
            restaurant={restaurant}
            />
          ))}
         
        </ListSection>
      </Aside>
      <Map query={query} />
    
    </Wrapper>
  );

};

export default Home;
