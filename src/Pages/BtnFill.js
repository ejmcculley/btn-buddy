import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnFill = ({ color }) => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Fill</h2>
     <Button 
      text={'Filled In'}
      color={color}
      onClick={() => {
        navigate('/border');
      }}
     />
     <Button 
      text={'Outline'}
      color={color}
      onClick={() => {
        navigate('/border');
      }}
     />
    </>
  )
}

export default BtnFill