import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <section aria-label="Gif list">
      <h3>{category}</h3>

      {loading && 'Cargando...'}

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
