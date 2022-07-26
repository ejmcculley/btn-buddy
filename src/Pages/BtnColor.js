import Button from "components/Button"
import { useState } from "react";
import { ChromePicker } from 'react-color';
import { useNavigate } from 'react-router-dom'

const BtnColor = () => {
  const [color, setColor] = useState('#5750ff')
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Color</h2>
    <ChromePicker
      color={color}
      onChange={updatedColor => setColor(updatedColor.hex)}
     />
     <Button 
      color={color}
      onClick={() => {
        navigate('/shape');
      }}
     />
    </>
  )
}

export default BtnColor