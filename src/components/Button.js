const Button = ({ text, value, onClick, className, style }) => {
    
  return(
    <>
    <button 
      className={className}
      value={value}
      style={style}
      onClick={onClick}
     > 
     { text }
     </button>
    </>
  )
}

export default Button;