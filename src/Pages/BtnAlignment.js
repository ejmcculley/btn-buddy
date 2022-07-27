import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnAlignment = ({ color }) => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Alignment</h2>
     <Button 
      text={'Left'}
      color={color}
      onClick={() => {
        navigate('/shadow');
      }}
     />
     <Button 
      text={'Center'}
      color={color}
      onClick={() => {
        navigate('/shadow');
      }}
     />
     <Button 
      text={'Right'}
      color={color}
      onClick={() => {
        navigate('/shadow');
      }}
     />
    </>
  )
}

export default BtnAlignment