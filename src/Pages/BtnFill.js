import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnFill = () => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Fill</h2>
     <Button 
      text={'Filled In'}
      className={'filled'}
      onClick={() => {
        navigate('/border');
      }}
     />
     <Button 
      text={'Outline'}
      className={'outline'}
      onClick={() => {
        navigate('/border');
      }}
     />
    </>
  )
}

export default BtnFill