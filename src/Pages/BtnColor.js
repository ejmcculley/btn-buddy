import Button from "components/Button"
import { useNavigate } from 'react-router-dom'
import { useState } from "react";


const BtnColor = () => {
  const [btnColor, setBtnColor] = useState('btn');
  const handleAddColor = (e) => {
    setBtnColor((btnColor) => e.target.value)
  }
  let navigate = useNavigate();
  
  return (
    <>
    <style>
      {
        `
        .red {background-color: red}
        .green {background-color: green}
        .blue {background-color: blue}
        `
      }
    </style>

     <h2>Choose your Color</h2>
     
     <Button 
      text='Select'
      className={`btn ${btnColor}`}
      value={'blue'}
      onClick={handleAddColor} {...navigate('/shape')}
     />   
    </>
  )
}


export default BtnColor