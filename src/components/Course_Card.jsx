import React from 'react'

export const Course_Card = ({ title, description, key_features, cta, Icon, alt, iconColor, darkerColor }) => {
  console.log(iconColor, darkerColor)

  return (
    <>
      <div className='hover:bg-slate-200 transition-standard flex flex-col gap-2 justify-start items-start bg-slate-100 rounded-md p-2'>
        <div className={`inline-flex shadow rounded-full p-3 max-sm:p-2`} style={{ backgroundColor: iconColor }}>
          <Icon color='white' className='text-xl max-sm:text-xl' />
        </div>
        <h6 className='font-bold text-2xl max-sm:text-xl font-playfair'>{title}</h6>
        <p className='font-light max-sm:text-sm'>{description}</p>
        <ul className='list-disc pl-5 max-sm:text-sm'>
          {key_features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button
          className={`text-white max-sm:text-sm py-2 px-4
            rounded-md hover:bg-indigo-600
            active:bg-[${darkerColor}] hover:bg-[${darkerColor}]
            transition-all duration-150`}
          style={{
            backgroundColor: iconColor
          }}
        >
          {cta}
        </button>
      </div>
    </>
  );
}
