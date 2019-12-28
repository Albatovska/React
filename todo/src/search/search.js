import React from 'react';

const Search = ({searchFunc}) => {

return (
  <div className="search">
   <input
      onChange = {(e) => searchFunc(e) }
      type="text" 
   //   name={'search'}
      className="input" 
      placeholder={"I search..."}/>
  </div>
  )
}

export default Search