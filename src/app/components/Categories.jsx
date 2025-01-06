import React from 'react'
import { Course_Card } from "./Course_Card";
import { Categories_Content } from '../lib/constant';

const Categories = () => {
  // const data = Categories_Content;
  const data = React.useMemo(() => Categories_Content, []);
  const getRandomColor = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFD166', '#6B5B95', '#FF9F1C', '#2EC4B6'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const darkenColor = (color) => {
    // Simple function to darken the color
    let hex = color.startsWith('#') ? color.substring(1) : color;
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r = Math.max(0, r - 30);  // Darken by 30
    g = Math.max(0, g - 30);
    b = Math.max(0, b - 30);

    return `#${(1 << 24) | (r << 16) | (g << 8) | b
      .toString(16)
      .slice(1)}`;
  };


  return (
    <>
      <h1 className='text-2xl font-bold font-montserrat ml-3
      border-b-4 border-yellow-400 inline-flex max-sm:text-xl'
      >Explore Courses by Category</h1>
      <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-4 p-2'>
        {
          data.map((items, index) => {
            const iconColor = getRandomColor();
            const darkerColor = darkenColor(iconColor);
            return (
              <Course_Card key={index}
                title={items.title}
                description={items.description}
                key_features={items.Key_Features}
                cta={items.CTA} Icon={items.icon}
                iconColor={iconColor}
                darkerColor={darkerColor} />
            )
          })
        }
      </div>
    </>
  )
}

export default Categories
