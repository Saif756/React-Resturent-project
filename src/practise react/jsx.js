import React, { useState } from 'react'
import ReactDOM from 'react-dom';
 function FavouriteColor () {
  const[color,setColor] = useState("red");
  return(
    <>
    <h1>My favourite color is{color}</h1>
    <button type='button'onClick={() => setColor("blue")}>blue</button>
    {/* <h1>My favourite color is{color}</h1> */}
    <button type='button'onClick={() => setColor("green")}>green</button>
    {/* <h1>My favourite color is{color}</h1> */}
    <button type='button'onClick={() => setColor("red")}>red</button>
    {/* <h1>My favourite color is{color}</h1> */}
    <button type='button'onClick={() => setColor("white")}>white</button>
    </>
  )
  
}
const root = ReactDOM.createRoot(document.createElement('root'));
root.render(<FavouriteColor/>);
