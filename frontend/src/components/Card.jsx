import React from 'react'

export default function Card(props) {
    const {title, author, cover} = props;
    const imgSrc =`https://covers.openlibrary.org/b/id/${cover}-L.jpg`
  return (
    <div className='h-auto w-72 flex flex-col bg-slate-400 rounded-lg'>
        <img className='object-cover h-full w-full rounded-lg' src={imgSrc} alt="alt image" />
      <div className='m-5 font-bold text-lg'>
        <h2>{title}</h2>
        <h3 className='font-thin'>{author}</h3>
      </div>
    </div>
  )
}
