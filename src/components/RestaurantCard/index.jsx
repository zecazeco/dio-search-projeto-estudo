import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';


const ResturantCard = ({restaurant, onClick}) => {
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name ? restaurant.name : 'nome'}</Title>
        <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
        <Address>{restaurant.formatted_address || restaurant.vicinity}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon}
        alt="foto do restaurante"
      />
    </Restaurant>
  );
};

export default ResturantCard;