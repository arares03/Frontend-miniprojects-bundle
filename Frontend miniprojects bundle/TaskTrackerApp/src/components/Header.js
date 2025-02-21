import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {

    const onClick = () => {
        console.log('cliccked');
    }
  return (
  <header className = 'header'>
    <h1 >
        {title}
    </h1>
    <Button color = 'green' text = 'Add!' onClick = {onClick}/>
  </header>
  ) 
}

Button.defaultProps = {
    color: 'steelblue',

}

Button.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func,
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string.isRequired , 
}

// const headingStyle = {
//     color: 'red', backgroundColor : "black"
// }
export default Header