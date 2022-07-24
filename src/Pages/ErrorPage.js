import { useNavigate } from "react-router-dom"
import Button from 'components/Button.js'

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <>
      <h2>
        Oopsie! This page doesn't exist...
      </h2>
      <Button onClick={()=> {
        navigate('/home');
       }} 
      />
   </>
  )
}

export default ErrorPage