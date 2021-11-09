import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Restaurant, RestaurantInfo, Content, Text, RestaurantPhoto } from './styles';


const ResturantCard = ({restaurant}) => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Text>{restaurant.name ? restaurant.name : 'nome'}</Text>
        <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
        <Content>{restaurant.formatted_address || restaurant.vicinity}</Content>
      </RestaurantInfo>
      <RestaurantPhoto
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon}
        alt="foto do restaurante"
      />
    </Restaurant>
  );
};

export default ResturantCard;