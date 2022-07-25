import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnShadow = () => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Shadow</h2>
     <Button 
      text={'Flat'}
      onClick={() => {
        navigate('/hover');
      }}
     />
     <Button 
      text={'Business Class'}
      onClick={() => {
        navigate('/hover');
      }}
     />
     <Button 
      text={'Vampire'}
      onClick={() => {
        navigate('/hover');
      }}
     />
    </>
  )
}

export default BtnShadow