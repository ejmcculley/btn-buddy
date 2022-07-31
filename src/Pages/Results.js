import Button from 'components/Button.js'
import { useNavigate } from 'react-router-dom'
import BiCopy from 'react-icons/fa'
import { useState } from 'react';

//click to submit / add property to object
// useState empty object, const [btnAttribute, setBtnAttribute] = useState({});
// <Results btnAttribute={btnAttribute} />

// const Results = ({ color }) => {
//   const [btnAttribute, setBtnAttribute] = useState({backgroundColor: ''});
//   let navigate = useNavigate();
//   return (
//     <>
//     <h2>Copy to Add to your Project!</h2>
//     {/* render btnAttribut props in finishedBtn div using useAttribute hook */}
//     <div className="finishedBtn">
//       <p>{ btnAttribute.backgroundColor }</p>
//     </div>
//      <Button 
//       text={'Restart'}
//       color={color}
//       onClick={() => {
//         navigate('/');
//       }}
//      />
//     </>
//   )
// }

// export default Results

import React from 'react'

const Results = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="finishedButton">
        <h2>Copy your Button</h2>
        <Button
          text={'Btn Buddy'}
          className={'finished-button'}
        />
      </div>
      <div className="restart">
        <Button
          text={'Restart'}
          className={'btn'}
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
    </>
  )
}

export default Results