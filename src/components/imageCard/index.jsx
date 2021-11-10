import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Skeleton from '../Skeleton';

const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  p {
    margin-left: 6px;
    margin-top: 10px;
  }
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #fff;
  font-size: 14px;
`;

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>
            {title}
          </Title>
        </Card>
      ) : (
        <Skeleton width="60px" height="60px" />
      )}
    </>
  );
};

export default ImageCard;