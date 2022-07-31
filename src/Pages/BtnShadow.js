import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnShadow = ({ color }) => {
  let navigate = useNavigate();
  return (
    <>
    <header>
      <h2>Choose your Shadow</h2>
    </header>
    <main>
      <Button 
        text={'Flat'}
        className={'btn'}
        onClick={() => {
          navigate('/results');
        }}
      />
      <Button 
        text={'Business Class'}
        className={'business-class'}
        onClick={() => {
          navigate('/results');
        }}
      />
      <Button 
        text={'Vampire'}
        className={'vampire'}
        onClick={() => {
          navigate('/results');
        }}
      />
     </main>
    </>
  )
}

export default BtnShadow