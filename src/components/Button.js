const Button = ({ text, value, onClick, className }) => {
    
  return(
    <>
    <button 
      className={className}
      value={value}
      onClick={onClick}
     > 
     { text }
     </button>
    </>
  )
}

export default Button;