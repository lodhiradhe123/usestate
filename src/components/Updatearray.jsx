import React, { useState } from 'react'

function Updatearray() {
    const [val, setVal] = useState([1,2,3,4,5,6,7,8,9,10]) 
  return (
    <div  className='p-10'>
        <h3 className='font-semibold'>{val.map((ele)=><h1>{ele}</h1>)}</h3>
        <button className='px-4 py-2 bg-green-400 rounded' onClick={()=>setVal(val.filter((item,index)=>index!=val.length-1))}  > arrayupdate</button>


    </div>
    
  )
}

export default Updatearray;