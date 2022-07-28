import Button from 'components/Button.js'
import { useNavigate } from 'react-router-dom'
import useAttribute from 'useAttribute';

//click to submit / add property to object
// useState empty object, const [btnAttribute, setBtnAttribute] = useState({});
// <Results btnAttribute={btnAttribute} />

const Results = ({ color }) => {
  let navigate = useNavigate();
  return (
    <>
    <h2>Copy to Add to your Project!</h2>
    {/* render btnAttribut props in finishedBtn div using useAttribute hook */}
    <div className="finishedBtn">
      <p>{ btnAttribute.backgroundColor }</p>
    </div>
     <Button 
      text={'Restart'}
      color={color}
      onClick={() => {
        navigate('/');
      }}
     />
    </>
  )
}

export default Results