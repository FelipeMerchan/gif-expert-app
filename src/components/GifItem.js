import React from 'react';

export const GifItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
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
