import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnFill = () => {
  let navigate = useNavigate();
  return (
    <>
    <header>
      <h2>Choose your Fill</h2>
    </header>
    <main>
      <Button 
        text={'Filled In'}
        className={'filled'}
        onClick={() => {
          navigate('/border');
        }}
      />
      <Button 
        text={'Outline'}
        className={'outline'}
        onClick={() => {
          navigate('/border');
        }}
      />
     </main>
    </>
  )
}

export default BtnFill