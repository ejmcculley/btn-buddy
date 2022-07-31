import Button from "components/Button"
import { useNavigate } from 'react-router-dom'

const BtnAlignment = () => {
  let navigate = useNavigate();
  return (
    <>
    <header>
      <h2>Choose your Alignment</h2>
    </header>
    <main>
      <Button 
        text={'Left'}
        className={'align-left'}
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
        className={'align-right'}
        onClick={() => {
          navigate('/shadow');
        }}
      />
     </main>
    </>
  )
}

export default BtnAlignment