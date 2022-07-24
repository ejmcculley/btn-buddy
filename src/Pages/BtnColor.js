import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnColor = () => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Color</h2>
     <Button 
      text={'Nice Color!!!'}
      onClick={() => {
        navigate('/shape');
      }}
     />
    </>
  )
}

export default BtnColor