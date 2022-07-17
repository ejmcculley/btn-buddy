import PropTypes from 'prop-types';

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

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button