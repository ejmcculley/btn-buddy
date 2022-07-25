import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnHover = () => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Hover Effect</h2>
     <Button 
      text={'Lil Push'}
      onClick={() => {
        navigate('/results');
      }}
     />
     <Button 
      text={'Hi-Lights'}
      onClick={() => {
        navigate('/results');
      }}
     />
     <Button 
      text={'Something Cool'}
      onClick={() => {
        navigate('/results');
      }}
     />
     <Button 
      text={'Something Crazy'}
      onClick={() => {
        navigate('/results');
      }}
     />
    </>
  )
}

export default BtnHover