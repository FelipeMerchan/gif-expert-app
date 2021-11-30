import React, { useState, useEffect } from 'react';

import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, [])

  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=AmKuUkYEf0q7pWZvDVyvYucQsqb0oWuJ';
    try {
      const response = await fetch(url);
      const { data } = await response.json();
      const gifs = data.map(img => {
        return {
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url,
        }
      });
      console.log(gifs);
      setImages(gifs);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h3>{category}</h3>
      {
        images.map(img => (
          <GifItem
            key={img.id}
            {...img}
          />
        ))
      }
    </div>
  )
}
