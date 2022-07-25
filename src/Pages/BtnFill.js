import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnFill = () => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Fill</h2>
     <Button 
      text={'Filled In'}
      onClick={() => {
        navigate('/border');
      }}
     />
     <Button 
      text={'Outline'}
      onClick={() => {
        navigate('/border');
      }}
     />
    </>
  )
}

export default BtnFill