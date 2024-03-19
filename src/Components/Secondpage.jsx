import React from 'react'


const Secondpage = ({ formdata, setformdata }) => {
  return (
    <>

<div className="signup">
      <div className='Container'>
         
        
      
      {/* <div>
        <input type="text" placeholder='Room Number'
          value={formdata.roomnumber} onChange={(event) =>
            setformdata({ ...formdata, roomnumber: event.target.value })}
        />             
      </div> */}
      <div>
        <input type="number" placeholder='Total Rooms'
          value={formdata.totalroom} onChange={(event) =>
            setformdata({ ...formdata, totalroom: event.target.value })} />
      </div>
      </div>
      </div>
    </>
  )
}

export default Secondpage