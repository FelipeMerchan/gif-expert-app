import React from 'react';

export const GifItem = ({ title, url }) => {
  return (
    <div>
      <img
        src={url}
        alt={title}
        title={title}
      />
      <p>{title}</p>
    </div>
  )
}
