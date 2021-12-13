import React from 'react'

const Favorites = ({list}) => {
  console.log({list});
  return (
    <div className="container">
      {list}
    </div>
  )
}

export default Favorites
