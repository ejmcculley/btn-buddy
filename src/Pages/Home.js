import Button from 'components/Button.js'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Let's Get Started!</h2>
     <Button 
      text={'Begin'}
      onClick={() => {
        navigate('/color');
      }}
     />
    </>
  )
}

export default Home