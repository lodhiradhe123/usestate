import React, { useState }  from 'react'

function Add() {
    const [val,setVal] = useState({name:"radhe",age:23});
  return (
    <div className='p-10 capitalize font-bold'>
        <h3>Add attribute in object</h3>
        <h1>{val.name}</h1>
        <h1>{val.gender}</h1>
        <button className='px-4 py-2 bg-green-400 rounded'  onClick={ ()=>{
              setVal({...val, gender: 'male'});
            console.log(val);
            }} > add attribute</button>
    </div>
  )
}

export default Add