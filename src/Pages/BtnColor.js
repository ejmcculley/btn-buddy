import Button from "components/Button"
import { useNavigate } from 'react-router-dom'
import BtnShape from "./BtnShape";

const BtnColor = ({ color, textColor }) => {
  let navigate = useNavigate();
  return (
    <>
     <h2>Choose your Color</h2>
     
     <Button 
      text='Select'
      color={color}
      textColor={textColor}
      onClick={() => {
      navigate('/shape');
      }}
     >
      <BtnShape color={color} />
     </Button>
      
   
    </>
  )
}

export default BtnColor