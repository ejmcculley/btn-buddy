import Button from "components/Button"
import { useNavigate } from 'react-router-dom'
import BtnShape from "./BtnShape";
import useAttribute from "useAttribute";

const BtnColor = ({ color, textColor }) => {
  let navigate = useNavigate();
  return (
    <>
     <h2>Choose your Color</h2>
     
     <Button 
      text='Select'
      color={color}
      value={color}
      textColor={textColor}
      // set onClick to setBtnAttribute 
      onClick={() => {
      e => setBtnAttribute({ backgroundColor: e.target.value })
      navigate('/shape');
      }}
     >
      <BtnShape color={color} />
     </Button>
      
   
    </>
  )
}

export default BtnColor