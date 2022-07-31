import { useNavigate } from "react-router-dom"
import Button from 'components/Button.js'

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <>
    <header>
      <h2>Oopsie! This page doesn't exist...</h2>
    </header>
    <main>
      <Button 
      text={'Home'}
      className={'btn'}
      onClick={()=> {
        navigate('/');
       }} 
      />
    </main>
   </>
  )
}

export default ErrorPage