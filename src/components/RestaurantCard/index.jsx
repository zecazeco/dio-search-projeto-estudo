import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import Skeleton from '../Skeleton';

const ResturantCard = ({restaurant, onClick}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name ? restaurant.name : 'nome'}</Title>
        <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
        <Address>{restaurant.formatted_address || restaurant.vicinity}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon}
        onLoad={() => setImageLoaded(true)}
        alt="foto do restaurante"
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default ResturantCard;