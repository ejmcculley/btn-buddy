import PropTypes from 'prop-types';

const Button = ({ color, textColor, shape, border, alignment, shadow, text, onClick }) => {
  return (
    <>
    <button 
      onClick={onClick}
      style={{ 
        backgroundColor: color,
        color: textColor,
        borderRadius: shape,
        borderStyle: border,
        textAlign: alignment,
        boxShadow: shadow,

      }}
      className='btn'>
        { text }
      </button>
    </>
  )
}

Button.defaultProps = {
  color: '#5750ff',
  textColor: '#fff',
  shape: '25px',
  text: 'Select',
  border: '10px solid black',
  alignment: 'left',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  shape: PropTypes.string,
  border: PropTypes.string,
  alignment: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button