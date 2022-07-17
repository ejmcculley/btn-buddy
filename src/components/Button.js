const Button = ({ color, text, onClick }) => {
  return (
    <>
    <Button 
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'>
        { text }
      </Button>
    </>
  )
}

Button.defaultProps = {
  color: '#101010',
  text: 'Select',
}

export default Button