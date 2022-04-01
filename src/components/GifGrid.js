import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <section aria-label="Gif list">
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Cargando...</p>}

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
