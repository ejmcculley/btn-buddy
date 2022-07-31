import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnBorder = ({ color }) => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Choose your Border</h2>
     <Button 
      text={'Nakey'}
      className={'btn'}
      onClick={() => {
        navigate('/alignment');
      }}
     />
     <Button 
      text={'Thin Mint'}
      className={'thin-mint'}
      onClick={() => {
        navigate('/alignment');
      }}
     />
     <Button 
      text={'Thicc Boi'}
      className={'thicc-boi'}
      onClick={() => {
        navigate('/alignment');
      }}
     />
    </>
  )
}

export default BtnBorder