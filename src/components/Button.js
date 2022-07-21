import PropTypes from 'prop-types';

// Need to figure out where to add button building methods
// Do I stack the button component with methods and compose in button builder?

const Button = ({ color, text, onClick }) => {
  return (
    <>
    <button 
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'>
        { text }
      </button>
    </>
  )
}

Button.defaultProps = {
  color: '#5750ff',
  text: 'Select',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button