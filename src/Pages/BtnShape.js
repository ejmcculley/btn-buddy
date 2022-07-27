import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnShape = ({ color, textColor, border }) => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Shape</h2>
     <Button 
      text={'Sharp'}
      color={color}
      border={border}
      onClick={() => {
        navigate('/fill');
      }}
     />
     <Button 
      text={'Safe'}
      color={color}
      textColor={textColor}
      onClick={() => {
        navigate('/fill');
      }}
     />
     <Button 
      text={'Pill'}
      color={color}
      onClick={() => {
        navigate('/fill');
      }}
     />
     <Button 
      text={'Circle'}
      color={color}
      onClick={() => {
        navigate('/fill');
      }}
     />
    </>
  )
}

export default BtnShape