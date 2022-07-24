import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnShape = () => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Shape</h2>
     <Button 
      text={'Sharp'}
      onClick={() => {
        navigate('/fill');
      }}
     />
     <Button 
      text={'Safe'}
      onClick={() => {
        navigate('/fill');
      }}
     />
     <Button 
      text={'Pill'}
      onClick={() => {
        navigate('/fill');
      }}
     />
     <Button 
      text={'Circle'}
      onClick={() => {
        navigate('/fill');
      }}
     />
    </>
  )
}

export default BtnShape