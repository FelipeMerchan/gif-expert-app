import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category)
      .then(setImages)
      .catch(console.error);
  }, [category])

  return (
    <section aria-label="Gif list">
      <h3>{category}</h3>
      <div className="card-grid">
        {
          images.map(img => (
            <GifItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </section>
  )
}
