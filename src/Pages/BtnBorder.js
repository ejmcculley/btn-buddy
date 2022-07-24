import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnBorder = () => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Border</h2>
     <Button 
      text={'Nakey'}
      onClick={() => {
        navigate('/alignment');
      }}
     />
     <Button 
      text={'Thin Mint'}
      onClick={() => {
        navigate('/alignment');
      }}
     />
     <Button 
      text={'Thick Boi'}
      onClick={() => {
        navigate('/alignment');
      }}
     />
    </>
  )
}

export default BtnBorder