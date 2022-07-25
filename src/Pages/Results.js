import Button from 'components/Button.js'
import { useNavigate } from 'react-router-dom'

const Results = () => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Copy to Add to your Project!</h2>
     <Button 
      text={'Restart'}
      onClick={() => {
        navigate('/');
      }}
     />
    </>
  )
}

export default Results