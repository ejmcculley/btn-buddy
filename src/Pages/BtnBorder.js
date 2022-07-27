import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnBorder = ({ color }) => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Border</h2>
     <Button 
      text={'Nakey'}
      color={color}
      onClick={() => {
        navigate('/alignment');
      }}
     />
     <Button 
      text={'Thin Mint'}
      color={color}
      onClick={() => {
        navigate('/alignment');
      }}
     />
     <Button 
      text={'Thick Boi'}
      color={color}
      onClick={() => {
        navigate('/alignment');
      }}
     />
    </>
  )
}

export default BtnBorder