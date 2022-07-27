import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnShadow = ({ color }) => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Shadow</h2>
     <Button 
      text={'Flat'}
      color={color}
      onClick={() => {
        navigate('/results');
      }}
     />
     <Button 
      text={'Business Class'}
      color={color}
      onClick={() => {
        navigate('/results');
      }}
     />
     <Button 
      text={'Vampire'}
      color={color}
      onClick={() => {
        navigate('/results');
      }}
     />
    </>
  )
}

export default BtnShadow