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
  return (
    <>
      <h1 className='text-2xl font-bold font-montserrat ml-3
      border-b-4 border-yellow-400 inline-flex'
      >Explore Courses by Category</h1>
      <div className='grid grid-cols-3 gap-4 p-2'>
        {
          data.map((items, index) => {
            const iconColor = getRandomColor();
            return (
              <Course_Card key={index}
                title={items.title}
                description={items.description}
                key_features={items.Key_Features}
                cta={items.CTA} Icon={items.icon}
                iconColor={iconColor} />
            )
          })
        }
      </div>
    </>
  )
}

export default Categories
