import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnHover = ({ color }) => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Hover Effect</h2>
     <Button 
      text={'Lil Push'}
      color={color}
      onClick={() => {
        navigate('/results');
      }}
     />
     <Button 
      text={'Hi-Lights'}
      color={color}
      onClick={() => {
        navigate('/results');
      }}
     />
     <Button 
      text={'Something Cool'}
      color={color}
      onClick={() => {
        navigate('/results');
      }}
     />
     <Button 
      text={'Something Crazy'}
      color={color}
      onClick={() => {
        navigate('/results');
      }}
     />
    </>
  )
}

export default BtnHover