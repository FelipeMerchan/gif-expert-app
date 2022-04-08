import React, { useState } from 'react';

import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
  /* const [categories, setCategories] = useState(['One Punch Man']); */
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  )
}