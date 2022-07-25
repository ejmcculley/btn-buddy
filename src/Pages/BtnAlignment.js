import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnAlignment = () => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Alignment</h2>
     <Button 
      text={'Left'}
      onClick={() => {
        navigate('/shadow');
      }}
     />
     <Button 
      text={'Center'}
      onClick={() => {
        navigate('/shadow');
      }}
     />
     <Button 
      text={'Right'}
      onClick={() => {
        navigate('/shadow');
      }}
     />
    </>
  )
}

export default BtnAlignment