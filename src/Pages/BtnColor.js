import Button from "components/Button"
import { useNavigate } from 'react-router-dom'
import { useState } from "react";


const BtnColor = () => {
  const [btnColor, setBtnColor] = useState('btn');
  const handleAddColor = (e) => {
    setBtnColor((btnColor) => e.target.value)
  }
  let navigate = useNavigate();
  
  return (
    <>
    <style>
      {
        `
        .red {background-color: red}
        .green {background-color: green}
        .blue {background-color: blue}
        `
      }
    </style>
    <header>
     <h2>Choose your Color</h2>
    </header>
    <main>
      <Button 
        text='Select'
        className={`btn ${btnColor}`}
        value={'blue'}
        style={{backgroundColor: '#5750ff'}}
        onClick={handleAddColor} {...navigate('/shape')}
      /> 
      <Button 
        text='Select'
        className={`btn ${btnColor}`}
        value={'blue'}
        style={{backgroundColor: '#f24e1d'}}
        onClick={handleAddColor} {...navigate('/shape')}
      />
      <Button 
        text='Select'
        className={`btn ${btnColor}`}
        value={'blue'}
        style={{backgroundColor: '#ff7262'}}
        onClick={handleAddColor} {...navigate('/shape')}
      />
      <Button 
        text='Select'
        className={`btn ${btnColor}`}
        value={'blue'}
        style={{backgroundColor: '#28b78b'}}
        onClick={handleAddColor} {...navigate('/shape')}
      />
      <Button 
        text='Select'
        className={`btn ${btnColor}`}
        value={'blue'}
        style={{backgroundColor: '#20bbfe'}}
        onClick={handleAddColor} {...navigate('/shape')}
      />
      <Button 
        text='Select'
        className={`btn ${btnColor}`}
        value={'blue'}
        style={{backgroundColor: '#ffd242'}}
        onClick={handleAddColor} {...navigate('/shape')}
      /> 
      <Button 
        text='Select'
        className={`btn ${btnColor}`}
        value={'blue'}
        style={{backgroundColor: '#101010'}}
        onClick={handleAddColor} {...navigate('/shape')}
      />  
     </main> 
    </>
  )
}


export default BtnColor