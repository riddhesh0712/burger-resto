import React from 'react'

export const card = (props) => {
  return (
    <div>
        <div className='text-center'>
            <h3>{props.productname}</h3>
            <img src={props.productImg} alt="" />
            <p>{props.price}</p>
            <p>{props.productDesc}</p>
            <button className="bg-white text-red-600 py-3 px-16 rounded-3xl text-xl font-bold">
              ORDER NOW
            </button>
        </div>
    </div>
  )
}
export default card