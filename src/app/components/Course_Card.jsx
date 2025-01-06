import React from 'react'

export const Course_Card = ({ title, description, key_features, cta, Icon, alt, iconColor }) => {

  return (
    <>
      <div className='hover:bg-slate-200 transition-standard flex
      flex-col gap-2 justify-start items-start
       bg-slate-100 rounded-md p-2'>
        <div className={` inline-flex shadow rounded-full p-3`}
          style={{
            backgroundColor: iconColor
          }}>
          <Icon color='white' className='text-xl' />
        </div>
        <h6 className='font-bold text-2xl font-playfair'>{title}</h6>
        <p className='font-light'>{description}</p>
        <ul className='list-disc pl-5'>
          {key_features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className=' text-white
        py-2 px-4 rounded-md hover:bg-indigo-600 transition-standard'
          style={{
            backgroundColor: iconColor
          }}
        >{cta}</button>
      </div >
    </>
  )
}
