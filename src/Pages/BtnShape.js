import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnShape = () => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Shape</h2>
     <Button 
      text={'Sharp'}
      className={'sharp'}
      onClick={() => {
        navigate('/fill');
      }}
     />
     <Button 
      text={'Safe'}
      className={'safe'}
      onClick={() => {
        navigate('/fill');
      }}
     />
     <Button 
      text={'Pill'}
      className={'pill'}
      onClick={() => {
        navigate('/fill');
      }}
     />
     <Button 
      text={'Circle'}
      className={'circle'}
      onClick={() => {
        navigate('/fill');
      }}
     />
    </>
  )
}

export default BtnShape