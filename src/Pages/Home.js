import Button from 'components/Button.js'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate();
  return (
    <>
    <header>
      <h2>Let's Get Started!</h2>
    </header>
    <main>
      <Button 
        text={'Begin'}
        className={'btn'}
        onClick={()=> {
          navigate('/color');
        }}
      />
    </main>
    </>
  )
}

export default Home