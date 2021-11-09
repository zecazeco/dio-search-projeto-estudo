import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Restaurant, RestaurantInfo, Content, RestaurantPhoto } from './styles';


const ResturantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>

        <ReactStars count={5} value={3.5} edit={false} isHalf activeColor="#e7711c" />

      </RestaurantInfo>

    </Restaurant>
  );
};

export default ResturantCard;