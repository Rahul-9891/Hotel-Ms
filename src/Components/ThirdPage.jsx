import React from 'react';
// import { useState } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import "../styles/Thirdpage.css";

const ThirdPage = ({ formdata, setformdata }) => {
  const totalRooms = parseInt(formdata.totalroom, 10);
  const myarray = Array.from({ length: totalRooms }, (_, index) => index + 1);
  // console.log(myarray)

  const options = [
    { value: 'Standard', label: 'Standard' },
    { value: 'Economy', label: 'Economy' },
    { value: 'Delux', label: 'Delux' }
  ];
  const Amenity = [
    { value: 'A/C', label: 'A/C' },
    { value: 'Non A/C', label: 'Non A/C' },
    { value: 'Wifi', label: 'Wifi' }
  ];
  const Multidropdown = makeAnimated();

  const handleRoomChange = (index, field, value) => {
    setformdata((prevFormData) => {
      const updatedRooms = [...prevFormData.rooms];
      updatedRooms[index] = {
        ...updatedRooms[index],
        [field]: value,
      };

      return {
        ...prevFormData,
        rooms: updatedRooms,
      };
    });
  };

  // const handleRoomtype = (e)=>{
  // setformdata({ ...formdata, roomtype: e.value});
  // }

// const handleAmenity = (e) => {
//   setformdata({ ...formdata, Amenitys: e});
// }

  return (
    < >
    <div id='horizontal'>
      {myarray.map((RoomNumber, index) => (
        <div className='Containers' key={RoomNumber}>
          <div className='data'>
            <div>
              <h5 className='multi-Head'>Room Number</h5>
            </div>
            <div className='data-input'>
              <input
                type="text"
                value={formdata.rooms[index]?.roomNumber || ""}
                onChange={(event) => handleRoomChange(index, 'roomNumber', event.target.value)}
                // value={formdata.rooms.roomNumber} 
                //  onChange={(event) => setformdata({ ...formdata, roomNumber: event.target.value })} 
                 />
            </div>
          </div>
          <div className='data'>
            <div>
              <h5 className='multi-Head'>Room Type</h5>
            </div>
            <div>
              <Select             
                options={options}
                value={options.find(option => option.value === formdata.rooms[index]?.roomtype)}
                onChange={(selectedOption) => handleRoomChange(index, 'roomtype', selectedOption.value)}
              />
            </div>
          </div>
          <div className='data'>
            <div>
              <h5 className='multi-Head'>Amenity</h5>
            </div>
            <div>
              <Select
                closeMenuOnSelect={false}
                components={Multidropdown}  
                isMulti
                options={Amenity}
                value={Amenity.filter(option => formdata.rooms[index]?.Amenitys?.includes(option.value))}
                  onChange={(selectedOptions) => handleRoomChange(index, 'Amenitys', selectedOptions.map(option => option.value))}
                // value={formdata.rooms.Amenitys} 
                // onChange ={(event)=> setformdata({...formdata, Amenitys: event})}
                
              />
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default ThirdPage;