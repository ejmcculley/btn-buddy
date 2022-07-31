import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnAlignment = () => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Alignment</h2>
     <Button 
      text={'Left'}
      className={'alignLeft'}
      onClick={() => {
        navigate('/shadow');
      }}
     />
     <Button 
      text={'Center'}
      className={'btn'}
      onClick={() => {
        navigate('/shadow');
      }}
     />
     <Button 
      text={'Right'}
      className={'alignRight'}
      onClick={() => {
        navigate('/shadow');
      }}
     />
    </>
  )
}

export default BtnAlignment