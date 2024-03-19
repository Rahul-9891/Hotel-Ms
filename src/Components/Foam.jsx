import React, { useState } from 'react'
import FirstPage from './FirstPage'
import Secondpage from './Secondpage'
import ThirdPage from './ThirdPage'
import "../styles/Foam.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const formDefaultValues = {
  name: "",
  email: "",
  totalroom: "",
  rooms:[ 
    {roomNumber : "",
    roomtype : "",
    Amenitys : [],
  }
  ]
  ,
}




const Foam = () => {
  const [page, setpage] = useState(0)
  const [formdata, setformdata] = useState({
      ...formDefaultValues
  })


  console.log(formdata)
  const resetForm = () => {
    setformdata(formDefaultValues)
  }

const navigate = useNavigate()

  const apiCall =() =>{
    
    axios.post('http://localhost:3001/register',  {formdata}  ,{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        // Other headers relevant to your request
      }
      
    })
    .then(result => navigate('/'))
    .catch(err => console.log(err))
  }


const submitForm =  () => {
   
  if(page == 2) {

    apiCall()

 
   resetForm()

  setpage(0)
}

else {
 setpage((currPage) => currPage + 1)
}
 }


const FormTitles = ["Sign Up", "Room Details", "Amenity"]

  

  const PageDisplay = () => {
    
    if (page === 0) {
      return <FirstPage formdata={formdata} setformdata={setformdata}  />
    } else if (page === 1) {
      return <Secondpage formdata={formdata} setformdata={setformdata} />
    }
    else {
      return <ThirdPage formdata={formdata} setformdata={setformdata}  />
    }
  }


  // const isNextDisabled = () => {
  //   if (page === 0) {
  //     return !formdata.name || !formdata.email;
  //   } else if (page === 1) {
  //     return !formdata.roomtype || !formdata.roomnumber || !formdata.totalroom
  //   }
  //   return false;
  // }; 

  // console.log(formdata)
  return (

    <div class='Container'>


      <div className='maincontainer'>
        <div className="foam-container">
          {/* <div className='main-header'> */}
          <div className="header"><h3>{FormTitles[page]}</h3></div>
          <div className='Hading1'><h2>{page===2 ? "Enter Room's Details" : "Enter Guest's Details"}</h2></div>
          {/* </div> */}

          <div className="body">{PageDisplay()}</div>


          <div className="footer" style={{ width: "70%" }}></div>
          <div>
          </div>
          <div className="footer">
            {/* <div>
              <button
                disabled={page == 0}
                onClick={() => { setpage((currPage) => currPage - 1) }}>Prev</button>
            </div> */}
            <div>
              <button 
                disabled={page === 3}
                onClick={submitForm}
              //   onClick={()=> {  if (page === 2) {
              //     submitForm(); 
              //   } else {
              //     setpage((currPage) => currPage + 1);
              //   }
              // }}
                >{page === 2 ? "Submit" : "Next"}</button>
            </div>
          </div>

          <div>
            <link rel="stylesheet" href="Login" />If you already have an account,
          </div>
          <div id='Footer-last'>
          By proceeding i agree to T&C & privacy policy
        </div>
        </div>

        
      </div>

    </div>
  )
}

export default Foam