import React from 'react';

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img
        className="card__img"
        src={url}
        alt={title}
        title={title}
      />
      <p className="card__title">{title}</p>
    </div>
  )
}
